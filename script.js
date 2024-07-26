document.addEventListener("DOMContentLoaded", function() {
    const welcomeAnimation = document.getElementById("welcome-animation");
    const body = document.body;


    welcomeAnimation.classList.remove("hidden");
    body.classList.add("hidden");


    setTimeout(() => {
        welcomeAnimation.classList.add("hidden");
        body.classList.remove("hidden");

        window.scrollTo(0, 0);
    }, 1000);
});