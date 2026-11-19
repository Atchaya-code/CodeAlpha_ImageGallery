
const filterButtons = document.querySelectorAll(".filter-buttons button");
const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.querySelector(".close");

// Image filtering
filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        galleryItems.forEach(function(item) {
            if (filter === "all" || item.dataset.category === filter) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }
        });
    });
});

// Open image in lightbox
galleryItems.forEach(function(item) {
    item.addEventListener("click", function() {
        const image = item.querySelector("img");

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.style.display = "flex";
    });
});

// Close lightbox
closeButton.addEventListener("click", function() {
    lightbox.style.display = "none";
});

// Close when clicking outside the image
lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Close using Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        lightbox.style.display = "none";
    }
});
