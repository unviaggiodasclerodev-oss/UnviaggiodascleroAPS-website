<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Exact chronological tappe — same order as Viaggio2027.vue
const tappe = [
  'Taranto', 'Matera', 'San Gregorio Magno', 'Napoli', 'Formia', 'Roma',
  'Orvieto', 'Torrenieri', 'Pontedera', 'La Spezia', 'Genova',
  'Nizza Monferrato', 'Torino', 'Milano', 'Verona',
]

const containerRef = ref(null)
const vw = ref(1200)
const vh = ref(6000)
let ro = null

onMounted(() => {
  ro = new ResizeObserver(entries => {
    for (const e of entries) {
      vw.value = Math.round(e.contentRect.width)
      vh.value = Math.round(e.contentRect.height)
    }
  })
  if (containerRef.value) ro.observe(containerRef.value)
})
onUnmounted(() => { if (ro) ro.disconnect() })

// Build the control points: top anchor → 15 tappa dots → bottom anchor
const points = computed(() => {
  const w = vw.value
  const h = vh.value
  const n = tappe.length   // 15
  const pad = h * 0.02

  const pts = [{ x: w * 0.50, y: 0, name: null }]

  for (let i = 0; i < n; i++) {
    const t = (i + 1) / (n + 1)
    const y = pad + t * (h - 2 * pad)
    // S-wave: amplitude 38% of width so dots land in the side whitespace
    const phase = (i + 0.5) * Math.PI * 0.9
    const x = w * 0.50 + w * 0.38 * Math.sin(phase)
    pts.push({ x, y, name: tappe[i], idx: i })
  }

  pts.push({ x: w * 0.50, y: h, name: null })
  return pts
})

// Catmull-Rom spline converted to cubic Bezier segments (smooth curve)
function spline(pts, tension = 0.35) {
  if (pts.length < 2) return ''
  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[Math.min(pts.length - 1, i + 2)]
    const cp1x = p1.x + (p2.x - p0.x) * tension
    const cp1y = p1.y + (p2.y - p0.y) * tension
    const cp2x = p2.x - (p3.x - p1.x) * tension
    const cp2y = p2.y - (p3.y - p1.y) * tension
    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)} ${cp2x.toFixed(1)} ${cp2y.toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`
  }
  return d
}

const pathD = computed(() => spline(points.value))
const tappePoints = computed(() => points.value.filter(p => p.name !== null))

// Labels hug the viewport edge — opposite side from dot keeps them in whitespace
const MARGIN = 16
function side(p)   { return p.x > vw.value * 0.5 ? 'right' : 'left' }
function lx(p)     { return side(p) === 'right' ? vw.value - MARGIN : MARGIN }
function anchor(p) { return side(p) === 'right' ? 'end' : 'start' }
function connX(p)  { return p.x + (lx(p) - p.x) * 0.45 }
</script>

<template>
  <div ref="containerRef" class="journey-line-layer" aria-hidden="true">
    <svg
      :width="vw"
      :height="vh"
      :viewBox="`0 0 ${vw} ${vh}`"
      xmlns="http://www.w3.org/2000/svg"
      class="journey-svg"
      overflow="visible"
    >
      <defs>
        <!-- Fade at very top and bottom so line enters/exits gracefully -->
        <linearGradient id="jl-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#F05022" stop-opacity="0" />
          <stop offset="3%"   stop-color="#F05022" stop-opacity="1" />
          <stop offset="97%"  stop-color="#F05022" stop-opacity="1" />
          <stop offset="100%" stop-color="#F05022" stop-opacity="0" />
        </linearGradient>
        <mask id="jl-mask">
          <rect x="-50%" y="0" width="200%" height="100%" fill="url(#jl-fade)" />
        </mask>
      </defs>

      <!-- Soft glow behind dots line -->
      <path :d="pathD" fill="none" stroke="#F05022" stroke-width="12"
        stroke-dasharray="3 14" stroke-linecap="round"
        opacity="0.07" mask="url(#jl-mask)" />

      <!-- Main dotted line -->
      <path :d="pathD" fill="none" stroke="#F05022" stroke-width="2"
        stroke-dasharray="3 14" stroke-linecap="round"
        opacity="0.45" mask="url(#jl-mask)" />

      <!-- Tappa markers + edge labels -->
      <g v-for="(p, i) in tappePoints" :key="i">
        <!-- Outer pulse ring -->
        <circle :cx="p.x" :cy="p.y" r="13" fill="none"
          stroke="#F05022" stroke-width="0.7" opacity="0.18" />
        <!-- Inner ring -->
        <circle :cx="p.x" :cy="p.y" r="6.5" fill="none"
          stroke="#F05022" stroke-width="1.5" opacity="0.50" />
        <!-- Filled dot -->
        <circle :cx="p.x" :cy="p.y" r="3.5" fill="#F05022" opacity="0.65" />

        <!-- Short dashed connector from dot to the label at the edge -->
        <line :x1="p.x" :y1="p.y" :x2="connX(p)" :y2="p.y"
          stroke="#F05022" stroke-width="0.7"
          stroke-dasharray="2 4" opacity="0.30" />

        <!-- City name — in the viewport margin area -->
        <text
          :x="lx(p)" :y="p.y - 5"
          :text-anchor="anchor(p)"
          font-family="'Barlow Condensed', sans-serif"
          font-size="10" font-weight="700" letter-spacing="2"
          fill="#F05022" opacity="0.40"
        >{{ p.name.toUpperCase() }}</text>

        <!-- Tappa number -->
        <text
          :x="lx(p)" :y="p.y + 12"
          :text-anchor="anchor(p)"
          font-family="'Barlow Condensed', sans-serif"
          font-size="8" letter-spacing="1"
          fill="#F05022" opacity="0.25"
        >{{ p.idx + 1 }} / 15</text>
      </g>
    </svg>
  </div>
</template>
