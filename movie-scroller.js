
gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

var tl0 = gsap.timeline({ delay: 0.5, duration: 1 });
tl0.from(".textarea p", { opacity: 0 })
   .from(".textarea a", { opacity: 0 })
   .from(".textarea h2", { opacity: 0 });

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        // markers: true,
        start: "50% 50%",
        end: "150% 50%",
        scrub: 1.5,
        pin: true,
    }
});

tl.to("#lineone", { marginTop: "-120vh" }, 'baba')
  .to("#linetwo", { marginTop: "20vh" }, 'baba');

// Textillate effect
$('.textarea h1').textillate({
    initialDelay: 200,
    in: { effect: 'fadeInUp', delayScale: 1, delay: 40 }
});

