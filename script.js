const hero = document.querySelector(".hero");
const navbar = document.querySelector(".navbar");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navbar.classList.add("show-logo");
            } else {
                navbar.classList.remove("show-logo");
            }
        });
    },
    {
        threshold: 0.4
    }
);

observer.observe(hero);