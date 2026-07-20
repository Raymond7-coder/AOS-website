const navbar = document.querySelector('nav');
const navLinks = document.getElementById('navlink');
const mobileMenuButton = document.getElementById('mobile-menu-button');

if (navbar) {
    navbar.classList.add('bg-white', 'text-black', 'shadow-md');
    navbar.classList.remove('bg-transparent', 'text-white');
}

if (navLinks) {
    navLinks.classList.add('text-black');
    navLinks.classList.remove('text-white');
}

if (mobileMenuButton) {
    mobileMenuButton.classList.add('text-black');
    mobileMenuButton.classList.remove('text-white');
}

// Toggle mobile menu
// NAVBAR SCRIPT BEGINS
window.toggleMegaMenu = function () {
    const companyMenu = document.getElementById('desktop-mega-menu');
    const servicesMenu = document.getElementById('desktop-services-menu');

    if (!companyMenu) {
        console.error("Company menu not found. Check if the company dropdown has id='desktop-mega-menu'");
        return;
    }

    const isHidden = companyMenu.classList.contains('hidden');

    if (isHidden) {
        companyMenu.classList.remove('hidden');
        companyMenu.classList.add('flex');

        if (servicesMenu) {
            servicesMenu.classList.add('hidden');
            servicesMenu.classList.remove('flex');
        }
    } else {
        companyMenu.classList.add('hidden');
        companyMenu.classList.remove('flex');
    }

    const companyIcon = document.getElementById('mega-menu-icon');
    const servicesIcon = document.getElementById('services-menu-icon');

    if (companyIcon) {
        companyIcon.classList.toggle('rotate-180', isHidden);
    }

    if (servicesIcon) {
        servicesIcon.classList.remove('rotate-180');
    }
};

window.toggleServicesMenu = function () {
    const companyMenu = document.getElementById('desktop-mega-menu');
    const servicesMenu = document.getElementById('desktop-services-menu');

    if (!servicesMenu) return;

    const isHidden = servicesMenu.classList.contains('hidden');

    if (isHidden) {
        servicesMenu.classList.remove('hidden');
        servicesMenu.classList.add('flex');

        if (companyMenu) {
            companyMenu.classList.add('hidden');
            companyMenu.classList.remove('flex');
        }

        // Always reset to Well Construction when Services menu opens
        showServicesContent('well construction');

    } else {
        servicesMenu.classList.add('hidden');
        servicesMenu.classList.remove('flex');
    }
};

window.switchMegaTab = function (tabId) {
    document.querySelectorAll('.mega-content').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('flex');
    });

    const targetContent = document.getElementById('content-' + tabId);

    if (targetContent) {
        targetContent.classList.remove('hidden');
        targetContent.classList.add('flex');
    }

    document.querySelectorAll('.mega-tab-btn').forEach(btn => {
        btn.classList.remove('text-[#4CAF50]', 'font-semibold', 'border-[#4CAF50]');
        btn.classList.add('border-transparent');
    });

    const activeTab = document.getElementById('tab-' + tabId);

    if (activeTab) {
        activeTab.classList.add('text-[#4CAF50]', 'font-semibold', 'border-[#4CAF50]');
        activeTab.classList.remove('border-transparent');
    }
};

window.showServicesContent = function (serviceName) {
    document.querySelectorAll('.services-content').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('flex');
    });

    document.querySelectorAll('.services-tab-btn').forEach(btn => {
        btn.classList.remove('text-[#4CAF50]', 'font-semibold', 'border-[#4CAF50]', 'bg-white/5');
        btn.classList.add('border-transparent');
    });

    let contentId = '';
    let tabId = '';

    if (serviceName === 'well construction') {
        contentId = 'services-content-wcd';
        tabId = 'services-tab-wcd';
    }

    if (serviceName === 'process management') {
        contentId = 'services-content-pm';
        tabId = 'services-tab-pm';
    }

    if (serviceName === 'operations maintenance') {
        contentId = 'services-content-om';
        tabId = 'services-tab-om';
    }

    const targetContent = document.getElementById(contentId);
    const activeTab = document.getElementById(tabId);

    if (targetContent) {
        targetContent.classList.remove('hidden');
        targetContent.classList.add('flex');
    }

    if (activeTab) {
        activeTab.classList.add('text-[#4CAF50]', 'font-semibold', 'border-[#4CAF50]', 'bg-white/5');
        activeTab.classList.remove('border-transparent');
    }

    // This makes Electrical & Instrumentation show automatically
    // when Process Management is selected
    if (serviceName === 'process management') {
        showProcessSubContent('ei');
    }
};

