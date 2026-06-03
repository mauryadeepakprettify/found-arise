

// ---- Modal ----
function openModel(selector) {
    document
        .querySelectorAll(".modal.is-open, .overlay.is-open")
        .forEach((el) => el.classList.remove("is-open"));

    const modal = document.querySelector(selector);
    const overlay = document.querySelector(".overlay");

    if (modal) modal.classList.add("is-open");
    if (overlay) overlay.classList.add("is-open");

    document.body.classList.add("no-scroll");
}

function closeModel() {
    document
        .querySelectorAll(".modal.is-open, .overlay.is-open")
        .forEach((el) => el.classList.remove("is-open"));

    document.body.classList.remove("no-scroll");
}

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
