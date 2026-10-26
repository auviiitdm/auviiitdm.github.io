// Initialize water effect for different pages
const waterEffectId = document.getElementById("gravityCoding") ? "gravityCoding" :
  document.getElementById("aboutWaterEffect") ? "aboutWaterEffect" :
    document.getElementById("achievementsWaterEffect") ? "achievementsWaterEffect" :
      document.getElementById("vehiclesWaterEffect") ? "vehiclesWaterEffect" :
        document.getElementById("sponsorsWaterEffect") ? "sponsorsWaterEffect" :
          document.getElementById("teamWaterEffect") ? "teamWaterEffect" :
            document.getElementById("galleryWaterEffect") ? "galleryWaterEffect" :
              document.getElementById("contactWaterEffect") ? "contactWaterEffect" : null;

// Only initialize UnicornStudio if available, not on mobile if disabled
if (waterEffectId && typeof UnicornStudio !== "undefined") {
  const isMobile = window.innerWidth <= 900;
  if (!isMobile) {
    UnicornStudio.addScene({
      elementId: waterEffectId,
      fps: 60,
      scale: 1,
      dpi: 1,
      lazyLoad: false,
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
        console.warn('Water effect skipped or unavailable:', err);
      });
  }
}

// Blob movement effect
var videoContainer = document.querySelector(".section-2");
var blob = document.querySelector("#blob");

if (videoContainer && blob) {
  videoContainer.addEventListener("mousemove", function (details) {
    blob.style.transform = `translate(${details.clientX * 0.5}px, ${details.clientY * 0.3}px)`;
  });
}

// GSAP Animations - Simplified & Responsive
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Simple Fade-in for key elements (Headings, Cards)
    gsap.utils.toArray("h1, h2.section-title, .card-custom, .gallery-card, .sponsor-card, .dept-card").forEach(element => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true
        },
        y: 20,
        opacity: 0.85,
        duration: 0.6,
        ease: "power2.out"
      });
    });

    // Button Hover Effects
    const buttons = document.querySelectorAll(".btn-primary, .btn-animated");
    buttons.forEach(btn => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.04, duration: 0.25, ease: "power1.out" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.25, ease: "power1.out" });
      });
    });
  }
});

// Preserve existing section animations
if (document.querySelector("#section2-1") && typeof gsap !== "undefined") {
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

// Enhanced Mobile Navigation Drawer
document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const cntrNav = document.querySelector(".cntr-nav");

  if (mobileToggle && cntrNav) {
    const toggleMenu = () => {
      const isActive = mobileToggle.classList.toggle("is-active");
      cntrNav.classList.toggle("nav-active");
      document.body.style.overflow = isActive ? "hidden" : "";
    };

    const closeMenu = () => {
      mobileToggle.classList.remove("is-active");
      cntrNav.classList.remove("nav-active");
      document.body.style.overflow = "";
    };

    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close when clicking a nav link
    cntrNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    // Close when clicking outside of the drawer
    document.addEventListener("click", (e) => {
      if (cntrNav.classList.contains("nav-active") && !cntrNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && cntrNav.classList.contains("nav-active")) {
        closeMenu();
      }
    });
  }

  // Auto-inject thumbnails into team members on Team Hub
  const teamMembers = document.querySelectorAll(".team-member");
  if (teamMembers.length > 0) {
    teamMembers.forEach(member => {
      const imgPath = member.getAttribute("data-image");
      if (imgPath && !member.querySelector(".team-member-thumb")) {
        const thumb = document.createElement("img");
        thumb.src = imgPath;
        thumb.alt = member.querySelector(".member-name")?.textContent.trim() || "Member";
        thumb.className = "team-member-thumb";
        thumb.loading = "lazy";
        member.insertBefore(thumb, member.firstChild);
      }
    });
  }
});