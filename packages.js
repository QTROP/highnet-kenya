<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HighNet - Data Packages</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d2d5a 100%);
            min-height: 100vh;
            color: white;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 2;
        }

        /* Header with Safaricom Branding */
        .header {
            text-align: center;
            padding: 40px 0;
            margin-bottom: 30px;
        }

        .browse-bila-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            margin-bottom: 40px;
            flex-wrap: wrap;
        }

        .safaricom-logo {
            width: 80px;
            height: 80px;
            background: #00a651;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: white;
            font-size: 10px;
            animation: safaricomPulse 2.5s ease-in-out infinite;
            position: relative;
            text-align: center;
        }

        @keyframes safaricomPulse {
            0%, 100% {
                box-shadow: 0 0 20px #00a651, 0 0 40px #00a651;
                transform: scale(1);
            }
            50% {
                box-shadow: 0 0 30px #00a651, 0 0 60px #00a651, 0 0 80px #00a651;
                transform: scale(1.1);
            }
        }

        .safaricom-logo::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 3px solid #00a651;
            animation: rippleEffect 2s linear infinite;
        }

        @keyframes rippleEffect {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(1.8);
                opacity: 0;
            }
        }

        .browse-bila-text {
            font-size: 2.5rem;
            font-weight: bold;
            color: #00a651;
            animation: textGlow 2.5s ease-in-out infinite;
        }

        @keyframes textGlow {
            0%, 100% {
                text-shadow: 0 0 15px #00a651;
            }
            50% {
                text-shadow: 0 0 25px #00a651, 0 0 35px #00a651;
            }
        }

        .page-title {
            font-size: 3rem;
            margin-top: 20px;
            background: linear-gradient(45deg, #00d4ff, #0099cc, #ffffff);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes gradientShift {
            0%, 100% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
        }

        /* Packages Grid */
        .packages-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin-top: 50px;
        }

        /* Package Cards */
        .package-card {
            background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
            border-radius: 20px;
            padding: 40px 30px;
            text-align: center;
            border: 2px solid transparent;
            backdrop-filter: blur(15px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            opacity: 0;
            transform: translateY(50px);
            animation: cardSlideIn 0.6s ease-out forwards;
        }

        .package-card:nth-child(1) { animation-delay: 0.1s; }
        .package-card:nth-child(2) { animation-delay: 0.2s; }
        .package-card:nth-child(3) { animation-delay: 0.3s; }
        .package-card:nth-child(4) { animation-delay: 0.4s; }
        .package-card:nth-child(5) { animation-delay: 0.5s; }
        .package-card:nth-child(6) { animation-delay: 0.6s; }
        .package-card:nth-child(7) { animation-delay: 0.7s; }

        @keyframes cardSlideIn {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .package-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.2), transparent);
            transition: left 0.5s ease;
        }

        .package-card:hover {
            transform: translateY(-10px) scale(1.02);
            border-color: #00d4ff;
            box-shadow: 0 20px 50px rgba(0, 212, 255, 0.3), 0 0 30px rgba(0, 212, 255, 0.2);
        }

        .package-card:hover::before {
            left: 100%;
        }

        /* Popular Badge */
        .popular-badge {
            position: absolute;
            top: -10px;
            right: 20px;
            background: linear-gradient(45deg, #ff6b35, #f7931e);
            color: white;
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
            animation: badgePulse 2s ease-in-out infinite;
        }

        @keyframes badgePulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
        }

        /* Package Content */
        .package-duration {
            font-size: 2rem;
            font-weight: bold;
            color: #00d4ff;
            margin-bottom: 15px;
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-5px);
            }
        }

        .package-type {
            font-size: 1.2rem;
            color: #e0e0e0;
            margin-bottom: 25px;
        }

        .package-price {
            font-size: 3rem;
            font-weight: bold;
            color: #ffffff;
            margin-bottom: 30px;
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }

        .currency {
            font-size: 1.5rem;
            color: #00d4ff;
        }

        /* Choose Buttons */
        .choose-btn {
            background: linear-gradient(45deg, #00d4ff, #0099cc);
            color: white;
            border: none;
            padding: 18px 40px;
            border-radius: 50px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
            position: relative;
            overflow: hidden;
            width: 100%;
            max-width: 200px;
        }

        .choose-btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .choose-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(0, 212, 255, 0.5);
            background: linear-gradient(45deg, #0099cc, #00d4ff);
        }

        .choose-btn:hover::before {
            width: 300px;
            height: 300px;
        }

        .choose-btn:active {
            transform: translateY(0);
            animation: buttonPress 0.1s ease;
        }

        @keyframes buttonPress {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(0.98);
            }
            100% {
                transform: scale(1);
            }
        }

        /* Special styling for unlimited packages */
        .package-card.unlimited {
            background: linear-gradient(145deg, rgba(0, 212, 255, 0.1), rgba(0, 153, 204, 0.05));
            border: 2px solid rgba(0, 212, 255, 0.3);
        }

        .package-card.unlimited .package-duration {
            color: #00ff88;
        }

        .package-card.unlimited:hover {
            border-color: #00ff88;
            box-shadow: 0 20px 50px rgba(0, 255, 136, 0.3), 0 0 30px rgba(0, 255, 136, 0.2);
        }

        /* Floating particles */
        .particle {
            position: absolute;
            width: 3px;
            height: 3px;
            background: #00d4ff;
            border-radius: 50%;
            animation: particleFloat 10s linear infinite;
            opacity: 0.6;
        }

        @keyframes particleFloat {
            0% {
                transform: translateY(100vh) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.6;
            }
            90% {
                opacity: 0.6;
            }
            100% {
                transform: translateY(-100px) translateX(100px) rotate(360deg);
                opacity: 0;
            }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .packages-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .page-title {
                font-size: 2.2rem;
            }
            
            .browse-bila-text {
                font-size: 2rem;
            }
            
            .package-card {
                padding: 30px 20px;
            }
            
            .package-price {
                font-size: 2.5rem;
            }
        }

        @media (max-width: 480px) {
            .browse-bila-container {
                flex-direction: column;
                gap: 15px;
            }
            
            .page-title {
                font-size: 1.8rem;
            }
            
            .safaricom-logo {
                width: 60px;
                height: 60px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header class="header">
            <div class="browse-bila-container">
                <div class="safaricom-logo">
                    SAFARICOM
                </div>
                <div class="browse-bila-text">Browse Bila</div>
            </div>
            <h1 class="page-title">Data Packages</h1>
        </header>

        <!-- Packages Grid -->
        <div class="packages-grid">
            <!-- 2 Hours Package -->
            <div class="package-card">
                <div class="package-duration">2 Hours</div>
                <div class="package-type">UNLIMITED</div>
                <div class="package-price">
                    <span class="currency">Ksh</span> 30
                </div>
                <button class="choose-btn" onclick="selectPackage('2hours')">Choose</button>
            </div>

            <!-- 4 Hours Package -->
            <div class="package-card">
                <div class="package-duration">4 Hours</div>
                <div class="package-type">UNLIMITED</div>
                <div class="package-price">
                    <span class="currency">Ksh</span> 60
                </div>
                <button class="choose-btn" onclick="selectPackage('4hours')">Choose</button>
            </div>

            <!-- 6 Hours Package -->
            <div class="package-card">
                <div class="popular-badge">POPULAR</div>
                <div class="package-duration">6 Hours</div>
                <div class="package-type">UNLIMITED</div>
                <div class="package-price">
                    <span class="currency">Ksh</span> 100
                </div>
                <button class="choose-btn" onclick="selectPackage('6hours')">Choose</button>
            </div>

            <!-- 12 Hours Package -->
            <div class="package-card">
                <div class="package-duration">12 Hours</div>
                <div class="package-type">UNLIMITED</div>
                <div class="package-price">
                    <span class="currency">Ksh</span> 150
                </div>
                <button class="choose-btn" onclick="selectPackage('12hours')">Choose</button>
            </div>

            <!-- 24 Hours Package -->
            <div class="package-card unlimited">
                <div class="package-duration">24 Hours</div>
                <div class="package-type">UNLIMITED</div>
                <div class="package-price">
                    <span class="currency">Ksh</span> 250
                </div>
                <button class="choose-btn" onclick="selectPackage('24hours')">Choose</button>
            </div>

            <!-- Weekly Package -->
            <div class="package-card unlimited">
                <div class="package-duration">Weekly</div>
                <div class="package-type">UNLIMITED</div>
                <div class="package-price">
                    <span class="currency">Ksh</span> 500
                </div>
                <button class="choose-btn" onclick="selectPackage('weekly')">Choose</button>
            </div>

            <!-- Monthly Package -->
            <div class="package-card unlimited">
                <div class="popular-badge">BEST VALUE</div>
                <div class="package-duration">Monthly</div>
                <div class="package-type">UNLIMITED</div>
                <div class="package-price">
                    <span class="currency">Ksh</span> 1200
                </div>
                <button class="choose-btn" onclick="selectPackage('monthly')">Choose</button>
            </div>
        </div>
    </div>

    <script>
        // Create floating particles
        function createParticles() {
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.animationDelay = Math.random() * 10 + 's';
                particle.style.animationDuration = (10 + Math.random() * 5) + 's';
                document.body.appendChild(particle);
            }
        }

        // Package selection function
        function selectPackage(packageType) {
            const packages = {
                '2hours': { name: '2 Hours UNLIMITED', price: 30 },
                '4hours': { name: '4 Hours UNLIMITED', price: 60 },
                '6hours': { name: '6 Hours UNLIMITED', price: 100 },
                '12hours': { name: '12 Hours UNLIMITED', price: 150 },
                '24hours': { name: '24 Hours UNLIMITED', price: 250 },
                'weekly': { name: 'Weekly UNLIMITED', price: 500 },
                'monthly': { name: 'Monthly UNLIMITED', price: 1200 }
            };

            const selectedPackage = packages[packageType];
            alert(`Selected: ${selectedPackage.name} - Ksh ${selectedPackage.price}\n\nProceeding to checkout...`);
            
            // Here you would normally redirect to checkout page
            console.log('Selected package:', selectedPackage);
        }

        // Add enhanced hover effects
        document.querySelectorAll('.package-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.background = 'linear-gradient(145deg, rgba(0, 212, 255, 0.15), rgba(0, 212, 255, 0.08))';
            });
            
            card.addEventListener('mouseleave', function() {
                if (this.classList.contains('unlimited')) {
                    this.style.background = 'linear-gradient(145deg, rgba(0, 212, 255, 0.1), rgba(0, 153, 204, 0.05))';
                } else {
                    this.style.background = 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))';
                }
            });
        });

        // Initialize particles
        createParticles();

        // Add staggered animation on scroll for better mobile experience
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        });

        document.querySelectorAll('.package-card').forEach(card => {
            observer.observe(card);
        });
    </script>
</body>
</html>
