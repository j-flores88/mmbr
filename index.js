const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}));

document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('active');
        });
    });
});

document.querySelector('.back-to-top').addEventListener('click', function() {
    this.blur();
});

const introScreen = document.getElementById('intro-screen');
const introVideo = document.getElementById('intro-video');
const skipBtn = document.getElementById('skip-btn');
const enterBtn = document.getElementById('enter-btn');
const enterOverlay = document.getElementById('enter-overlay');

function removeIntro() {
    introScreen.classList.add('hide-intro');
    if (introVideo) introVideo.pause();
    
    setTimeout(() => {
        introScreen.style.display = 'none';
    }, 1000); 
}

// Listen for the "Enter" button click
if (enterBtn) {
    enterBtn.addEventListener('click', () => {
        // Fade out the center button
        enterOverlay.style.opacity = '0';
        setTimeout(() => {
            enterOverlay.style.display = 'none';
        }, 500);
        
        // Show the skip button in the corner
        skipBtn.style.display = 'block';
        
        // Play the video (audio will now work because of the user click!)
        if (introVideo) {
            introVideo.play();
        }
    });
}

// Listen for the skip button click
if (skipBtn) {
    skipBtn.addEventListener('click', removeIntro);
}

// Listen for the video to finish playing naturally
if (introVideo) {
    introVideo.addEventListener('ended', removeIntro);
}