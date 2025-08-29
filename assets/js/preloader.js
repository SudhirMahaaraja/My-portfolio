console.clear();
class CircleAnime {
  constructor(el) {
    this.CIRCLE = { el: document.querySelector('.circle-1') };
    this.CIRCLE.circle = [...this.CIRCLE.el.querySelectorAll('.circle-1__item')];
    this.init();
  }

  init() {
    this.tl = gsap.timeline({ repeat: -1 }).timeScale(6).
    set(this.CIRCLE.circle[0], { zIndex: 10 }, 0).
    set(this.CIRCLE.circle[1], { zIndex: 20 }, 0).
    set(this.CIRCLE.circle[2], { zIndex: 10 }, 0).
    set(this.CIRCLE.circle[3], { zIndex: 10 }, 0).
    to(this.CIRCLE.circle[2], { delay: .1, duration: 4, rotateY: -90, ease: 'none' }).
    from(this.CIRCLE.circle[1], { duration: 4, rotateY: 90, ease: 'none' }).
    set(this.CIRCLE.circle[2], { rotateY: 0, zIndex: 5 }).
    set(this.CIRCLE.circle[3], { rotateY: 90, zIndex: 20 }).
    to(this.CIRCLE.circle[0], { duration: 4, rotateY: -90, ease: 'none' }).
    to(this.CIRCLE.circle[3], { duration: 4, rotateY: 0, ease: 'none' });
  }}


const circle = new CircleAnime();