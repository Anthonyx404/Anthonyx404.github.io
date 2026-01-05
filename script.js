// Create stars
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = Math.random() * 3 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsContainer.appendChild(star);
}

// Create shooting stars
function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.width = Math.random() * 100 + 80 + 'px';
    shootingStar.style.left = Math.random() * 100 + '%';
    shootingStar.style.top = Math.random() * 50 + '%';
    shootingStar.style.animationDelay = Math.random() * 3 + 's';
    shootingStar.style.animationDuration = Math.random() * 2 + 2 + 's';
    starsContainer.appendChild(shootingStar);
    
    setTimeout(() => {
        shootingStar.remove();
    }, 5000);
}

// Create shooting stars periodically
setInterval(createShootingStar, 3000);
createShootingStar();

// Envelope toggle
const envelope = document.getElementById('envelope');
envelope.addEventListener('click', function() {
    this.classList.toggle('open');
});

// Music Control
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const playIcon = musicBtn.querySelector('.play-icon');
const pauseIcon = musicBtn.querySelector('.pause-icon');

// Set initial volume
bgMusic.volume = 0.3;

musicBtn.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        musicBtn.classList.add('playing');
    } else {
        bgMusic.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        musicBtn.classList.remove('playing');
    }
});

// Auto-play on first user interaction (some browsers block auto-play)
document.addEventListener('click', function playOnFirstClick() {
    if (bgMusic.paused) {
        bgMusic.play().then(() => {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            musicBtn.classList.add('playing');
        }).catch(err => {
            console.log('Auto-play prevented:', err);
        });
    }
    document.removeEventListener('click', playOnFirstClick);
}, { once: true });