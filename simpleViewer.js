const openModalButtons =document.querySelectorAll('[data-modal-target]');
const closeModalButtons =document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('viewerOverlay');

const images = document.querySelectorAll(".galleryImage");

let imgSrc

openModalButtons.forEach(img => {
    img.addEventListener('click', (e) => {
        const modal = document.querySelector(img.dataset.modalTarget);
        let imgSrc = e.target.src;
        openModal(modal, imgSrc);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.viewer.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.viewer');
        closeModal(modal);
    })
})


function openModal(modal, img) {
    if (modal == null)
    {
        console.error("SimpleViewer::ERROR::openModal::You've tried opening an empty modal, are you sure it exists?");
        return
    }

    var test = document.getElementById('viewerImage');

    test.src = img;

    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null)
    {
        console.error("SimpleViewer::ERROR::closeModal::You've tried closing an empty modal, are you sure it exists?");
        return
    }

    modal.classList.remove('active');
    overlay.classList.remove('active');
}