window.showProcessSubContent = function (subName) {
    document.querySelectorAll('.process-subcontent').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('flex');
    });

    document.querySelectorAll('.process-subtab-btn').forEach(btn => {
        btn.classList.remove('text-[#4CAF50]', 'font-semibold');
        btn.classList.add('text-gray-600');
    });

    let contentId = '';
    let tabId = '';

    if (subName === 'ei') {
        contentId = 'process-subcontent-ei';
        tabId = 'process-subtab-ei';
    }

    if (subName === 'pac') {
        contentId = 'process-subcontent-pac';
        tabId = 'process-subtab-pac';
    }

    const targetContent = document.getElementById(contentId);
    const activeTab = document.getElementById(tabId);

    if (targetContent) {
        targetContent.classList.remove('hidden');
        targetContent.classList.add('flex');
    }

    if (activeTab) {
        activeTab.classList.remove('text-gray-600');
        activeTab.classList.add('text-[#4CAF50]', 'font-semibold');
    }
};

window.changeServiceImage = function (imageSrc, title) {
    const previewImage = document.getElementById('service-preview-image');
    const previewTitle = document.getElementById('service-preview-title');

    if (previewImage) {
        previewImage.src = imageSrc;
        previewImage.alt = title;
    }

    if (previewTitle) {
        previewTitle.textContent = title;
    }
};
window.changeOperationsImage = function (imageSrc, title) {
    const previewImage = document.getElementById('operations-preview-image');

    if (previewImage) {
        previewImage.src = imageSrc;
        previewImage.alt = title;
    }
};
window.toggleTopSearch = function () {
    const topInput = document.getElementById("top-search-input");
    const dropdown = document.getElementById("top-search-dropdown");
    const dropdownInput = document.getElementById("dropdown-search-input");

    if (!topInput || !dropdown || !dropdownInput) return;

    topInput.classList.remove("hidden");
    dropdown.classList.toggle("hidden");

    if (!dropdown.classList.contains("hidden")) {
        setTimeout(() => dropdownInput.focus(), 100);
    }
};

window.openTopSearch = function () {
    const topInput = document.getElementById("top-search-input");
    const dropdown = document.getElementById("top-search-dropdown");
    const dropdownInput = document.getElementById("dropdown-search-input");

    if (!topInput || !dropdown || !dropdownInput) return;

    topInput.classList.remove("hidden");
    dropdown.classList.remove("hidden");

    setTimeout(() => dropdownInput.focus(), 100);
};

window.handleTopSearchTyping = function () {
    const topInput = document.getElementById("top-search-input");
    const dropdownInput = document.getElementById("dropdown-search-input");

    if (!topInput || !dropdownInput) return;

    dropdownInput.value = topInput.value;
};

window.selectPopularSearch = function (term) {
    const topInput = document.getElementById("top-search-input");
    const dropdownInput = document.getElementById("dropdown-search-input");

    if (!topInput || !dropdownInput) return;

    topInput.value = term;
    dropdownInput.value = term;

    submitTopSearch();
};

window.submitTopSearch = function () {
    const dropdownInput = document.getElementById("dropdown-search-input");
    const topInput = document.getElementById("top-search-input");

    let searchValue = "";

    if (dropdownInput && dropdownInput.value.trim() !== "") {
        searchValue = dropdownInput.value.trim();
    } else if (topInput && topInput.value.trim() !== "") {
        searchValue = topInput.value.trim();
    }

    if (searchValue === "") return;

    window.location.href = `./search.html?q=${encodeURIComponent(searchValue)}`;
};
document.addEventListener("DOMContentLoaded", function () {
    const dropdownInput = document.getElementById("dropdown-search-input");
    const topInput = document.getElementById("top-search-input");

    if (dropdownInput) {
        dropdownInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                submitTopSearch();
            }
        });
    }

    if (topInput) {
        topInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                submitTopSearch();
            }
        });
    }
});

