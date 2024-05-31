window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".indexbar");
    const scrollPosition = window.scrollY;
    const offset = 70; // Adjust this value to match your desired offset

    if (scrollPosition >= offset) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});
