<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HighNet - Complete Your Subscription</title>
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
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 2;
        }

        /* Header */
        .header {
            text-align: center;
            padding: 40px 0;
            margin-bottom: 30px;
        }

        .page-title {
            font-size: 3rem;
            font-weight: bold;
            background: linear-gradient(45deg, #00d4ff, #0099cc, #ffffff);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientShift 3s ease-in-out infinite;
            margin-bottom: 10px;
        }

        @keyframes gradientShift {
            0%, 100% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
        }

        .subtitle {
            font-size: 1.2rem;
            color: #b0b0b0;
            opacity: 0;
            animation: fadeInUp 1s ease-out 0.5s forwards;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Checkout Container */
        .checkout-container {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 25px;
            padding: 50px 40px;
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            opacity: 0;
            transform: translateY(50px);
            animation: containerSlideIn 0.8s ease-out 0.8s forwards;
        }

        @keyframes containerSlideIn {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Section Styling */
        .section {
            margin-bottom: 40px;
        }

        .section-title {
            font-size: 1.5rem;
            color: #00d4ff;
            margin-bottom: 25px;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .section-icon {
            width: 30px;
            height: 30px;
            background: linear-gradient(45deg, #00d4ff, #0099cc);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
        }

        /* Input Styling */
        .input-group {
            margin-bottom: 25px;
        }

        .input-label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
            color: #e0e0e0;
        }

        .form-input {
            width: 100%;
            padding: 18px 20px;
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 15px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .form-input:focus {
            outline: none;
            border-color: #00d4ff;
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
            transform: scale(1.02);
            background: rgba(255, 255, 255, 0.15);
        }

        .form-input::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }

        /* Promo Code Section */
        .promo-input-container {
            display: flex;
            gap: 15px;
            margin-bottom: 15px;
        }

        .promo-input {
            flex: 1;
        }

        .apply-btn {
            padding: 18px 30px;
            background: linear-gradient(45deg, #00d4ff, #0099cc);
            color: white;
            border: none;
            border-radius: 15px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
            position: relative;
            overflow: hidden;
            white-space: nowrap;
        }

        .apply-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s ease;
        }

        .apply-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 35px rgba(0, 212, 255, 0.4);
        }

        .apply-btn:hover::before {
            left: 100%;
        }

        .promo-note {
            font-size: 0.9rem;
            color: #b0b0b0;
            font-style: italic;
        }

        .promo-success {
            background: rgba(0, 255, 136, 0.1);
            border: 1px solid #00ff88;
            border-radius: 10px;
            padding: 15px;
            margin-top: 15px;
            color: #00ff88;
            display: none;
            animation: successSlide 0.5s ease-out;
        }

        @keyframes successSlide {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Payment Form Section */
        .payment-form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin-bottom: 30px;
        }

        /* M-PESA Instructions */
        .mpesa-header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 25px;
            justify-content: center;
        }

        .mpesa-logo {
            width: 70px;
            height: 70px;
            background: #00a651;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: white;
            font-size: 10px;
            animation: mpesaPulse 2.5s ease-in-out infinite;
            position: relative;
            text-align: center;
        }

        @keyframes mpesaPulse {
            0%, 100% {
                box-shadow: 0 0 20px #00a651, 0 0 40px #00a651;
                transform: scale(1);
            }
            50% {
                box-shadow: 0 0 30px #00a651, 0 0 60px #00a651, 0 0 80px #00a651;
                transform: scale(1.1);
            }
        }

        .mpesa-logo::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 15px;
            border: 3px solid #00a651;
            animation: mpesaRipple 2s linear infinite;
        }

        @keyframes mpesaRipple {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(1.5);
                opacity: 0;
            }
        }

        .mpesa-title {
            font-size: 1.8rem;
            color: #00a651;
            font-weight: bold;
            animation: mpesaGlow 2.5s ease-in-out infinite;
        }

        @keyframes mpesaGlow {
            0%, 100% {
                text-shadow: 0 0 15px #00a651;
            }
            50% {
                text-shadow: 0 0 25px #00a651, 0 0 35px #00a651;
            }
        }

        .payment-steps {
            background: rgba(0, 166, 81, 0.1);
            border: 1px solid rgba(0, 166, 81, 0.3);
            border-radius: 15px;
            padding: 25px;
            margin-bottom: 25px;
        }

        .step-list {
            list-style: none;
            counter-reset: step-counter;
        }

        .step-item {
            counter-increment: step-counter;
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            padding: 15px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            transition: all 0.3s ease;
        }

        .step-item:hover {
            background: rgba(0, 166, 81, 0.1);
            transform: translateX(5px);
        }

        .step-number {
            background: linear-gradient(45deg, #00a651, #00d4aa);
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 15px;
            flex-shrink: 0;
        }

        .step-text {
            flex: 1;
            font-size: 1rem;
        }

        .highlight {
            color: #00d4ff;
            font-weight: bold;
            background: rgba(0, 212, 255, 0.1);
            padding: 2px 8px;
            border-radius: 5px;
        }

        /* Success Message */
        .instant-message {
            background: rgba(0, 255, 136, 0.1);
            border: 2px solid #00ff88;
            border-radius: 15px;
            padding: 20px;
            text-align: center;
            margin: 25px 0;
            animation: messageGlow 3s ease-in-out infinite;
        }

        @keyframes messageGlow {
            0%, 100% {
                box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
            }
            50% {
                box-shadow: 0 0 30px rgba(0, 255, 136, 0.5);
            }
        }

        .instant-message h3 {
            color: #00ff88;
            font-size: 1.3rem;
            margin-bottom: 8px;
        }

        .instant-message p {
            color: #b0b0b0;
        }

        /* Confirm Button */
        .confirm-btn {
            width: 100%;
            padding: 22px;
            background: linear-gradient(45deg, #00d4ff, #0099cc);
            color: white;
            border: none;
            border-radius: 15px;
            font-size: 1.4rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.4s ease;
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
            position: relative;
            overflow: hidden;
            margin-top: 30px;
        }

        .confirm-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.6s ease;
        }

        .confirm-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(0, 212, 255, 0.5);
            background: linear-gradient(45deg, #0099cc, #00d4ff);
        }

        .confirm-btn:hover::before {
            left: 100%;
        }

        .confirm-btn:active {
            animation: buttonPress 0.1s ease;
        }

        @keyframes buttonPress {
            0% { transform: scale(1) translateY(-3px); }
            50% { transform: scale(0.98) translateY(-1px); }
            100% { transform: scale(1) translateY(-3px); }
        }

        /* Floating particles */
        .particle {
            position: absolute;
            width: 3px;
            height: 3px;
            background: #00d4ff;
            border-radius: 50%;
            animation: particleFloat 12s linear infinite;
            opacity: 0.5;
        }

        @keyframes particleFloat {
            0% {
                transform: translateY(100vh) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.5;
            }
            90% {
                opacity: 0.5;
            }
            100% {
                transform: translateY(-100px) translateX(80px) rotate(360deg);
                opacity: 0;
            }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .container {
                padding: 15px;
            }
            
            .checkout-container {
                padding: 30px 25px;
            }
            
            .page-title {
                font-size: 2.2rem;
            }
            
            .payment-form {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .promo-input-container {
                flex-direction: column;
            }
            
            .mpesa-header {
                flex-direction: column;
                text-align: center;
                gap: 15px;
            }
        }

        @media (max-width: 480px) {
            .page-title {
                font-size: 1.8rem;
            }
            
            .mpesa-logo {
                width: 60px;
                height: 60px;
            }
            
            .mpesa-title {
                font-size: 1.4rem;
            }
            
            .step-item {
                flex-direction: column;
                text-align: center;
                gap: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header class="header">
            <h1 class="page-title">Complete Your Subscription</h1>
            <p class="subtitle">Enter your details and follow the M-PESA payment steps</p>
        </header>

        <!-- Checkout Container -->
        <div class="checkout-container">
            <!-- Promo Code Section -->
            <div class="section">
                <h2 class="section-title">
                    <span class="section-icon">🎁</span>
                    Promo Code
                </h2>
                <div class="promo-input-container">
                    <input type="text" class="form-input promo-input" id="promoInput" placeholder="Enter Promo Code (Optional)">
                    <button class="apply-btn" onclick="applyPromoCode()">Apply</button>
                </div>
                <p class="promo-note">Have a discount code? Enter it above to save on your subscription!</p>
                <div class="promo-success" id="promoSuccess">
                    <strong>🎉 Promo code applied successfully!</strong> You've saved 20% on your subscription.
                </div>
            </div>

            <!-- Payment Details Section -->
            <div class="section">
                <h2 class="section-title">
                    <span class="section-icon">📱</span>
                    Payment Details
                </h2>
                <div class="payment-form">
                    <div class="input-group">
                        <label for="phoneNumber" class="input-label">Phone Number *</label>
                        <input type="tel" class="form-input" id="phoneNumber" placeholder="e.g., 0712345678" required>
                    </div>
                    <div class="input-group">
                        <label for="amount" class="input-label">Amount (KSh) *</label>
                        <input type="number" class="form-input" id="amount" placeholder="e.g., 100" required>
                    </div>
                </div>
            </div>

            <!-- Payment Instructions -->
            <div class="section">
                <h2 class="section-title">
                    <span class="section-icon">💳</span>
                    Payment Instructions
                </h2>
                
                <div class="mpesa-header">
                    <div class="mpesa-logo">
                        M-PESA
                    </div>
                    <div class="mpesa-title">Lipa na M-PESA</div>
                </div>

                <div class="payment-steps">
                    <ol class="step-list">
                        <li class="step-item">
                            <div class="step-number">1</div>
                            <div class="step-text">Go to <strong>Lipa na M-PESA</strong> on your phone</div>
                        </li>
                        
                        <li class="step-item">
                            <div class="step-number">2</div>
                            <div class="step-text">Choose <strong>Buy Goods / Pay Bill</strong></div>
                        </li>
                        
                        <li class="step-item">
                            <div class="step-number">3</div>
                            <div class="step-text">Enter Business Number (Till): <span class="highlight">3406998</span></div>
                        </li>
                        
                        <li class="step-item">
                            <div class="step-number">4</div>
                            <div class="step-text">Enter amount and <strong>confirm payment</strong></div>
                        </li>
                    </ol>
                </div>

                <div class="instant-message">
                    <h3>⚡ Instant Activation</h3>
                    <p>After payment, your bundles will reflect instantly on your phone!</p>
                </div>
            </div>

            <!-- Confirm Button -->
            <button class="confirm-btn" onclick="confirmPayment()">
                Confirm Payment
            </button>
        </div>
    </div>

    <script>
        // Create floating particles
        function createParticles() {
            for (let i = 0; i < 12; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.animationDelay = Math.random() * 12 + 's';
                particle.style.animationDuration = (12 + Math.random() * 6) + 's';
                document.body.appendChild(particle);
            }
        }

        // Auto-fill amount based on common packages (demo functionality)
        const commonAmounts = [30, 60, 100, 150, 250, 500, 1200];
        
        // Apply promo code functionality
        function applyPromoCode() {
            const promoInput = document.getElementById('promoInput');
            const promoSuccess = document.getElementById('promoSuccess');
            const promoCode = promoInput.value.trim().toLowerCase();
            
            if (promoCode === '') {
                alert('Please enter a promo code first.');
                return;
            }
            
            // Simulate promo code validation
            const validCodes = ['save20', 'discount', 'highnet2024', 'welcome', 'new2024'];
            
            if (validCodes.includes(promoCode)) {
                promoSuccess.style.display = 'block';
                promoInput.style.border = '2px solid #00ff88';
                promoInput.disabled = true;
                
                // Apply discount to amount field
                const amountField = document.getElementById('amount');
                const currentAmount = parseFloat(amountField.value) || 0;
                if (currentAmount > 0) {
                    const discountedAmount = Math.round(currentAmount * 0.8); // 20% discount
                    amountField.value = discountedAmount;
                    amountField.style.border = '2px solid #00ff88';
                }
                
                console.log('Promo code applied:', promoCode);
            } else {
                alert('Invalid promo code. Please try again.');
                promoInput.style.border = '2px solid #ff4444';
                setTimeout(() => {
                    promoInput.style.border = '2px solid rgba(255, 255, 255, 0.2)';
                }, 2000);
            }
        }

        // Confirm payment functionality
        function confirmPayment() {
            const phoneNumber = document.getElementById('phoneNumber').value.trim();
            const amount = document.getElementById('amount').value.trim();
            const promoApplied = document.getElementById('promoSuccess').style.display === 'block';
            
            // Validate inputs
            if (!phoneNumber || !amount) {
                alert('Please fill in both phone number and amount fields.');
                return;
            }
            
            if (!/^0\d{9}$/.test(phoneNumber)) {
                alert('Please enter a valid phone number (e.g., 0712345678)');
                return;
            }
            
            if (parseFloat(amount) <= 0) {
                alert('Please enter a valid amount.');
                return;
            }
            
            let message = 'Payment Confirmation:\n\n';
            message += `📱 Phone Number: ${phoneNumber}\n`;
            message += `💰 Amount: KSh ${amount}\n`;
            message += `🏪 Till Number: 3406998\n`;
            
            if (promoApplied) {
                message += '🎁 Promo discount applied\n';
            }
            
            message += '\n✅ Follow the M-PESA steps above to complete payment.\n';
            message += '⚡ Your data bundles will be activated instantly!';
            
            alert(message);
            console.log('Payment confirmed:', { phoneNumber, amount, promoApplied });
        }

        // Enhanced input interactions
        const inputs = document.querySelectorAll('.form-input');
        
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.transform = 'scale(1.02)';
                this.style.background = 'rgba(255, 255, 255, 0.15)';
            });
            
            input.addEventListener('blur', function() {
                this.style.transform = 'scale(1)';
                this.style.background = 'rgba(255, 255, 255, 0.1)';
            });
        });

        // Phone number formatting
        document.getElementById('phoneNumber').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
            if (value.length > 10) {
                value = value.substring(0, 10);
            }
            e.target.value = value;
        });

        // Amount validation
        document.getElementById('amount').addEventListener('input', function(e) {
            let value = e.target.value.replace(/[^\d.]/g, ''); // Allow only digits and decimal
            e.target.value = value;
        });

        // Enter key support
        document.getElementById('promoInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                applyPromoCode();
            }
        });

        // Add enhanced hover effects for payment steps
        document.querySelectorAll('.step-item').forEach(step => {
            step.addEventListener('mouseenter', function() {
                this.style.background = 'rgba(0, 166, 81, 0.1)';
                this.style.borderLeft = '4px solid #00a651';
                this.style.paddingLeft = '11px';
            });
            
            step.addEventListener('mouseleave', function() {
                this.style.background = 'rgba(255, 255, 255, 0.05)';
                this.style.borderLeft = 'none';
                this.style.paddingLeft = '15px';
            });
        });

        // Initialize particles
        createParticles();

        // Add loading state for confirm button
        const confirmBtn = document.querySelector('.confirm-btn');
        confirmBtn.addEventListener('click', function() {
            if (this.textContent === 'Confirm Payment') {
                const originalText = this.textContent;
                this.textContent = 'Processing...';
                this.disabled = true;
                this.style.opacity = '0.7';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                    this.style.opacity = '1';
                }, 1500);
            }
        });

        // Demo: Auto-suggest amounts
        const amountInput = document.getElementById('amount');
        amountInput.addEventListener('focus', function() {
            if (!this.value) {
                this.placeholder = 'Common: 30, 60, 100, 150, 250, 500, 1200';
            }
        });

        amountInput.addEventListener('blur', function() {
            this.placeholder = 'e.g., 100';
        });
    </script>
</body>
</html>