document.addEventListener("click", function (event) {
    const wrapper = document.getElementById("top-search-wrapper");
    const topInput = document.getElementById("top-search-input");
    const dropdown = document.getElementById("top-search-dropdown");

    if (!wrapper || !topInput || !dropdown) return;

    if (!wrapper.contains(event.target)) {
        dropdown.classList.add("hidden");
        topInput.classList.add("hidden");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// NAVBAR SCRIPT ENDS

function showAboutLinks() {
    document.getElementById('aboutLinks').classList.remove('hidden');
    document.getElementById('aboutLinks').classList.add('flex');
    document.getElementById('serviceLinks').classList.remove('flex');
    document.getElementById('serviceLinks').classList.add('hidden');
    document.getElementById('mediaLinks').classList.remove('flex');
    document.getElementById('mediaLinks').classList.add('hidden');
}
function hideAboutLinks() {
    document.getElementById('aboutLinks').classList.remove('flex');
    document.getElementById('aboutLinks').classList.add('hidden');
}


function showServiceLinks() {
    document.getElementById('aboutLinks').classList.remove('flex');
    document.getElementById('aboutLinks').classList.add('hidden');
    document.getElementById('serviceLinks').classList.remove('hidden');
    document.getElementById('serviceLinks').classList.add('flex');
    document.getElementById('mediaLinks').classList.remove('flex');
    document.getElementById('mediaLinks').classList.add('hidden');
}
function hideServiceLinks() {
    document.getElementById('serviceLinks').classList.remove('flex');
    document.getElementById('serviceLinks').classList.add('hidden');
}

function showMediaLinks() {
    document.getElementById('aboutLinks').classList.remove('flex');
    document.getElementById('aboutLinks').classList.add('hidden');
    document.getElementById('serviceLinks').classList.remove('flex');
    document.getElementById('serviceLinks').classList.add('hidden');
    document.getElementById('mediaLinks').classList.add('flex');
    document.getElementById('mediaLinks').classList.remove('hidden');
}
function hideMediaLinks() {
    document.getElementById('mediaLinks').classList.remove('flex');
    document.getElementById('mediaLinks').classList.add('hidden');
}


const sliderContent = [
    {
        image: './images/Hero Image.png',
        bottomText: 'We have <span class="text-[#016125]">over 80 years</span> of experience in servicing oil pipes',
        heading: "POWERING AFRICA'S ENERGY FUTURE",
        subtext: "Driven by precision. Powered by expertise. "
    },
    {
        image: './images/hero2.jpg',
        bottomText: 'Our team consists of <span class="text-[#016125]">industry-leading experts</span> in pipeline maintenance',
        heading: "24/7 ACCESS TO OEM CERTIFIED PERSONNEL",
        subtext: "With the highest guarantees for excellent work in-country"
    },
    {
        image: './images/hero3.jpg',
        bottomText: 'We\'ve serviced <span class="text-[#016125]">over 5,000 miles</span> of pipelines worldwide',
        heading: "YOUR TRUSTED ENERGY INFRASTRUCTURE PARTNER",
        subtext: "Delivering reliable solutions with global standards and local expertise"
    }
];

let currentIndex = 0;
// const heroImages = document.querySelectorAll('.hero > img');
const sliderTextElement = document.getElementById('slider-text');
// const heading = document.querySelector(".hero h1");
// const subText = document.querySelector(".hero p");
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dots = document.querySelectorAll('#indicator-dots > div');

let autoSlideInterval;

function updateSlider() {
//     // Show current image
//     heroImages.forEach((img, index) => {
//         img.classList.toggle('hidden', index !== currentIndex);
//     });

//     // Update bottom text
    sliderTextElement.innerHTML = sliderContent[currentIndex].bottomText;

//     // Update hero main text
//     heading.textContent = sliderContent[currentIndex].heading;
//     subText.textContent = sliderContent[currentIndex].subtext;

//     // Update dots
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.innerHTML = '<div class="p-1 bg-black rounded-full"></div>';
            dot.className = 'p-1 flex items-center justify-center border-1 border-[#016125] rounded-full';
        } else {
            dot.innerHTML = '';
            dot.className = 'p-1 bg-gray-300 rounded-full';
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderContent.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + sliderContent.length) % sliderContent.length;
    updateSlider();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// // Initialize slider
updateSlider();
startAutoSlide();

// Add click events
nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

// // Pause on hover
sliderTextElement.parentElement.addEventListener('mouseenter', stopAutoSlide);
sliderTextElement.parentElement.addEventListener('mouseleave', startAutoSlide);

// Initialize

function showManagement() {
    document.getElementById('management').classList.remove('hidden');
    document.getElementById('management').classList.add('flex');
    document.getElementById('board').classList.add('hidden');      
    document.getElementById('managementTab').classList.add('text-white', 'bg-primary')
    document.getElementById('boardTab').classList.add('text-black', 'bg-gray-200')
    document.getElementById('boardTab').classList.remove('text-white', 'bg-primary')
}
function showBoard() {
    document.getElementById('board').classList.remove('hidden');
    document.getElementById('board').classList.add('flex');
    document.getElementById('management').classList.add('hidden');       
    document.getElementById('boardTab').classList.add('text-white', 'bg-primary')
    document.getElementById('managementTab').classList.add('text-black', 'bg-gray-200')
    document.getElementById('managementTab').classList.remove('text-white', 'bg-primary')
}



function showBlogDetails(name){
    window.location.href = `blog/${name}.html`;
}
function showNewsDetails(name){
    window.location.href = `news/${name}.html`;
}

//   document.addEventListener("DOMContentLoaded", function () {
//     const heroImages = document.querySelectorAll(".hero > img");
//     const heading = document.querySelector(".hero h1");
//     const subText = document.querySelector(".hero p");
//     const indicatorDots = document.querySelectorAll("#indicator-dots > div");
//     const nextBtn = document.getElementById("next-btn");
//     const prevBtn = document.getElementById("prev-btn");

//     let currentIndex = 0;

//     const heroHeadings = [
//         "POWERING AFRICA'S ENERGY FUTURE",
//         "24/7 ACCESS TO OEM CERTIFIED PERSONNEL",
//         "YOUR TRUSTED ENERGY INFRASTRUCTURE PARTNER"
//     ];

//     const heroSubTexts = [
//         "Driven by precision. Powered by expertise. We are your trusted indigenous oilfield services partner",
//         "With the highest guarantees for excellent work in-country",
//         "Delivering reliable solutions with global standards and local expertise"
//     ];

//     function updateHero() {
//         // Show the current image and hide others
//         heroImages.forEach((img, index) => {
//             img.classList.toggle("hidden", index !== currentIndex);
//         });

//         // Update heading and subtext
//         heading.textContent = heroHeadings[currentIndex];
//         subText.textContent = heroSubTexts[currentIndex];

//         // Update indicator dots
//         indicatorDots.forEach((dot, i) => {
//             const innerDot = dot.querySelector("div");
//             if (innerDot) {
//                 innerDot.classList.toggle("bg-black", i === currentIndex);
//                 innerDot.classList.toggle("bg-gray-300", i !== currentIndex);
//             }
//         });
//     }

//     function nextSlide() {
//         currentIndex = (currentIndex + 1) % heroImages.length;
//         updateHero();
//     }

//     function prevSlide() {
//         currentIndex = (currentIndex - 1 + heroImages.length) % heroImages.length;
//         updateHero();
//     }

//     nextBtn.addEventListener("click", nextSlide);
//     prevBtn.addEventListener("click", prevSlide);

//     updateHero(); // Initialize
// });


  document.addEventListener("DOMContentLoaded", () => {
    // === Typewriter for <h2> ===
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains("typing")) {
            typeWriter(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    const targetH2 = document.querySelector("section h2");
    if (targetH2) {
      observer.observe(targetH2);
    }

    function typeWriter(element) {
      const text = element.dataset.original || element.textContent;
      element.dataset.original = text; // Save original text
      element.textContent = "";
      element.classList.add("typing"); // prevent duplicate triggers
      element.style.whiteSpace = "pre-wrap";

      let i = 0;
      const speed = 40;

      function type() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, speed);
        } else {
          setTimeout(() => {
            element.classList.remove("typing"); // allow re-triggering
          }, 500);
        }
      }

      type();
    }

    // === Slide-in Animation for <p> ===
    const paragraph = document.querySelector("section div p");
    if (paragraph) {
      paragraph.classList.add("animate-on-scroll");

      const slideObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            } else {
              entry.target.classList.remove("show"); // re-trigger on scroll
            }
          });
        },
        { threshold: 0.5 }
      );

      slideObserver.observe(paragraph);
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-target");
  const slideInElements = document.querySelectorAll(".slide-in-target");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeInElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  slideInElements.forEach((el, index) => {
    el.classList.add("slide-in");
    el.style.animationDelay = `${index * 0.3}s`;
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".fade-in-left", {
    scrollTrigger: {
      trigger: ".fade-in-left",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    x: -100,
    opacity: 0,
    duration: 2.5,
    ease: "power2.out"
  });

    gsap.utils.toArray(".fade-in-up").forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    y: 60,
    opacity: 0,
    duration: 3.5,
    ease: "power3.out",
    delay: i * 1.2 // stagger effect
  });
});

});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".slide-left-item").forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      },
      x: -100,
      opacity: 0,
      duration: 1.5,
      delay: i * 0.3, // Stagger effect
      ease: "power2.out"
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".rise-up-target", {
    scrollTrigger: {
      trigger: ".rise-up-target",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 2.5,
    ease: "power2.out"
  });
});
const navbar = document.querySelector('nav');
const navLinks = document.getElementById('navlink');
const mobileMenuButton = document.getElementById('mobile-menu-button');

