/** Vue <Transition> hooks that animate height 0 <-> auto for accordion-style collapse/expand. */
export function useAccordionTransition() {
  function onBeforeEnter(el: Element) {
    const style = (el as HTMLElement).style
    style.height = '0'
    style.opacity = '0'
    style.overflow = 'hidden'
  }
  function onEnter(el: Element, done: () => void) {
    const htmlEl = el as HTMLElement
    htmlEl.style.transition = 'height 0.28s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease'
    requestAnimationFrame(() => {
      htmlEl.style.height = htmlEl.scrollHeight + 'px'
      htmlEl.style.opacity = '1'
      htmlEl.addEventListener('transitionend', done, { once: true })
    })
  }
  function onAfterEnter(el: Element) {
    const style = (el as HTMLElement).style
    style.height = 'auto'
    style.overflow = ''
    style.transition = ''
    style.opacity = ''
  }
  function onBeforeLeave(el: Element) {
    const htmlEl = el as HTMLElement
    htmlEl.style.height = htmlEl.scrollHeight + 'px'
    htmlEl.style.overflow = 'hidden'
    htmlEl.style.opacity = '1'
  }
  function onLeave(el: Element, done: () => void) {
    const htmlEl = el as HTMLElement
    htmlEl.style.transition = 'height 0.22s cubic-bezier(0.4,0,0.2,1), opacity 0.15s ease'
    requestAnimationFrame(() => {
      htmlEl.style.height = '0'
      htmlEl.style.opacity = '0'
      htmlEl.addEventListener('transitionend', done, { once: true })
    })
  }
  function onAfterLeave(el: Element) {
    const style = (el as HTMLElement).style
    style.height = ''
    style.overflow = ''
    style.opacity = ''
    style.transition = ''
  }

  return { onBeforeEnter, onEnter, onAfterEnter, onBeforeLeave, onLeave, onAfterLeave }
}
