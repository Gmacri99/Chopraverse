import { Observer, gsap } from "./gsap";


// INIT
gsap.registerPlugin(Observer);
gsap.set('section', {
    position: 'absolute',
    top: 0,
    left: 0,
})
// INIT

let animating = false,
    currentIndex = 0,
    nextIndex = -1;
const maxIndex = 5;
const isAnimating = () => animating = true;
const notAnimating = () => animating = false;

const headerTimeline = gsap.timeline({
    paused: true,
    defaults: {
        duration: 1,
        // ease: 'sine.in',
    }
})


const scrollTimeline = gsap.timeline({
    paused: true,
    defaults: {
        duration: 1,
        ease: 'power2.inOut',
    },
})
    // INDEX: 1
    .to("#hero-section", {
        yPercent: -100,
        onReverseComplete: notAnimating,
    })
    .from('#welcome-section', {
        yPercent: 100,

    }, "<")
    .from('.welcome-before > p', {
        y: '50vh',
    }, "<")
    .from('.welcome-wrapper', {
        y: '150vh',
        onComplete: notAnimating,
    }, "<")
    // INDEX: 2
    .to('.welcome-wrapper', {
        clipPath: 'circle(100%)',
        onReverseComplete: notAnimating,
    })
    .to('.welcome-before', {
        opacity: 0,
    }, "<")
    .from('.welcome-text', {
        y: '50vh',
        opacity: 0,
        onComplete: notAnimating,
    }, "<")
    // INDEX: 3
    .to('.welcome-wrapper', {
        // xPercent: -100,
        clipPath: 'circle(50%)',
        onReverseComplete: notAnimating,
        duration: 0.75,
    })
    .to('.welcome-wrapper', {
        xPercent: -100,
        duration: 0.75,
    }, '<0.25')
    
function scrollListener(index, direction) {
    if (index > maxIndex || index < 0) return;

    if (direction == -1) {
        headerTimeline.play();
        gsap.to('.navbar > #hero-section', {
            yPercent: -100,
            opacity: 0,
            duration: 1,
        })
    }
    else if (direction == 1) {
        headerTimeline.tweenTo(0);
        gsap.to('.navbar > #hero-section', {
            yPercent: 0,
            opacity: 1,
            duration: 2,
        })
    }
    isAnimating()
    scrollTimeline.timeScale(0.75).tweenTo(index);
    currentIndex = index;
}

export const observer = Observer.create({
    target: window,
    type: 'wheel, touch, scroll',
    preventDefault: true,
    onDown: () => !animating && scrollListener(currentIndex - 1, 1),
    onUp: () => !animating && scrollListener(currentIndex + 1, -1),
    wheelSpeed: -1
})
console.log(observer);


