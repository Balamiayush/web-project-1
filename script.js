//smooth scrooling 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstpageAnim(){
let tl = gsap.timeline();
tl.from("#nav",{
    duration:1.5,
    opacity:0,
    y:-10,
    ease:Expo.easeInOut 
})
tl.to(".boundingelem",{
    y:0,
    duration:1.5,
    ease:Expo.easeInOut,
    stagger:.5, 
    
})
tl.from("#herofooter",{
    y:-10,
    opacity:0,
    duration:1.5,
    ease:Expo.easeInOut,
    stagger:.5, 
    
})
}

function circlemove() {
    window.addEventListener("mousemove", (dets) => {
        let x = dets.clientX;
        let y = dets.clientY;
        document.querySelector("#minicircle").style.transform = `translate(${x}px, ${y}px)`;
    });
}
circlemove();
firstpageAnim();