if (navbar) {
    navbar.classList.add('bg-white', 'text-black', 'shadow-md');
    navbar.classList.remove('bg-transparent', 'text-white');
}

if (navLinks) {
    navLinks.classList.add('text-black');
    navLinks.classList.remove('text-white');
}

if (mobileMenuButton) {
    mobileMenuButton.classList.add('text-black');
    mobileMenuButton.classList.remove('text-white');
}

// Toggle mobile menu
// NAVBAR SCRIPT BEGINS
window.toggleMegaMenu = function () {
    const companyMenu = document.getElementById('desktop-mega-menu');
    const servicesMenu = document.getElementById('desktop-services-menu');

    if (!companyMenu) {
        console.error("Company menu not found. Check if the company dropdown has id='desktop-mega-menu'");
        return;
    }

    const isHidden = companyMenu.classList.contains('hidden');

    if (isHidden) {
        companyMenu.classList.remove('hidden');
        companyMenu.classList.add('flex');

        if (servicesMenu) {
            servicesMenu.classList.add('hidden');
            servicesMenu.classList.remove('flex');
        }
    } else {
        companyMenu.classList.add('hidden');
        companyMenu.classList.remove('flex');
    }

    const companyIcon = document.getElementById('mega-menu-icon');
    const servicesIcon = document.getElementById('services-menu-icon');

    if (companyIcon) {
        companyIcon.classList.toggle('rotate-180', isHidden);
    }

    if (servicesIcon) {
        servicesIcon.classList.remove('rotate-180');
    }
};

