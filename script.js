document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic copyright year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Mobile navigation toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    // Close mobile menu when clicking a link
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }

  // 3. Simple Form Submission Handler
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        formStatus.style.color = "#ef4444";
        formStatus.textContent = "Please fill in all fields.";
        formStatus.style.display = "block";
        return;
      }

      // Feedback message simulation (replace with Formspree, EmailJS, or custom backend)
      formStatus.style.color = "#34d399";
      formStatus.textContent = "Thank you! Your message has been sent successfully.";
      formStatus.style.display = "block";

      contactForm.reset();

      setTimeout(() => {
        formStatus.style.display = "none";
      }, 5000);
    });
  }

  // 4. Subtle scroll-triggered fade-in for section elements
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".section, .timeline-item, .project-card").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });
});