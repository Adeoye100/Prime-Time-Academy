// Initialize Swiper with optimized settings
const heroSwiper = new Swiper(".hero-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect: "fade",
  speed: 900,
  preloadImages: false,
  lazy: true,
});

// Initialize tooltips
const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Dark mode toggle with optimized localStorage handling
const darkModeToggle = document.getElementById("darkModeToggle");
const darkModeIcon = document.getElementById("darkModeIcon");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function setDarkMode(isDark) {
  if (isDark) {
    document.body.classList.add("dark-mode");
    document.documentElement.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("darkMode", "enabled");
    if (darkModeIcon) darkModeIcon.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.body.classList.remove("dark-mode");
    document.documentElement.setAttribute("data-bs-theme", "light");
    localStorage.setItem("darkMode", "disabled");
    if (darkModeIcon) darkModeIcon.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

darkModeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-mode");
  setDarkMode(isDark);
});

// Check for saved preference or system preference
const currentMode = localStorage.getItem("darkMode");
if (
  currentMode === "enabled" ||
  (currentMode === null && prefersDarkScheme.matches)
) {
  setDarkMode(true);
} else {
  setDarkMode(false);
}

// Scroll handling
let lastKnownScrollPosition = 0;
let ticking = false;

window.addEventListener("scroll", function () {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      ticking = false;
    });

    ticking = true;
  }
});

// Section scroll-in animation
function revealSectionsOnScroll() {
  const sections = document.querySelectorAll("section, .footer");
  const trigger = window.innerHeight * 0.92;
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < trigger) {
      section.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealSectionsOnScroll);
window.addEventListener("DOMContentLoaded", () => {
  revealSectionsOnScroll();
});
// I build  to Imrpove..
