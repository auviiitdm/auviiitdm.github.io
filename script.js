// Initialize water effect for different pages
const waterEffectId = document.getElementById("gravityCoding") ? "gravityCoding" :
  document.getElementById("aboutWaterEffect") ? "aboutWaterEffect" :
    document.getElementById("achievementsWaterEffect") ? "achievementsWaterEffect" :
      document.getElementById("vehiclesWaterEffect") ? "vehiclesWaterEffect" :
        document.getElementById("sponsorsWaterEffect") ? "sponsorsWaterEffect" :
          document.getElementById("teamWaterEffect") ? "teamWaterEffect" :
            document.getElementById("galleryWaterEffect") ? "galleryWaterEffect" :
              document.getElementById("contactWaterEffect") ? "contactWaterEffect" : null;

if (waterEffectId) {
  UnicornStudio.addScene({
    elementId: waterEffectId,
    fps: 100,
    scale: 1,
    dpi: 1,
    lazyLoad: true,
    filePath: waterEffectId === "gravityCoding" ? "./WaterEffect/effect.json?v=22" : "./WaterEffect/effect-no-text.json?v=22",
    interactivity: {
      mouse: {
        disableMobile: true,
      },
    },
  })
    .then((scene) => {
      console.log('Water effect loaded for:', waterEffectId);
    })
    .catch((err) => {
      console.error(err);
    });
}

// Blob movement effect
var videoContainer = document.querySelector(".section-2");
var blob = document.querySelector("#blob");

if (videoContainer && blob) {
  videoContainer.addEventListener("mousemove", function (details) {
    blob.style.transform = `translate(${details.clientX * 0.5}px, ${details.clientY * 0.3}px)`
  })
}

// GSAP Animations - Simplified
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // Simple Fade-in for key elements (Headings, Cards) to maintain some polish without breaking layout
  gsap.utils.toArray("h1, h2.section-title, .card-custom, .gallery-card, .sponsor-card").forEach(element => {
    // Set initial state via CSS-friendly way - elements are already visible,
    // just add a subtle entrance animation without hiding them first.
    gsap.from(element,
      {
        scrollTrigger: {
          trigger: element,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true
        },
        y: 25,
        duration: 0.7,
        ease: "power2.out"
      }
    );
  });

  // Keep Button Hover Effects (Simple Scale)
  const buttons = document.querySelectorAll(".btn-primary, .btn-animated");
  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power1.out" });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, duration: 0.3, ease: "power1.out" });
    });
  });
});
// Preserve existing section animations
if (document.querySelector("#section2-1")) {
  var part1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2-1",
      start: "10% 100%",
      end: "90% 0%",
      scrub: true,
      duration: 1,
    }
  });
  part1.to("#top-nav-sec2", { backgroundColor: "#022e7c" }, 'a')
    .from("#section2-1 h1, #section2-1 p, #section2-1 img", { opacity: 0, y: -850 }, 'a')
    .to("#section2-1 h1, #section2-1 p, #section2-1 img", { opacity: 0, y: 850 });
}