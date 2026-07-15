// NAVBAR SCRIPT STARTS

window.toggleMegaMenu = function () {
  const companyMenu = document.getElementById("desktop-mega-menu");
  const servicesMenu = document.getElementById("desktop-services-menu");
  const companyIcon = document.getElementById("mega-menu-icon");
  const servicesIcon = document.getElementById("services-menu-icon");

  if (!companyMenu) return;

  const isHidden = companyMenu.classList.contains("hidden");

  if (isHidden) {
    companyMenu.classList.remove("hidden");
    companyMenu.classList.add("flex");

    if (servicesMenu) {
      servicesMenu.classList.add("hidden");
      servicesMenu.classList.remove("flex");
    }
  } else {
    companyMenu.classList.add("hidden");
    companyMenu.classList.remove("flex");
  }

  if (companyIcon) companyIcon.classList.toggle("rotate-180", isHidden);
  if (servicesIcon) servicesIcon.classList.remove("rotate-180");
};

window.toggleServicesMenu = function () {
  const companyMenu = document.getElementById("desktop-mega-menu");
  const servicesMenu = document.getElementById("desktop-services-menu");
  const companyIcon = document.getElementById("mega-menu-icon");
  const servicesIcon = document.getElementById("services-menu-icon");

  if (!servicesMenu) return;

  const isHidden = servicesMenu.classList.contains("hidden");

  if (isHidden) {
    servicesMenu.classList.remove("hidden");
    servicesMenu.classList.add("flex");

    if (companyMenu) {
      companyMenu.classList.add("hidden");
      companyMenu.classList.remove("flex");
    }

    if (typeof window.showServicesContent === "function") {
      window.showServicesContent("well construction");
    }
  } else {
    servicesMenu.classList.add("hidden");
    servicesMenu.classList.remove("flex");
  }

  if (servicesIcon) servicesIcon.classList.toggle("rotate-180", isHidden);
  if (companyIcon) companyIcon.classList.remove("rotate-180");
};

window.switchMegaTab = function (tabId) {
  document.querySelectorAll(".mega-content").forEach((content) => {
    content.classList.add("hidden");
    content.classList.remove("flex");
  });

  const targetContent = document.getElementById("content-" + tabId);

  if (targetContent) {
    targetContent.classList.remove("hidden");
    targetContent.classList.add("flex");
  }

  document.querySelectorAll(".mega-tab-btn").forEach((button) => {
    button.classList.remove("text-[#4CAF50]", "font-semibold", "border-[#4CAF50]");
    button.classList.add("border-transparent");
  });

  const activeTab = document.getElementById("tab-" + tabId);

  if (activeTab) {
    activeTab.classList.add("text-[#4CAF50]", "font-semibold", "border-[#4CAF50]");
    activeTab.classList.remove("border-transparent");
  }
};

window.showServicesContent = function (serviceName) {
  document.querySelectorAll(".services-content").forEach((content) => {
    content.classList.add("hidden");
    content.classList.remove("flex");
  });

  document.querySelectorAll(".services-tab-btn").forEach((button) => {
    button.classList.remove(
      "text-[#4CAF50]",
      "font-semibold",
      "border-[#4CAF50]",
      "bg-white/5"
    );
    button.classList.add("border-transparent");
  });

  let contentId = "";
  let tabId = "";

  if (serviceName === "well construction") {
    contentId = "services-content-wcd";
    tabId = "services-tab-wcd";
  }

  if (serviceName === "process management") {
    contentId = "services-content-pm";
    tabId = "services-tab-pm";
  }

  if (serviceName === "IPM") {
    contentId = "services-content-ipm";
    tabId = "services-tab-ipm";
  }

  if (serviceName === "operations maintenance") {
    contentId = "services-content-om";
    tabId = "services-tab-om";
  }

  const targetContent = document.getElementById(contentId);
  const activeTab = document.getElementById(tabId);

  if (targetContent) {
    targetContent.classList.remove("hidden");
    targetContent.classList.add("flex");
  }

  if (activeTab) {
    activeTab.classList.add(
      "text-[#4CAF50]",
      "font-semibold",
      "border-[#4CAF50]",
      "bg-white/5"
    );
    activeTab.classList.remove("border-transparent");
  }

  if (serviceName === "process management") {
    window.showProcessSubContent("ei");
  }
};

