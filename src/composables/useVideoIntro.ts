import { ref } from 'vue'

const STORAGE_KEY = 'video_intro_seen_v1'

const isOpen = ref(false)

/** Returns true if the user has never seen the intro video. */
function isFirstVisit(): boolean {
  return !localStorage.getItem(STORAGE_KEY)
}

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
  localStorage.setItem(STORAGE_KEY, '1')
}

export function useVideoIntro() {
  return { isOpen, isFirstVisit, openModal, closeModal }
}
