document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("shadow-lg");
        navbar.classList.add("bg-dark");
    } else {
        navbar.classList.remove("shadow-lg");
        navbar.classList.remove("bg-dark");
    }
})

var replace = new ReplaceMe(document.querySelector('.replace-me'));