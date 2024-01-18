const scrollers = document.querySelectorAll(".scroller");

scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const list = scroller.querySelector(".tag-list");
    const contentOfList = Array.from(list.children);

    contentOfList.forEach((item) => {
        const duplicatedItems = item.cloneNode(true);

        duplicatedItems.setAttribute("aria-hidden", true);

        list.appendChild(duplicatedItems);
    });
});

let tl1 = gsap.timeline();
let tl2 = gsap.timeline();


tl1.to("#logoIntro", {
    duration: 1.3,
    y:0,    
});

tl1.to("#logoIntro", {
    duration: .01,
    className: 'hidden',
    delay:.8, 
});

tl1.to("#glitchLogo", {
    duration: 1,     
    className: '-=hidden' ,
    
});

tl1.to("#glitchLogo", {
    duration: .01,    
    className: 'hidden' ,
});

tl1.to("#logoIntro", {
    duration: .01,
    className: '-=hidden' ,  
});

tl1.to("#logoIntro", {
    duration: .6,
    opacity: 0,
    delay:1,        
});

tl1.to("#intro", {
    duration: 2,    
    opacity: 0,
    delay: .4,
    onComplete: function () {
        gsap.set("#intro", { visibility: "hidden" });
    }
});

tl1.to("#realLogo", {
    duration: 1,
    y:0,
    x:0,
    top:0,
    left:0,        
});






gsap.to('#test', {
    background: "url('./whitebox.svg') 0rem 0rem / cover no-repeat",    
    scrollTrigger: {
        trigger: "#test",
        scroller: "body",
        scrub: .1,
        end: 'top 20%',
        start: 'top 79%',
        // markers: true,        
    },    
    duration: 1,
});

gsap.to('#box', {
    opacity: 1,
    scrollTrigger: {
        trigger: "#box",
        scroller: "body",
        scrub: .2,
        end: 'bottom 40%',
        start: 'top 69%',
        // markers: true,
        // pin: true,
    },
    duration: .7,
});

gsap.to('#box2', {
    opacity: 1,
    scrollTrigger: {
        trigger: "#box2",
        scroller: "body",
        scrub: .2,
        end: 'bottom 40%',
        start: 'top 69%',
        // markers: true,
        // pin: true,
    },
    duration: .7,
});

gsap.to('#box3', {
    opacity: 1,
    scrollTrigger: {
        trigger: "#box3",
        scroller: "body",
        scrub: .2,
        end: 'bottom 40%',
        start: 'top 69%',
        // markers: true,
        // pin: true,
    },
    duration: .7,
});

gsap.to('#box4', {
    opacity: 1,
    scrollTrigger: {
        trigger: "#box4",
        scroller: "body",
        scrub: .2,
        end: 'bottom 40%',
        start: 'top 69%',
        // markers: true,
        // pin: true,
    },
    duration: .7,
});


// if (!window.matchMedia("(prefers-reduce-motion: reduce)").matches) {
//     addAnimation();
// };

// function addAnimation() {
//     scrollers.forEach((scroller) => {
//         scroller.setAttribute("data-animated", true);

//         const list = scroller.querySelector('.tag-list');
//         const contentOfList = Array.from(list.children);

//         contentOfList.forEach((item) => {
//             const duplicatedItems = item.cloneNode(true);

//             duplicatedItems.setAttribute("aria-hidden", true);

//             list.appendChild(duplicatedItems);
//         })
//     });
// }
