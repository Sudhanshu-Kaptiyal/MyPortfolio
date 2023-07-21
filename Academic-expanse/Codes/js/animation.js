



// Opening gsap animation
let tl = gsap.timeline({
    defaults: { ease: "power4.inOut", duration: 2 }
});


tl.to
    ('.animation1',
        {
            'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            opacity: 1,
            y: 0,
            duration: 1.2
        })


tl.to
    ('.animation2',
        {
            'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            opacity: 1,
            y: 0,
            delay: -.2
        },
        "-=1.25"
    );




gsap.fromTo('.Sidebar', {
    x: '-150%',
    opacity: 0,
}, {
    duration: 1.5,
    x: '0',
    ease: 'power2.out',
    opacity: 1,
    delay: .5,
});




gsap.fromTo('.main', {
    x: '-100%',
    opacity: 0,
}, {
    duration: 1,
    x: '0',
    ease: 'power2.out',
    opacity: 1,
    stagger: .07,
    delay: .5,
});




gsap.fromTo('.sidebar-ani1', {
    x: '-100%',
    opacity: 0,
}, {
    duration: 1,
    x: '0',
    ease: 'power2.out',
    opacity: 1,
    stagger: .1,
    delay: .8,
});



gsap.fromTo('.Header-Links', {
    opacity: 0,
}, {
    duration: 1.5,
    delay: 1,
    opacity: 1,
});



gsap.fromTo('.arrow-up-main', {
    opacity: 0,
}, {
    duration: 1.5,
    delay: .5,
    opacity: 1,
});

gsap.fromTo('.whatsapp-main', {
    opacity: 0,
}, {
    duration: 1.5,
    delay: .5,
    opacity: 1,
});




gsap.fromTo('.Main', {
    opacity: 0,
}, {
    duration: 1.5,
    delay: .5,
    opacity: 1,
});