window.showProcessSubContent = function (subName) {
  document.querySelectorAll(".process-subcontent").forEach((content) => {
    content.classList.add("hidden");
    content.classList.remove("flex");
  });

  document.querySelectorAll(".process-subtab-btn").forEach((button) => {
    button.classList.remove("text-[#4CAF50]", "font-semibold");
    button.classList.add("text-gray-600");
  });

  let contentId = "";
  let tabId = "";

  if (subName === "ei") {
    contentId = "process-subcontent-ei";
    tabId = "process-subtab-ei";
  }

  if (subName === "pac") {
    contentId = "process-subcontent-pac";
    tabId = "process-subtab-pac";
  }

  if (subName === "modular") {
  contentId = "process-subcontent-modular";
  tabId = "process-subtab-modular";
}

if (subName === "measurement") {
  contentId = "process-subcontent-measurement";
  tabId = "process-subtab-measurement";
}

if (subName === "valves") {
  contentId = "process-subcontent-valves";
  tabId = "process-subtab-valves";
}

if (subName === "rotating") {
  contentId = "process-subcontent-rotating";
  tabId = "process-subtab-rotating";
}

if (subName === "fire") {
  contentId = "process-subcontent-fire";
  tabId = "process-subtab-fire";
}

if (subName === "operations") {
  contentId = "process-subcontent-operations";
  tabId = "process-subtab-operations";
}

if (subName === "design") {
  contentId = "process-subcontent-design";
  tabId = "process-subtab-design";
}

  const targetContent = document.getElementById(contentId);
  const activeTab = document.getElementById(tabId);

  if (targetContent) {
    targetContent.classList.remove("hidden");
    targetContent.classList.add("flex");
  }

  if (activeTab) {
    activeTab.classList.remove("text-gray-600");
    activeTab.classList.add("text-[#4CAF50]", "font-semibold");
  }
};

window.changeServiceImage = function (imageSrc, title) {
  const previewImage = document.getElementById("service-preview-image");

  if (previewImage) {
    previewImage.src = imageSrc;
    previewImage.alt = title || "";
  }
};

window.changeIPMImage = function (imageSrc, title) {
  const previewImage = document.getElementById("ipm-preview-image");

  if (previewImage) {
    previewImage.src = imageSrc;
    previewImage.alt = title || "";
    previewImage.classList.remove("hidden");
  }
};

window.changeOperationsImage = function (imageSrc, title) {
  const previewImage = document.getElementById("operations-preview-image");

  if (previewImage) {
    previewImage.src = imageSrc;
    previewImage.alt = title || "";
  }
};

// SEARCH
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

  if (topInput) topInput.value = term;
  if (dropdownInput) dropdownInput.value = term;

  window.submitTopSearch();
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

  window.location.href = "./search.html?q=" + encodeURIComponent(searchValue);
};

// MOBILE MENU
window.toggleSubmenu = function (menuId, button) {
  const menu = document.getElementById(menuId);
  if (!menu) return;

  menu.classList.toggle("hidden");

  const icon = button ? button.querySelector(".material-symbols-outlined") : null;
  if (icon) icon.classList.toggle("rotate-180");
};

// Event delegation works even when navbar.html is loaded dynamically.
document.addEventListener("click", function (event) {
  const mobileButton = event.target.closest("#mobile-menu-button");

  if (mobileButton) {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu) mobileMenu.classList.toggle("hidden");
  }

  const wrapper = document.getElementById("top-search-wrapper");
  const topInput = document.getElementById("top-search-input");
  const dropdown = document.getElementById("top-search-dropdown");

  if (wrapper && topInput && dropdown && !wrapper.contains(event.target)) {
    dropdown.classList.add("hidden");
    topInput.classList.add("hidden");
  }
});

// NAVBAR SCRIPT ENDS