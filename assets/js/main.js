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
        if (t) t.innerHTML = '<img src="assets/icon/plus.svg" alt="">';
      }
    });
    parent.classList.toggle("open");
    const toggle = header.querySelector(".toggle");
    if (toggle)
      toggle.innerHTML = parent.classList.contains("open")
        ? '<img src="assets/icon/minus.svg" alt="">'
        : '<img src="assets/icon/plus.svg" alt="">';
  });
});


//scroll body add class
window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        document.querySelector('header').classList.add("scrolled");
    } else {
        document.querySelector('header').classList.remove("scrolled");
    }
});

//FWM section
const txtCards = document.querySelectorAll('.txt-card')
txtCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        txtCards.forEach(txtCard => {
            txtCard.classList.remove('active')
        })
        card.classList.add('active')
    })
})
