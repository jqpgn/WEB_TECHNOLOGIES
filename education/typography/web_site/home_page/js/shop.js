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

  gsap.fromTo('.hero', { opacity: 1}, {
    opacity: 0, 
    scrollTrigger: {
      trigger: '.hero',
      start: 'center',
      end: '400',
      scrub: true,
    }
    })

}

function scrollWin() {
  window.scrollTo(0, 0);
    behavior: "smooth";
}