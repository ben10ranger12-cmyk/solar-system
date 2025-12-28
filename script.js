
        // Create stars
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = Math.random() * 2 + 'px';
            star.style.height = star.style.width;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }

        // Planet information
        const planetInfo = {
            Mercury: { 
                description: 'The smallest planet and closest to the Sun',
                distance: '57.9 million km from Sun',
                diameter: '4,879 km',
                fact: 'A year on Mercury lasts just 88 Earth days'
            },
            Venus: { 
                description: 'The hottest planet in our solar system',
                distance: '108.2 million km from Sun',
                diameter: '12,104 km',
                fact: 'Venus rotates backwards compared to other planets'
            },
            Earth: { 
                description: 'Our home planet, the only known planet with life',
                distance: '149.6 million km from Sun',
                diameter: '12,742 km',
                fact: 'Earth is the only planet not named after a god'
            },
            Mars: { 
                description: 'The Red Planet, named after the Roman god of war',
                distance: '227.9 million km from Sun',
                diameter: '6,779 km',
                fact: 'Mars has the largest volcano in the solar system'
            },
            Jupiter: { 
                description: 'The largest planet, a gas giant',
                distance: '778.5 million km from Sun',
                diameter: '139,820 km',
                fact: 'Jupiter has 95 known moons'
            },
            Saturn: { 
                description: 'Famous for its spectacular ring system',
                distance: '1.4 billion km from Sun',
                diameter: '116,460 km',
                fact: 'Saturn could float in water if there was a bathtub big enough'
            },
            Uranus: { 
                description: 'An ice giant that rotates on its side',
                distance: '2.9 billion km from Sun',
                diameter: '50,724 km',
                fact: 'Uranus has 27 known moons'
            },
            Neptune: { 
                description: 'The windiest planet in our solar system',
                distance: '4.5 billion km from Sun',
                diameter: '49,244 km',
                fact: 'Neptune has supersonic winds reaching 2,100 km/h'
            }
        };

        // Planet click handlers
        const planets = document.querySelectorAll('.planet');
        const modal = new bootstrap.Modal(document.getElementById('planetModal'));
        
        planets.forEach(planet => {
            planet.addEventListener('click', function() {
                const planetName = this.dataset.planet;
                const info = planetInfo[planetName];
                
                document.getElementById('planetName').textContent = planetName;
                document.getElementById('planetDetails').innerHTML = `
                    <p><strong>Description:</strong> ${info.description}</p>
                    <p><strong>Distance from Sun:</strong> ${info.distance}</p>
                    <p><strong>Diameter:</strong> ${info.diameter}</p>
                    <p><strong>Fun Fact:</strong> ${info.fact}</p>
                `;
                
                modal.show();
            });
        });

        // Animation controls
        let isPaused = false;
        let speedMultiplier = 1;
        const orbits = document.querySelectorAll('.orbit');

        document.getElementById('pauseBtn').addEventListener('click', function() {
            isPaused = !isPaused;
            orbits.forEach(orbit => {
                orbit.style.animationPlayState = isPaused ? 'paused' : 'running';
            });
            this.textContent = isPaused ? 'Resume' : 'Pause';
            this.classList.toggle('btn-primary');
            this.classList.toggle('btn-danger');
        });

        document.getElementById('speedUpBtn').addEventListener('click', function() {
            speedMultiplier *= 0.5;
            updateSpeed();
        });

        document.getElementById('slowDownBtn').addEventListener('click', function() {
            speedMultiplier *= 2;
            updateSpeed();
        });

        document.getElementById('resetBtn').addEventListener('click', function() {
            speedMultiplier = 1;
            updateSpeed();
        });

        function updateSpeed() {
            orbits.forEach(orbit => {
                const originalDuration = parseFloat(orbit.style.animationDuration || 
                    window.getComputedStyle(orbit).animationDuration);
                orbit.style.animationDuration = (originalDuration * speedMultiplier) + 's';
            });
        }

        // Initialize tooltips
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    