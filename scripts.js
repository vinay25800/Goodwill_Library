document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav");
  const header = document.querySelector(".header");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Header scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Cursor effect
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("mouseover", () => {
      cursor.classList.add("cursor-hover");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-hover");
    });
  });
});
// js for about us section
document.addEventListener("DOMContentLoaded", function () {
  const aboutTitle = document.querySelector(".about-title");
  const aboutDescription = document.querySelector(".about-description");
  const aboutImages = document.querySelectorAll(".about-image");

  const observerOptions = {
    root: null,
    threshold: 0.2,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  observer.observe(aboutTitle);
  observer.observe(aboutDescription);
  aboutImages.forEach((image) => observer.observe(image));
});

// for pricing section
document.addEventListener("DOMContentLoaded", function () {
  const pricingCards = document.querySelectorAll(".pricing-card");

  document.addEventListener("mousemove", function (e) {
    const cursor = document.querySelector(".pricing-card::after");
    const x = e.clientX;
    const y = e.clientY;

    pricingCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom
      ) {
        card.style.setProperty("--cursor-x", `${x - rect.left}px`);
        card.style.setProperty("--cursor-y", `${y - rect.top}px`);
      }
    });
  });
});

// footer js

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
// js for gallery
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("fullscreen-modal");
  const modalImg = document.querySelector(".fullscreen-img");
  const closeBtn = document.querySelector(".close");
  const galleryGrid = document.querySelector(".gallery-grid");
  const scrollLeftBtn = document.querySelector(".left-btn");
  const scrollRightBtn = document.querySelector(".right-btn");

  // Function to open the image in fullscreen
  document.querySelectorAll(".gallery-item img").forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  // Function to close the fullscreen modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close the modal if the user clicks outside the image
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Get the number of items to scroll
  const itemWidth = document.querySelector(".gallery-item").offsetWidth;
  const totalItems = document.querySelectorAll(".gallery-item").length;
  const maxScroll = itemWidth * (totalItems - 3); // Total width to scroll

  let currentScroll = 0;

  // Scroll left
  scrollLeftBtn.addEventListener("click", () => {
    currentScroll = Math.max(currentScroll - itemWidth, 0);
    galleryGrid.style.transform = `translateX(-${currentScroll}px)`;
  });

  // Scroll right
  scrollRightBtn.addEventListener("click", () => {
    currentScroll = Math.min(currentScroll + itemWidth, maxScroll);
    galleryGrid.style.transform = `translateX(-${currentScroll}px)`;
  });

  // Automatic scrolling
  setInterval(() => {
    currentScroll = (currentScroll + itemWidth) % (maxScroll + itemWidth);
    galleryGrid.style.transform = `translateX(-${currentScroll}px)`;
  }, 3000); // Adjust the interval time as needed
});
