var bgMusic = document.getElementById("bgMusic");
var statusIndicator = document.getElementById("statusIndicator");

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
        statusIndicator.style.backgroundImage = "url('assets/pause.png')"; // Change to the pause icon when playing
    } else {
        bgMusic.pause();
        statusIndicator.style.backgroundImage = "url('assets/play.png')"; // Change to the play icon when paused
    }
}

// JavaScript to generate and animate heart images
const body = document.querySelector('body');

function createHeartImage() {
    const heartImage = document.createElement('img');
    heartImage.classList.add('heart-image');
    heartImage.src = "assets/heart.png"; // Path to your heart image
    heartImage.style.left = `${Math.random() * 100}vw`; // Randomize X position
    heartImage.style.zIndex = "0";
    body.appendChild(heartImage);

    // Remove heart image after animation completes
    setTimeout(() => {
        heartImage.remove();
    }, 5000); // Adjust duration of animation as needed
}

// Generate heart images at intervals
setInterval(createHeartImage, 1000); // Adjust interval for the frequency of hearts
