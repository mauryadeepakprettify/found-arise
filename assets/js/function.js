// ---- Modal ----
document.querySelectorAll("[data-modal]").forEach((btn) => {
  btn.addEventListener("click", () => {
    openModel(`.${btn.dataset.modal}`);

    const modalId = btn.dataset.modal;

    if (modalId === "video-modal") {
      const modalVideo = btn.dataset.video;

      const videoEl = document.getElementById("iframe1");
      videoEl.src = modalVideo;
    }
  });
});

// ---- Close Modal ----
document.querySelectorAll(".overlay, .close").forEach((el) => {
  el.addEventListener("click", closeModel);

  const isVideoModal = el.closest(".video-modal");
  if (isVideoModal) {
    document.getElementById("iframe1").src = "";
  }
});

// ---- Accordion ----
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const parent = header.closest(".accordion");
    document.querySelectorAll(".accordion").forEach((acc) => {
      if (acc !== parent) {
        acc.classList.remove("open");
        const t = acc.querySelector(".toggle");
        if (t) t.innerHTML = '<img src="assets/icons/plus.svg" alt="">';
      }
    });
    parent.classList.toggle("open");
    const toggle = header.querySelector(".toggle");
    if (toggle)
      toggle.innerHTML = parent.classList.contains("open")
        ? '<img src="assets/icons/minus.svg" alt="">'
        : '<img src="assets/icons/plus.svg" alt="">';
  });
});