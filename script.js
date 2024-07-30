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
let count = 0;

function formatCount(count) {
    if (count >= 1e6) {
        return '1M';
    } else if (count >= 1e3) {
        let kPart = Math.floor(count / 1000);
        let rest = count % 1000;
        return `${kPart}k ${rest.toString().padStart(3, '0')}`;
    } else {
        return count.toString().padStart(3, '0');
    }
}

function updateCounter() {
    count += 2;
    document.getElementById('counter').innerText = formatCount(count);
}


setInterval(updateCounter, 120000);


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('counter').innerText = formatCount(count);
});