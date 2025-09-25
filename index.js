<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HighNet - Home of Browsing Speeds and Streaming</title>
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
            overflow-x: hidden;
            color: white;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            position: relative;
            z-index: 2;
        }

        /* Hero Section */
        .hero {
            text-align: center;
            padding: 60px 0;
            position: relative;
        }

        /* Wi-Fi Animation */
        .wifi-container {
            position: relative;
            width: 120px;
            height: 120px;
            margin: 0 auto 40px;
        }

        .wifi-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 60px;
            height: 60px;
        }

        .wifi-bar {
            position: absolute;
            border: 3px solid #00d4ff;
            border-radius: 50%;
            border-top: 3px solid transparent;
            border-left: 3px solid transparent;
            animation: pulse 2s ease-in-out infinite;
        }

        .wifi-bar:nth-child(1) {
            width: 40px;
            height: 40px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation-delay: 0s;
        }

        .wifi-bar:nth-child(2) {
            width: 70px;
            height: 70px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation-delay: 0.3s;
        }

        .wifi-bar:nth-child(3) {
            width: 100px;
            height: 100px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation-delay: 0.6s;
        }

        @keyframes pulse {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
            50% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(1.2);
            }
        }

        .wifi-center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 12px;
            height: 12px;
            background: #00d4ff;
            border-radius: 50%;
            animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow {
            0%, 100% {
                box-shadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff;
            }
            50% {
                box-shadow: 0 0 20px #00d4ff, 0 0 30px #00d4ff, 0 0 40px #00d4ff;
            }
        }

        /* Headlines */
        .hero h1 {
            font-size: 3.5rem;
            font-weight: bold;
            margin-bottom: 20px;
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

        .hero h2 {
            font-size: 1.5rem;
            color: #e0e0e0;
            margin-bottom: 40px;
            opacity: 0;
            animation: fadeInUp 1s ease-out 0.5s forwards;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* DATA PLANS Button */
        .data-plans-btn {
            display: inline-block;
            padding: 18px 40px;
            background: linear-gradient(45deg, #00d4ff, #0099cc);
            color: white;
            text-decoration: none;
            font-size: 1.3rem;
            font-weight: bold;
            border-radius: 50px;
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.3s ease;
            animation: buttonAppear 0.8s ease-out 7s forwards;
            margin-top: 30px;
        }

        @keyframes buttonAppear {
            0% {
                opacity: 0;
                transform: scale(0.8) translateY(20px);
            }
            60% {
                transform: scale(1.1) translateY(-5px);
            }
            100% {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        .data-plans-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(0, 212, 255, 0.5);
        }

        .data-plans-btn.visible {
            animation: pulseAttention 2s ease-in-out infinite;
        }

        @keyframes pulseAttention {
            0%, 100% {
                box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
            }
            50% {
                box-shadow: 0 15px 50px rgba(0, 212, 255, 0.6);
                transform: scale(1.05);
            }
        }

        /* Browse Bila Section */
        .browse-bila {
            margin-top: 80px;
            text-align: center;
            padding: 40px 20px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .browse-bila h3 {
            font-size: 2rem;
            margin-bottom: 30px;
            color: #ffffff;
        }

        .safaricom-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }

        .safaricom-logo {
            width: 60px;
            height: 60px;
            background: #00a651;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: white;
            font-size: 12px;
            animation: safaricomGlow 2.5s ease-in-out infinite;
            position: relative;
        }

        @keyframes safaricomGlow {
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
            border: 2px solid #00a651;
            animation: ripple 2s linear infinite;
        }

        @keyframes ripple {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(1.5);
                opacity: 0;
            }
        }

        .safaricom-text {
            font-size: 1.8rem;
            font-weight: bold;
            color: #00a651;
            animation: textGlow 2.5s ease-in-out infinite;
        }

        @keyframes textGlow {
            0%, 100% {
                text-shadow: 0 0 10px #00a651;
            }
            50% {
                text-shadow: 0 0 20px #00a651, 0 0 30px #00a651;
            }
        }

        /* Floating particles */
        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: #00d4ff;
            border-radius: 50%;
            animation: float 8s linear infinite;
            opacity: 0.7;
        }

        @keyframes float {
            0% {
                transform: translateY(100vh) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 0.7;
            }
            90% {
                opacity: 0.7;
            }
            100% {
                transform: translateY(-100px) translateX(50px);
                opacity: 0;
            }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero h2 {
                font-size: 1.2rem;
            }
            
            .data-plans-btn {
                font-size: 1.1rem;
                padding: 15px 30px;
            }
            
            .browse-bila h3 {
                font-size: 1.5rem;
            }
            
            .safaricom-text {
                font-size: 1.4rem;
            }
        }

        @media (max-width: 480px) {
            .hero h1 {
                font-size: 2rem;
            }
            
            .wifi-container {
                width: 100px;
                height: 100px;
            }
            
            .safaricom-container {
                flex-direction: column;
                gap: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <section class="hero">
            <div class="wifi-container">
                <div class="wifi-bar"></div>
                <div class="wifi-bar"></div>
                <div class="wifi-bar"></div>
                <div class="wifi-center"></div>
            </div>
            
            <h1>HIGHNET</h1>
            <h2>Home of Browsing Speeds and Streaming</h2>
            <p style="font-size: 1.2rem; color: #b0b0b0; margin-bottom: 20px; opacity: 0; animation: fadeInUp 1s ease-out 1s forwards;">
                Fast, reliable, and seamless internet for all your online needs.
            </p>
            
            <a href="#" class="data-plans-btn" id="dataPlansBtn">DATA PLANS</a>
        </section>

        <section class="browse-bila">
            <h3>Browse Bila was na SAFARICOM</h3>
            <div class="safaricom-container">
                <div class="safaricom-logo">
                    SAFARICOM
                </div>
                <div class="safaricom-text">SAFARICOM</div>
            </div>
        </section>
    </div>

    <script>
        // Create floating particles
        function createParticles() {
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (8 + Math.random() * 4) + 's';
                document.body.appendChild(particle);
            }
        }

        // Add pulsing effect to button after it appears
        setTimeout(() => {
            const btn = document.getElementById('dataPlansBtn');
            btn.classList.add('visible');
        }, 8000);

        // Initialize particles
        createParticles();

        // Add click handler for button
        document.getElementById('dataPlansBtn').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Redirecting to Data Plans page...');
        });
    </script>
</body>
</html>
