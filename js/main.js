document.addEventListener('DOMContentLoaded', function() {
            // Variables
            const menuToggle = document.querySelector('.menu-toggle');
            const navMenu = document.querySelector('.nav-menu');
            const navLinks = document.querySelectorAll('.nav-link');
            const themeButtons = document.querySelectorAll('.theme-btn');
            const navIndicator = document.createElement('div');
            const header = document.querySelector('.header');
            const badge = document.querySelector('.badge');
            
            // Setup nav indicator
            navIndicator.classList.add('nav-indicator');
            navMenu.appendChild(navIndicator);
            
            // Mobile menu toggle
            menuToggle.addEventListener('click', function() {
                menuToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
                
                // Toggle hamburger animation
                const bars = document.querySelectorAll('.bar');
                if (menuToggle.classList.contains('active')) {
                    bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                    bars[1].style.opacity = '0';
                    bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
                } else {
                    bars[0].style.transform = 'none';
                    bars[1].style.opacity = '1';
                    bars[2].style.transform = 'none';
                }
            });
            
            // Navigation links hover effect
            navLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    if (window.innerWidth > 768) {
                        setIndicatorPosition(this);
                    }
                });
                
            link.addEventListener('click', function() {
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
                setIndicatorPosition(this);
            });
            });
            
            // Scroll effect for header
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.style.padding = '5px 0';
                    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
                } else {
                    header.style.padding = '0';
                    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                }
            });
            
            // Function to set nav indicator position
            function setIndicatorPosition(el) {
                if (!el || window.innerWidth <= 768) return;
                
                const width = el.offsetWidth;
                const left = el.offsetLeft;
                
                navIndicator.style.width = `${width}px`;
                navIndicator.style.left = `${left}px`;
            }
        });