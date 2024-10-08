
// Cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
const zoom = document.querySelectorAll(".zoom");



window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {
        duration: 500,
        fill: "forwards"
    });



    // When hover zoom
    zoom.forEach(li => {
        li.addEventListener("mouseenter", () => {
        cursorOutline.style.display = "none"; // Hide cursor-outline on hover
        cursorDot.style.transform = "scale(8)";
        });
    
        li.addEventListener("mouseleave", () => {
        cursorOutline.style.display = "block"; // Show it again when hover ends
        cursorDot.style.transform = "scale(1)";
        });
    });
});



// navbar
let lastScrollTop = 0; // Keep track of last scroll position
const navbar = document.getElementById('navbar');
const navIcons = document.getElementById('nav-icons'); 
const container = document.querySelector('.main-container'); // Target the .main-container

container.addEventListener('scroll', function() {
    const currentScroll = container.scrollTop; // Get the scroll position of the container

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('hidden-nav'); // Add hidden class
        navIcons.classList.add('hidden-navIcons')
    } else {
        // Scrolling up
        navbar.classList.remove('hidden-nav'); // Remove hidden class
        navIcons.classList.remove('hidden-navIcons')
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Update last scroll position

    if (container.scrollTop > 0) {
        navbar.classList.add('scrolled'); // Add class when scrolled
    } else {
        navbar.classList.remove('scrolled'); // Remove class when at the top
    }
});




// Video carousel
let currentVideo = 0;
const videos = document.querySelectorAll('.video-container');
const lines = document.querySelectorAll('.line');

function showVideo(index) {
    videos.forEach((video, i) => {
        video.classList.remove('active');
        lines[i].classList.remove('active');
        if (i === index) {
            video.classList.add('active');
            lines[i].classList.add('active');
        }
    });
}

function nextVideo() {
    currentVideo = (currentVideo < videos.length - 1) ? currentVideo + 1 : 0;
    showVideo(currentVideo);
}

// Initialize the first video
showVideo(currentVideo);

// Auto-slide (Optional)
setInterval(nextVideo, 5000); // Change every 5 seconds




const mainContainer = document.querySelector('.main-container'); // Change to your main container's selector

mainContainer.addEventListener('scroll', function() {
    const animations = document.querySelectorAll('.animation');
    const scrollPosition = mainContainer.scrollTop;  // Get the scroll position of the main container

    animations.forEach((animation, index) => {
        const animationOffset = index * window.innerHeight;  // Calculate the start of each section
        const nextOffset = (index + 1) * window.innerHeight;  // Calculate the end of each section

        const lottie = animation.querySelector('.lottie');
        const txtAnm = animation.querySelector('.txt-anm');
        const subTxt = animation.querySelector('.lottie-subtxt');

        // Check if the scroll position is within the current animation section
        if (scrollPosition >= animationOffset && scrollPosition < nextOffset) {
            animation.style.opacity = 1;
            txtAnm.style.animation = 'txt-anm 1s 1 linear';
            lottie.style.animation = 'rocket 2s 1 linear forwards';
            subTxt.style.animation = 'subTxtAnm 1s 1 linear';
        } else {
            animation.style.opacity = 0;
            txtAnm.style.animation = 'none';
            lottie.style.animation = 'none';
            subTxt.style.animation = 'none';
        }
    });
});




// lottie animation
if (window.matchMedia("(min-width: 768px)").matches) {
    var animation = lottie.loadAnimation({
        container: document.getElementById('lottie-container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'static/rocket.json'
    });
}

