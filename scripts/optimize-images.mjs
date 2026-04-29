import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const PROJECT_ROOT = process.cwd();
const TARGET_DIRECTORIES = ["public", "src/assets"];
const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const MIN_SAVINGS_BYTES = 1024;

const qualityByExtension = {
  ".jpg": (image) => image.jpeg({ quality: 78, mozjpeg: true, progressive: true }),
  ".jpeg": (image) => image.jpeg({ quality: 78, mozjpeg: true, progressive: true }),
  ".png": (image) => image.png({ quality: 90, compressionLevel: 9, effort: 10, palette: true }),
  ".webp": (image) => image.webp({ quality: 80, effort: 6 }),
  ".avif": (image) => image.avif({ quality: 50, effort: 8 }),
};

async function collectFilesRecursively(startDirectory) {
  const absoluteDirectory = path.resolve(PROJECT_ROOT, startDirectory);
  const entries = await fs.readdir(absoluteDirectory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(absoluteDirectory, entry.name);

    if (entry.isDirectory()) {
      const nested = await collectFilesRecursively(path.join(startDirectory, entry.name));
      files.push(...nested);
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    if (SUPPORTED_EXTENSIONS.has(extension)) {
      files.push(absolutePath);
    }
  }

  return files;
}

function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  const kb = bytes / 1024;
  if (kb < 1024) {
    return `${kb.toFixed(1)} KB`;
  }

  return `${(kb / 1024).toFixed(2)} MB`;
}

async function optimizeImageInPlace(imagePath) {
  const extension = path.extname(imagePath).toLowerCase();
  const transformer = qualityByExtension[extension];
  if (!transformer) {
    return { status: "skipped", reason: "unsupported-format", before: 0, after: 0 };
  }

  const originalBuffer = await fs.readFile(imagePath);
  const optimizedBuffer = await transformer(sharp(originalBuffer)).toBuffer();

  if (optimizedBuffer.length >= originalBuffer.length - MIN_SAVINGS_BYTES) {
    return {
      status: "skipped",
      reason: "no-meaningful-savings",
      before: originalBuffer.length,
      after: originalBuffer.length,
    };
  }

  await fs.writeFile(imagePath, optimizedBuffer);
  return {
    status: "optimized",
    before: originalBuffer.length,
    after: optimizedBuffer.length,
  };
}

async function main() {
  const existingTargets = [];

  for (const directory of TARGET_DIRECTORIES) {
    const absolutePath = path.resolve(PROJECT_ROOT, directory);
    try {
      const stats = await fs.stat(absolutePath);
      if (stats.isDirectory()) {
        existingTargets.push(directory);
      }
    } catch {
      // Skip missing folders silently.
    }
  }

  if (existingTargets.length === 0) {
    console.log("No target directories found (expected public/ or src/assets/).");
    return;
  }

  const allImages = [];
  for (const target of existingTargets) {
    const files = await collectFilesRecursively(target);
    allImages.push(...files);
  }

  let optimizedCount = 0;
  let skippedCount = 0;
  let beforeTotal = 0;
  let afterTotal = 0;

  for (const imagePath of allImages) {
    try {
      const result = await optimizeImageInPlace(imagePath);
      if (result.status === "optimized") {
        optimizedCount += 1;
      } else {
        skippedCount += 1;
      }
      beforeTotal += result.before;
      afterTotal += result.after;
    } catch (error) {
      skippedCount += 1;
      const relative = path.relative(PROJECT_ROOT, imagePath);
      console.warn(`Skipped ${relative}: ${error.message}`);
    }
  }

  const savedBytes = beforeTotal - afterTotal;
  const percent = beforeTotal > 0 ? ((savedBytes / beforeTotal) * 100).toFixed(2) : "0.00";

  console.log(`Processed: ${allImages.length} images`);
  console.log(`Optimized: ${optimizedCount}`);
  console.log(`Skipped:   ${skippedCount}`);
  console.log(`Before:    ${formatBytes(beforeTotal)}`);
  console.log(`After:     ${formatBytes(afterTotal)}`);
  console.log(`Saved:     ${formatBytes(savedBytes)} (${percent}%)`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
