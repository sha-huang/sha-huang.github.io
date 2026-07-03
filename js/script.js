// Background color gradient animation
function initBkgdAnimation() {
    // Cache the element selector once outside the animation loop
    const targetSection = document.getElementById('grad-color');
    if (!targetSection) return;

    let hue1 = 0;
    let hue2 = 100;

    function animateBackground() {
        hue1 = (hue1 + 0.3) % 360;
        hue2 = (hue2 + 0.5) % 360;

        const color1 = `hsl(${hue1}, 70%, 60%)`;
        const color2 = `hsl(${hue2}, 70%, 60%)`;
        const gradient = `linear-gradient(45deg, ${color1}, ${color2})`;

        // Apply the gradient exclusively to the targeted section
        targetSection.style.backgroundImage = gradient;

        requestAnimationFrame(animateBackground);
    }

    // Start the loop
    animateBackground();
}


// Header background color gradient fading effect
function initHeaderFading() {
    const header = document.querySelector("header");
    if (!header) return;

    window.addEventListener("scroll", () => {
        const maxScroll = 1000;
        const scroll = Math.min(window.scrollY, maxScroll);

        const opacity = 1.0 - (scroll / maxScroll)*0.5;

        header.style.backgroundColor = `rgba(32, 178, 170, ${opacity})`;
    });
}


// Typewriter animation
function initTypewriter() {
    const e1 = document.getElementById("typing");
    if (!e1) return;

    const words = ["Hello!", "Good day!"];
    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;

    function animate() {
        const word = words[wordIdx];

        if (!deleting) {
            // Type one character
            charIdx++;
            e1.innerHTML = word.slice(0, charIdx) + "<br>I am Sha &#x1F44B;";

            if (charIdx === word.length) {
                deleting = true;
                setTimeout(animate, 1000);
                return;
            }
        } else {
            // Delete one character
            charIdx--;
            e1.innerHTML = word.slice(0, charIdx) + "<br>I am Sha &#x1F44B;";

            if (charIdx === 0) {
                deleting = false;
                wordIdx = (wordIdx + 1) % words.length;
            }
        }

        setTimeout(animate, deleting ? 100 : 150);
    }

    // Start the loop
    animate();
}


initBkgdAnimation();
initHeaderFading();
initTypewriter();