window.toggleServicesMenu = function () {
    const companyMenu = document.getElementById('desktop-mega-menu');
    const servicesMenu = document.getElementById('desktop-services-menu');

    if (!servicesMenu) return;

    const isHidden = servicesMenu.classList.contains('hidden');

    if (isHidden) {
        servicesMenu.classList.remove('hidden');
        servicesMenu.classList.add('flex');

        if (companyMenu) {
            companyMenu.classList.add('hidden');
            companyMenu.classList.remove('flex');
        }

        // Always reset to Well Construction when Services menu opens
        showServicesContent('well construction');

    } else {
        servicesMenu.classList.add('hidden');
        servicesMenu.classList.remove('flex');
    }
};

window.switchMegaTab = function (tabId) {
    document.querySelectorAll('.mega-content').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('flex');
    });

    const targetContent = document.getElementById('content-' + tabId);

    if (targetContent) {
        targetContent.classList.remove('hidden');
        targetContent.classList.add('flex');
    }

    document.querySelectorAll('.mega-tab-btn').forEach(btn => {
        btn.classList.remove('text-[#4CAF50]', 'font-semibold', 'border-[#4CAF50]');
        btn.classList.add('border-transparent');
    });

    const activeTab = document.getElementById('tab-' + tabId);

    if (activeTab) {
        activeTab.classList.add('text-[#4CAF50]', 'font-semibold', 'border-[#4CAF50]');
        activeTab.classList.remove('border-transparent');
    }
};

window.showServicesContent = function (serviceName) {
    document.querySelectorAll('.services-content').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('flex');
    });

    document.querySelectorAll('.services-tab-btn').forEach(btn => {
        btn.classList.remove('text-[#4CAF50]', 'font-semibold', 'border-[#4CAF50]', 'bg-white/5');
        btn.classList.add('border-transparent');
    });

    let contentId = '';
    let tabId = '';

    if (serviceName === 'well construction') {
        contentId = 'services-content-wcd';
        tabId = 'services-tab-wcd';
    }

    if (serviceName === 'process management') {
        contentId = 'services-content-pm';
        tabId = 'services-tab-pm';
    }

    if (serviceName === 'operations maintenance') {
        contentId = 'services-content-om';
        tabId = 'services-tab-om';
    }

    const targetContent = document.getElementById(contentId);
    const activeTab = document.getElementById(tabId);

    if (targetContent) {
        targetContent.classList.remove('hidden');
        targetContent.classList.add('flex');
    }

    if (activeTab) {
        activeTab.classList.add('text-[#4CAF50]', 'font-semibold', 'border-[#4CAF50]', 'bg-white/5');
        activeTab.classList.remove('border-transparent');
    }

    // This makes Electrical & Instrumentation show automatically
    // when Process Management is selected
    if (serviceName === 'process management') {
        showProcessSubContent('ei');
    }
};

window.showProcessSubContent = function (subName) {
    document.querySelectorAll('.process-subcontent').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('flex');
    });

    document.querySelectorAll('.process-subtab-btn').forEach(btn => {
        btn.classList.remove('text-[#4CAF50]', 'font-semibold');
        btn.classList.add('text-gray-600');
    });

    let contentId = '';
    let tabId = '';

    if (subName === 'ei') {
        contentId = 'process-subcontent-ei';
        tabId = 'process-subtab-ei';
    }

    if (subName === 'pac') {
        contentId = 'process-subcontent-pac';
        tabId = 'process-subtab-pac';
    }

    const targetContent = document.getElementById(contentId);
    const activeTab = document.getElementById(tabId);

    if (targetContent) {
        targetContent.classList.remove('hidden');
        targetContent.classList.add('flex');
    }

    if (activeTab) {
        activeTab.classList.remove('text-gray-600');
        activeTab.classList.add('text-[#4CAF50]', 'font-semibold');
    }
};

