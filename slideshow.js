
        // Get all slide elements
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;

        // Show first slide initially
        slides[currentSlide].classList.add('active');

        // Function to show next slide
        function nextSlide() {
            // Remove active class from current slide
            slides[currentSlide].classList.remove('active');
            
            // Increment counter and loop back to 0 if at end
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Add active class to next slide
            slides[currentSlide].classList.add('active');
        }

        // Set interval to change slides every 3 seconds (3000ms)
        setInterval(nextSlide, 3000);

        // Optional: Add manual navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                nextSlide();
            }
            if (e.key === 'ArrowLeft') {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                slides[currentSlide].classList.add('active');
            }
        });
        // Add pause on hover
        const container = document.querySelector('.slideshow-container');
        let interval = setInterval(nextSlide, 3000);

        container.addEventListener('mouseover', () => clearInterval(interval));
        container.addEventListener('mouseout', () => interval = setInterval(nextSlide, 3000));

        // Add navigation dots
        const dotsContainer = document.createElement('div');
        container.appendChild(dotsContainer);
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.addEventListener('click', () => {
                slides[currentSlide].classList.remove('active');
                currentSlide = index;
                slides[currentSlide].classList.add('active');
            });
            dotsContainer.appendChild(dot);
        });
