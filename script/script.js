document.addEventListener('mousemove', (e) =>{
    const section = document.querySelector('.clients-section');
    const rect = section.getBoundingClientRect();
    const midX = rect.left + rect.width / 2;

    if(e.clientX < midX){
        section.classList.add('left-active');
        section.classList.remove('right-active');
    }
    else{
        section.classList.add('right-active');
        section.classList.remove('left-active');
    }
});

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const heroSection = document.querySelector('.hero-section');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    heroSection.classList.toggle('adding_padding');
});


gsap.registerPlugin(ScrollTrigger);

//hero -> page1
let tl = gsap.timeline();
tl.to(".hero-content", { opacity: 0, scale: 0.9, duration: 12 });
tl.from(".page1-content", { yPercent: 80, opacity: 0, scale: 0.9, duration: 12 }, "<");

ScrollTrigger.create({
  trigger: ".page1",
  start: "top bottom",
  end: "top top",
  scrub: true,
  animation: tl
});


//page1 -> skills
let t2 = gsap.timeline();
t2.to(".page1-content", { duration: 4, scale:0.5 });
t2.from(".skills-content", { yPercent: -50, opacity: 0, duration: 4, scale:0.5 });
t2.from(".skills-images .skill-box", { y: 50, opacity: 0, stagger: 0.2, duration: 1 }, "<");

ScrollTrigger.create({
  trigger: ".skills-page",
  start: "top bottom",
  end: "top top",
  scrub: true,
  animation: t2
});


//skills -> about
let t3 = gsap.timeline();
t3.from(".whoWeAre-content", { x: -100, opacity: 0, duration: 8 });
t3.to(".skills-content", { yPercent: 50, opacity: 0, duration:6, scale:0.5 });

t3.from(".whoWeAre-image", { x: 100, opacity: 0, duration: 12 }, "<");

ScrollTrigger.create({
  trigger: ".whoWeAre-page",
  start: "top bottom",
  end: "top top",
  scrub: true,
  animation: t3
});


//about → clients
let t4 = gsap.timeline();
t4.from(".clients-left .logo, .clients-right .logo", { y: 80, opacity: 0, duration: 12 });

t4.from(".robot-container", { scale: 1.8, opacity: 0, duration: 12, transformOrigin: "center center" }, "<");

ScrollTrigger.create({
  trigger: ".clients-section",
  start: "top bottom",
  end: "top top",
  scrub: true,
  animation: t4
});


//clients -> verified
let t5 = gsap.timeline();
t5.from(".client-card", { y: 100, opacity: 0, duration: 15});
t5.from(".verification-logos img", { scale: 0.8, opacity: 0, stagger: 0.2, duration: 1.5 }, "<");

ScrollTrigger.create({
  trigger: ".verified-page",
  start: "top bottom",
  end: "top top",
  scrub: true,
  animation: t5
});

//verified -> footer
let t6 = gsap.timeline();
t6.from(".footer-overlay h1, .footer-overlay p, .footer-contact .contact-block, .footer-overlay button", 
    { y: 255, opacity: 0, duration: 5});

ScrollTrigger.create({
  trigger: ".footer",
  start: "top bottom",
  end: "top top",
  scrub: true,
  animation: t6
});