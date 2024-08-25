document.addEventListener('DOMContentLoaded', () => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    document.body.appendChild(dot);

    document.addEventListener('mousemove', (event) => {
        dot.style.left = `${event.pageX}px`;
        dot.style.top = `${event.pageY}px`;
    });
});

gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline();

gsap.to('.dot',{
    duration:1,
    delay:.5,
    ease: "power2.out"
})

// Add animations to the timeline
tl.from('.landing .landing-bg', {
    scale: 2,
    top: '-100vh',
    duration:.8,
    boxShadow: "0px 0px 20px 2px white",
})

tl.from('.main-nav', {
    opacity: 0,
    y: -50,
    duration: .2
})

tl.from('.info h1', {
    opacity: 0,
    y: 50,
    duration: .5
},'-=0.3') // Overlap with previous animation
tl.from('.info p', {
    opacity: 0,
    y: 50,
    duration: .5
}, '-=0.3') // Overlap with previous animation
tl.from('.explore-button', {
    opacity: 0,
    y: 50,
    duration: .5,
    yoyo:1
}, '-=0.2'); // Slight overlap for a smooth sequence

const t2 = gsap.timeline({ repeat: -1, yoyo: true });
t2.fromTo('.astronaut',
  { opacity: 1, y: 10 },
  { opacity: 1, y: 0, duration: 2.5 },
)
.to('.astronaut',
  { opacity: 1, x: 10, duration: 2.5 },
  '-=2.5'
);

tl.to('.wonder-text h1',{
    transform:'translate(-80%)',
    scrollTrigger: {
        trigger: ".wonder-text",
        scroller: "body",
        scrub: 3,
        start:"top 0%",
        end:"top -200%",
        pin:true,
        // markers:true
    }
})