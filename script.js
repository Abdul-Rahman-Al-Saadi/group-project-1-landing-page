    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        // Adjust background position for parallax effect
        document.querySelector('.hero-section').style.backgroundPositionY = `${scrollPosition * 0.5}px`;

        // Adjust text and button position
        const heroContents = document.getElementById('hero-contents');
        heroContents.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });


    