window.changeServiceImage = function (imageSrc, title) {
    const previewImage = document.getElementById('service-preview-image');
    const previewTitle = document.getElementById('service-preview-title');

    if (previewImage) {
        previewImage.src = imageSrc;
        previewImage.alt = title;
    }

    if (previewTitle) {
        previewTitle.textContent = title;
    }
};
window.changeOperationsImage = function (imageSrc, title) {
    const previewImage = document.getElementById('operations-preview-image');

    if (previewImage) {
        previewImage.src = imageSrc;
        previewImage.alt = title;
    }
};
window.toggleTopSearch = function () {
    const topInput = document.getElementById("top-search-input");
    const dropdown = document.getElementById("top-search-dropdown");
    const dropdownInput = document.getElementById("dropdown-search-input");

    if (!topInput || !dropdown || !dropdownInput) return;

    topInput.classList.remove("hidden");
    dropdown.classList.toggle("hidden");

    if (!dropdown.classList.contains("hidden")) {
        setTimeout(() => dropdownInput.focus(), 100);
    }
};

window.openTopSearch = function () {
    const topInput = document.getElementById("top-search-input");
    const dropdown = document.getElementById("top-search-dropdown");
    const dropdownInput = document.getElementById("dropdown-search-input");

    if (!topInput || !dropdown || !dropdownInput) return;

    topInput.classList.remove("hidden");
    dropdown.classList.remove("hidden");

    setTimeout(() => dropdownInput.focus(), 100);
};

window.handleTopSearchTyping = function () {
    const topInput = document.getElementById("top-search-input");
    const dropdownInput = document.getElementById("dropdown-search-input");

    if (!topInput || !dropdownInput) return;

    dropdownInput.value = topInput.value;
};

window.selectPopularSearch = function (term) {
    const topInput = document.getElementById("top-search-input");
    const dropdownInput = document.getElementById("dropdown-search-input");

    if (!topInput || !dropdownInput) return;

    topInput.value = term;
    dropdownInput.value = term;

    submitTopSearch();
};

window.submitTopSearch = function () {
    const dropdownInput = document.getElementById("dropdown-search-input");
    const topInput = document.getElementById("top-search-input");

    let searchValue = "";

    if (dropdownInput && dropdownInput.value.trim() !== "") {
        searchValue = dropdownInput.value.trim();
    } else if (topInput && topInput.value.trim() !== "") {
        searchValue = topInput.value.trim();
    }

    if (searchValue === "") return;

    window.location.href = `./search.html?q=${encodeURIComponent(searchValue)}`;
};
document.addEventListener("DOMContentLoaded", function () {
    const dropdownInput = document.getElementById("dropdown-search-input");
    const topInput = document.getElementById("top-search-input");

    if (dropdownInput) {
        dropdownInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                submitTopSearch();
            }
        });
    }

    if (topInput) {
        topInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                submitTopSearch();
            }
        });
    }
});

