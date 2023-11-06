gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.5,
  effects: true,
})

if (ScrollTrigger.isTouch !==1) {

  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  })

  gsap.fromTo('.hero-section', { opacity: 1}, {
    opacity: 1, 
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'center',
      end: '2000',
      scrub: true,
    }
    })

}
