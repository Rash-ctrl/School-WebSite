// // Slideshow Logic
// let slideIndex = 0;
// const slides = document.querySelectorAll(".slide");
// const showSlides = () => {
//   slides.forEach((slide, index) => {
//     slide.style.display = index === slideIndex ? "block" : "none";
//   });
//   slideIndex = (slideIndex + 1) % slides.length;
//   setTimeout(showSlides, 3000); // Change slide every 3 seconds
// };

// document.addEventListener("DOMContentLoaded", () => {
//   if (slides.length > 0) {
//     showSlides();
//   }

//   // Scroll-to-section links
//   document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault();
//       const target = document.querySelector(this.getAttribute("href"));
//       if (target) {
//         target.scrollIntoView({ behavior: "smooth" });
//       }
//     });
//   });

//   // Sticky Navbar (optional enhancement)
//   const navbar = document.querySelector("nav");
//   const stickyOffset = navbar.offsetTop;

//   window.addEventListener("scroll", () => {
//     if (window.pageYOffset >= stickyOffset) {
//       navbar.classList.add("sticky");
//     } else {
//       navbar.classList.remove("sticky");
//     }
//   });
// });
// this is by blackbox.ai
// let slideIndex = 0;
// let slideInterval;

// showSlides();
// startAutoSlide();

// function changeSlide(n) {
//     slideIndex += n;
//     showSlides();
//     resetAutoSlide(); // Reset the auto slide timer on manual change
// }

// function currentSlide(n) {
//     slideIndex = n;
//     showSlides();
//     resetAutoSlide(); // Reset the auto slide timer on manual change
// }

// function showSlides() {
//     const slides = document.querySelectorAll('.slide');
//     const dots = document.querySelectorAll('.dot');
    
//     if (slideIndex >= slides.length) { slideIndex = 0; }
//     if (slideIndex < 0) { slideIndex = slides.length - 1; }
    
//     slides.forEach((slide, index) => {
//         slide.classList.remove('active');
//         if (index === slideIndex) {
//             slide.classList.add('active');
//             slide.style.opacity = 1; // Ensure the active slide is fully visible
//         } else {
//             slide.style.opacity = 0; // Fade out non-active slides
//         }
//     });

//     dots.forEach((dot, index) => {
//         dot.classList.remove('active');
//         if (index === slideIndex) {
//             dot.classList.add('active');
//         }
//     });
// }

// function startAutoSlide() {
//     slideInterval = setInterval(() => {
//         changeSlide(1); // Automatically change to the next slide
//     }, 5000); // Change slide every 5 seconds
// }

// function resetAutoSlide() {
//     clearInterval(slideInterval); // Clear the existing interval
//     startAutoSlide(); // Restart the auto slide
// }

// and ends here




// let slideIndex = 0;
// let slideInterval;

// showSlides();
// startAutoSlide();

// // Get the slide container (adjust selector if needed)
// const slideContainer = document.querySelector('.slideshow-container'); // Add this

// // Pause on hover
// slideContainer.addEventListener('mouseenter', () => {
//     clearInterval(slideInterval);
// });

// // Resume when not hovering
// slideContainer.addEventListener('mouseleave', () => {
//     startAutoSlide();
// });

// function changeSlide(n) {
//     slideIndex += n;
//     showSlides();
//     resetAutoSlide(); // Reset the auto slide timer on manual change
// }

// function currentSlide(n) {
//     slideIndex = n;
//     showSlides();
//     resetAutoSlide(); // Reset the auto slide timer on manual change
// }

// function showSlides() {
//     const slides = document.querySelectorAll('.slide');
//     const dots = document.querySelectorAll('.dot');
    
//     if (slideIndex >= slides.length) { slideIndex = 0; }
//     if (slideIndex < 0) { slideIndex = slides.length - 1; }
    
//     slides.forEach((slide, index) => {
//         slide.classList.remove('active');
//         if (index === slideIndex) {
//             slide.classList.add('active');
//             slide.style.opacity = 1;
//         } else {
//             slide.style.opacity = 0;
//         }
//     });

//     dots.forEach((dot, index) => {
//         dot.classList.remove('active');
//         if (index === slideIndex) {
//             dot.classList.add('active');
//         }
//     });
// }

// function startAutoSlide() {
//     slideInterval = setInterval(() => {
//         changeSlide(1);
//     }, 5000);
// }

// function resetAutoSlide() {
//     clearInterval(slideInterval);
//     startAutoSlide();
// }
// const heroSlides = document.querySelector('.hero-slides');

// heroSlides.addEventListener('mouseenter', () => {
//     clearInterval(slideInterval); // 👉 Pause auto-slide when mouse is over the slider
// });

// heroSlides.addEventListener('mouseleave', () => {
//     startAutoSlide(); // 👉 Resume auto-slide when mouse leaves the slider
// });



// // /// // /// /// /  ///// uncommit this 
document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    let slideInterval;

    const heroSlides = document.querySelector('.hero-slides');

    showSlides();
    startAutoSlide();

    function changeSlide(n) {
        slideIndex += n;
        showSlides();
        resetAutoSlide();
    }

    function currentSlide(n) {
        slideIndex = n;
        showSlides();
        resetAutoSlide();
    }

    function showSlides() {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        if (slideIndex >= slides.length) { slideIndex = 0; }
        if (slideIndex < 0) { slideIndex = slides.length - 1; }

        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            slide.style.opacity = 0;
            if (index === slideIndex) {
                slide.classList.add('active');
                slide.style.opacity = 1;
            }
        });

        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === slideIndex) {
                dot.classList.add('active');
            }
        });
    }

    function startAutoSlide() {
        slideInterval = setInterval(() => {
            changeSlide(1);
        }, 5000);
    }

    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    // ✅ Pause on hover
    if (heroSlides) {
        heroSlides.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        heroSlides.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    }

    // Expose functions for HTML buttons
    window.changeSlide = changeSlide;
    window.currentSlide = currentSlide;
});
/// /// // /// //  leter////////////