document.addEventListener("click", function (event) {
    const wrapper = document.getElementById("top-search-wrapper");
    const topInput = document.getElementById("top-search-input");
    const dropdown = document.getElementById("top-search-dropdown");

    if (!wrapper || !topInput || !dropdown) return;

    if (!wrapper.contains(event.target)) {
        dropdown.classList.add("hidden");
        topInput.classList.add("hidden");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// NAVBAR SCRIPT ENDS

function showAboutLinks() {
    document.getElementById('aboutLinks').classList.remove('hidden');
    document.getElementById('aboutLinks').classList.add('flex');
    document.getElementById('serviceLinks').classList.remove('flex');
    document.getElementById('serviceLinks').classList.add('hidden');
    document.getElementById('mediaLinks').classList.remove('flex');
    document.getElementById('mediaLinks').classList.add('hidden');
}
function hideAboutLinks() {
    document.getElementById('aboutLinks').classList.remove('flex');
    document.getElementById('aboutLinks').classList.add('hidden');
}


function showServiceLinks() {
    document.getElementById('aboutLinks').classList.remove('flex');
    document.getElementById('aboutLinks').classList.add('hidden');
    document.getElementById('serviceLinks').classList.remove('hidden');
    document.getElementById('serviceLinks').classList.add('flex');
    document.getElementById('mediaLinks').classList.remove('flex');
    document.getElementById('mediaLinks').classList.add('hidden');
}
function hideServiceLinks() {
    document.getElementById('serviceLinks').classList.remove('flex');
    document.getElementById('serviceLinks').classList.add('hidden');
}

function showMediaLinks() {
    document.getElementById('aboutLinks').classList.remove('flex');
    document.getElementById('aboutLinks').classList.add('hidden');
    document.getElementById('serviceLinks').classList.remove('flex');
    document.getElementById('serviceLinks').classList.add('hidden');
    document.getElementById('mediaLinks').classList.add('flex');
    document.getElementById('mediaLinks').classList.remove('hidden');
}
function hideMediaLinks() {
    document.getElementById('mediaLinks').classList.remove('flex');
    document.getElementById('mediaLinks').classList.add('hidden');
}


const sliderContent = [
    {
        image: './images/Hero Image.png',
        bottomText: 'We have <span class="text-[#016125]">over 80 years</span> of experience in servicing oil pipes',
        heading: "POWERING AFRICA'S ENERGY FUTURE",
        subtext: "Driven by precision. Powered by expertise. "
    },
    {
        image: './images/hero2.jpg',
        bottomText: 'Our team consists of <span class="text-[#016125]">industry-leading experts</span> in pipeline maintenance',
        heading: "24/7 ACCESS TO OEM CERTIFIED PERSONNEL",
        subtext: "With the highest guarantees for excellent work in-country"
    },
    {
        image: './images/hero3.jpg',
        bottomText: 'We\'ve serviced <span class="text-[#016125]">over 5,000 miles</span> of pipelines worldwide',
        heading: "YOUR TRUSTED ENERGY INFRASTRUCTURE PARTNER",
        subtext: "Delivering reliable solutions with global standards and local expertise"
    }
];

let currentIndex = 0;
// const heroImages = document.querySelectorAll('.hero > img');
const sliderTextElement = document.getElementById('slider-text');
// const heading = document.querySelector(".hero h1");
// const subText = document.querySelector(".hero p");
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dots = document.querySelectorAll('#indicator-dots > div');

let autoSlideInterval;

function updateSlider() {
//     // Show current image
//     heroImages.forEach((img, index) => {
//         img.classList.toggle('hidden', index !== currentIndex);
//     });

//     // Update bottom text
    sliderTextElement.innerHTML = sliderContent[currentIndex].bottomText;

//     // Update hero main text
//     heading.textContent = sliderContent[currentIndex].heading;
//     subText.textContent = sliderContent[currentIndex].subtext;

//     // Update dots
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.innerHTML = '<div class="p-1 bg-black rounded-full"></div>';
            dot.className = 'p-1 flex items-center justify-center border-1 border-[#016125] rounded-full';
        } else {
            dot.innerHTML = '';
            dot.className = 'p-1 bg-gray-300 rounded-full';
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderContent.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + sliderContent.length) % sliderContent.length;
    updateSlider();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// // Initialize slider
updateSlider();
startAutoSlide();

// Add click events
nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

// // Pause on hover
sliderTextElement.parentElement.addEventListener('mouseenter', stopAutoSlide);
sliderTextElement.parentElement.addEventListener('mouseleave', startAutoSlide);

// Initialize

function showManagement() {
    document.getElementById('management').classList.remove('hidden');
    document.getElementById('management').classList.add('flex');
    document.getElementById('board').classList.add('hidden');      
    document.getElementById('managementTab').classList.add('text-white', 'bg-primary')
    document.getElementById('boardTab').classList.add('text-black', 'bg-gray-200')
    document.getElementById('boardTab').classList.remove('text-white', 'bg-primary')
}
function showBoard() {
    document.getElementById('board').classList.remove('hidden');
    document.getElementById('board').classList.add('flex');
    document.getElementById('management').classList.add('hidden');       
    document.getElementById('boardTab').classList.add('text-white', 'bg-primary')
    document.getElementById('managementTab').classList.add('text-black', 'bg-gray-200')
    document.getElementById('managementTab').classList.remove('text-white', 'bg-primary')
}



function showBlogDetails(name){
    window.location.href = `blog/${name}.html`;
}
function showNewsDetails(name){
    window.location.href = `news/${name}.html`;
}

//   document.addEventListener("DOMContentLoaded", function () {
//     const heroImages = document.querySelectorAll(".hero > img");
//     const heading = document.querySelector(".hero h1");
//     const subText = document.querySelector(".hero p");
//     const indicatorDots = document.querySelectorAll("#indicator-dots > div");
//     const nextBtn = document.getElementById("next-btn");
//     const prevBtn = document.getElementById("prev-btn");

//     let currentIndex = 0;

//     const heroHeadings = [
//         "POWERING AFRICA'S ENERGY FUTURE",
//         "24/7 ACCESS TO OEM CERTIFIED PERSONNEL",
//         "YOUR TRUSTED ENERGY INFRASTRUCTURE PARTNER"
//     ];

//     const heroSubTexts = [
//         "Driven by precision. Powered by expertise. We are your trusted indigenous oilfield services partner",
//         "With the highest guarantees for excellent work in-country",
//         "Delivering reliable solutions with global standards and local expertise"
//     ];

//     function updateHero() {
//         // Show the current image and hide others
//         heroImages.forEach((img, index) => {
//             img.classList.toggle("hidden", index !== currentIndex);
//         });

//         // Update heading and subtext
//         heading.textContent = heroHeadings[currentIndex];
//         subText.textContent = heroSubTexts[currentIndex];

//         // Update indicator dots
//         indicatorDots.forEach((dot, i) => {
//             const innerDot = dot.querySelector("div");
//             if (innerDot) {
//                 innerDot.classList.toggle("bg-black", i === currentIndex);
//                 innerDot.classList.toggle("bg-gray-300", i !== currentIndex);
//             }
//         });
//     }

//     function nextSlide() {
//         currentIndex = (currentIndex + 1) % heroImages.length;
//         updateHero();
//     }

//     function prevSlide() {
//         currentIndex = (currentIndex - 1 + heroImages.length) % heroImages.length;
//         updateHero();
//     }

//     nextBtn.addEventListener("click", nextSlide);
//     prevBtn.addEventListener("click", prevSlide);

//     updateHero(); // Initialize
// });


  document.addEventListener("DOMContentLoaded", () => {
    // === Typewriter for <h2> ===
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains("typing")) {
            typeWriter(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    const targetH2 = document.querySelector("section h2");
    if (targetH2) {
      observer.observe(targetH2);
    }

    function typeWriter(element) {
      const text = element.dataset.original || element.textContent;
      element.dataset.original = text; // Save original text
      element.textContent = "";
      element.classList.add("typing"); // prevent duplicate triggers
      element.style.whiteSpace = "pre-wrap";

      let i = 0;
      const speed = 40;

      function type() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, speed);
        } else {
          setTimeout(() => {
            element.classList.remove("typing"); // allow re-triggering
          }, 500);
        }
      }

      type();
    }

    // === Slide-in Animation for <p> ===
    const paragraph = document.querySelector("section div p");
    if (paragraph) {
      paragraph.classList.add("animate-on-scroll");

      const slideObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            } else {
              entry.target.classList.remove("show"); // re-trigger on scroll
            }
          });
        },
        { threshold: 0.5 }
      );

      slideObserver.observe(paragraph);
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-target");
  const slideInElements = document.querySelectorAll(".slide-in-target");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeInElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  slideInElements.forEach((el, index) => {
    el.classList.add("slide-in");
    el.style.animationDelay = `${index * 0.3}s`;
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".fade-in-left", {
    scrollTrigger: {
      trigger: ".fade-in-left",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    x: -100,
    opacity: 0,
    duration: 2.5,
    ease: "power2.out"
  });

    gsap.utils.toArray(".fade-in-up").forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    y: 60,
    opacity: 0,
    duration: 3.5,
    ease: "power3.out",
    delay: i * 1.2 // stagger effect
  });
});

});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".slide-left-item").forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      },
      x: -100,
      opacity: 0,
      duration: 1.5,
      delay: i * 0.3, // Stagger effect
      ease: "power2.out"
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".rise-up-target", {
    scrollTrigger: {
      trigger: ".rise-up-target",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 2.5,
    ease: "power2.out"
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const marqueeTracks = document.querySelectorAll(
    ".logo-marquee-track"
  );

  marqueeTracks.forEach(function (track) {
    const originalGroup = track.querySelector(
      ".logo-marquee-group"
    );

    if (!originalGroup) {
      return;
    }

    /*
      Prevent another duplicate from being created if
      the script is loaded more than once.
    */
    if (track.querySelector('[data-logo-clone="true"]')) {
      return;
    }

    const clonedGroup = originalGroup.cloneNode(true);

    clonedGroup.setAttribute(
      "data-logo-clone",
      "true"
    );

    clonedGroup.setAttribute(
      "aria-hidden",
      "true"
    );

    /*
      The copied images are decorative because the same
      logos have already been announced in the first group.
    */
    clonedGroup.querySelectorAll("img").forEach(
      function (image) {
        image.alt = "";
      }
    );

    track.appendChild(clonedGroup);
  });
});
