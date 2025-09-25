<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HighNet - WhatsApp Support Widget Demo</title>
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
            position: relative;
        }

        /* Demo Page Content */
        .demo-content {
            padding: 50px 20px;
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
        }

        .demo-title {
            font-size: 3rem;
            background: linear-gradient(45deg, #00d4ff, #0099cc, #ffffff);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientShift 3s ease-in-out infinite;
            margin-bottom: 30px;
        }

        @keyframes gradientShift {
            0%, 100% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
        }

        .demo-description {
            font-size: 1.2rem;
            color: #b0b0b0;
            margin-bottom: 50px;
            line-height: 1.6;
        }

        .demo-sections {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 50px;
        }

        .demo-card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 40px 30px;
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
        }

        .demo-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
        }

        .demo-card h3 {
            color: #00d4ff;
            font-size: 1.5rem;
            margin-bottom: 15px;
        }

        .demo-card p {
            color: #e0e0e0;
            line-height: 1.6;
        }

        /* WhatsApp Floating Widget */
        .whatsapp-widget {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 10000;
            font-family: 'Arial', sans-serif;
        }

        .whatsapp-button {
            width: 60px;
            height: 60px;
            background: #25d366;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
            transition: all 0.3s ease;
            position: relative;
            animation: floatBounce 3s ease-in-out infinite;
            text-decoration: none;
            border: none;
            outline: none;
        }

        @keyframes floatBounce {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-8px);
            }
        }

        .whatsapp-button:hover {
            transform: scale(1.1) translateY(-3px);
            box-shadow: 0 15px 35px rgba(37, 211, 102, 0.4);
            animation-play-state: paused;
        }

        .whatsapp-button:active {
            transform: scale(0.95);
            transition: transform 0.1s ease;
        }

        /* WhatsApp Icon */
        .whatsapp-icon {
            width: 32px;
            height: 32px;
            fill: white;
            transition: all 0.3s ease;
        }

        .whatsapp-button:hover .whatsapp-icon {
            transform: scale(1.1);
        }

        /* Pulsing Ring Animation */
        .whatsapp-button::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #25d366;
            opacity: 0.7;
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
                opacity: 0.7;
            }
            70% {
                transform: scale(1.4);
                opacity: 0;
            }
            100% {
                transform: scale(1);
                opacity: 0;
            }
        }

        /* Notification Badge */
        .notification-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            width: 20px;
            height: 20px;
            background: #ff4444;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
            color: white;
            animation: badgePulse 2s ease-in-out infinite;
            border: 2px solid white;
        }

        @keyframes badgePulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.2);
            }
        }

        /* Tooltip */
        .whatsapp-tooltip {
            position: absolute;
            bottom: 70px;
            right: 0;
            background: #333333;
            color: white;
            padding: 12px 16px;
            border-radius: 12px;
            font-size: 14px;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            max-width: 250px;
        }

        .whatsapp-tooltip::after {
            content: '';
            position: absolute;
            top: 100%;
            right: 20px;
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-top: 8px solid #333333;
        }

        .whatsapp-widget:hover .whatsapp-tooltip {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        /* Chat Preview (Optional Enhancement) */
        .chat-preview {
            position: absolute;
            bottom: 80px;
            right: 0;
            width: 280px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px) scale(0.9);
            transition: all 0.4s ease;
            overflow: hidden;
        }

        .chat-preview.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0) scale(1);
        }

        .chat-header {
            background: #25d366;
            color: white;
            padding: 15px 20px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .chat-avatar {
            width: 40px;
            height: 40px;
            background: #128c7e;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 14px;
        }

        .chat-info h4 {
            font-size: 16px;
            margin-bottom: 2px;
        }

        .chat-info p {
            font-size: 12px;
            opacity: 0.9;
        }

        .chat-body {
            padding: 20px;
            color: #333;
        }

        .chat-message {
            background: #f0f0f0;
            padding: 12px 15px;
            border-radius: 18px;
            margin-bottom: 15px;
            font-size: 14px;
            line-height: 1.4;
        }

        .chat-actions {
            padding: 15px 20px;
            border-top: 1px solid #eee;
            display: flex;
            gap: 10px;
        }

        .chat-btn {
            flex: 1;
            padding: 10px;
            border: 1px solid #25d366;
            background: white;
            color: #25d366;
            border-radius: 8px;
            cursor: pointer;
            font-size: 13px;
            font-weight: bold;
            transition: all 0.2s ease;
        }

        .chat-btn:hover {
            background: #25d366;
            color: white;
        }

        .chat-btn.primary {
            background: #25d366;
            color: white;
        }

        .chat-btn.primary:hover {
            background: #128c7e;
        }

        /* Online Status Indicator */
        .online-indicator {
            position: absolute;
            bottom: 5px;
            right: 5px;
            width: 18px;
            height: 18px;
            background: #4caf50;
            border: 3px solid white;
            border-radius: 50%;
            animation: onlinePulse 2s ease-in-out infinite;
        }

        @keyframes onlinePulse {
            0%, 100% {
                box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
            }
            70% {
                box-shadow: 0 0 0 8px rgba(76, 175, 80, 0);
            }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .whatsapp-widget {
                bottom: 20px;
                right: 20px;
            }
            
            .whatsapp-button {
                width: 55px;
                height: 55px;
            }
            
            .whatsapp-icon {
                width: 28px;
                height: 28px;
            }
            
            .whatsapp-tooltip {
                right: -100px;
                max-width: 200px;
                font-size: 13px;
            }
            
            .chat-preview {
                width: 260px;
                right: -180px;
            }
            
            .demo-title {
                font-size: 2.2rem;
            }
        }

        @media (max-width: 480px) {
            .whatsapp-widget {
                bottom: 15px;
                right: 15px;
            }
            
            .whatsapp-button {
                width: 50px;
                height: 50px;
            }
            
            .whatsapp-icon {
                width: 26px;
                height: 26px;
            }
            
            .demo-title {
                font-size: 1.8rem;
            }
        }
    </style>
</head>
<body>
    <!-- Demo Page Content -->
    <div class="demo-content">
        <h1 class="demo-title">HighNet Support Widget</h1>
        <p class="demo-description">
            This floating WhatsApp widget provides instant customer support access on any HighNet page. 
            The widget features smooth animations, hover tooltips, and direct WhatsApp integration.
        </p>

        <div class="demo-sections">
            <div class="demo-card">
                <h3>Always Accessible</h3>
                <p>The floating widget remains visible on all pages, providing consistent access to customer support without interfering with page content.</p>
            </div>
            
            <div class="demo-card">
                <h3>WhatsApp Integration</h3>
                <p>Direct integration with WhatsApp Business number 0724690381, allowing customers to start conversations instantly.</p>
            </div>
            
            <div class="demo-card">
                <h3>Smooth Animations</h3>
                <p>Subtle bouncing, pulsing, and hover effects that draw attention without being distracting from the main page content.</p>
            </div>
        </div>
    </div>

    <!-- WhatsApp Support Widget -->
    <div class="whatsapp-widget">
        <div class="whatsapp-tooltip">
            Need help? Chat with us on WhatsApp
        </div>
        
        <!-- Optional Chat Preview (can be enabled for enhanced UX) -->
        <div class="chat-preview" id="chatPreview">
            <div class="chat-header">
                <div class="chat-avatar">HN</div>
                <div class="chat-info">
                    <h4>HighNet Support</h4>
                    <p>Typically replies instantly</p>
                </div>
            </div>
            <div class="chat-body">
                <div class="chat-message">
                    👋 Hi! How can we help you today?
                </div>
                <div class="chat-message">
                    We're here to assist with data packages, payments, or any other questions!
                </div>
            </div>
            <div class="chat-actions">
                <button class="chat-btn" onclick="closeChat()">Close</button>
                <button class="chat-btn primary" onclick="openWhatsApp()">Start Chat</button>
            </div>
        </div>
        
        <a href="#" class="whatsapp-button" onclick="openWhatsApp()" aria-label="Chat with us on WhatsApp">
            <div class="online-indicator"></div>
            <div class="notification-badge">!</div>
            <svg class="whatsapp-icon" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
            </svg>
        </a>
    </div>

    <script>
        // WhatsApp phone number
        const whatsappNumber = '254724690381'; // International format without +
        
        // Open WhatsApp chat function
        function openWhatsApp() {
            const message = encodeURIComponent('Hi! I need help with HighNet services.');
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
            
            // Open WhatsApp in new tab/window
            window.open(whatsappURL, '_blank');
            
            // Analytics tracking (optional)
            console.log('WhatsApp support chat opened');
            
            // Close chat preview if open
            const chatPreview = document.getElementById('chatPreview');
            if (chatPreview.classList.contains('active')) {
                chatPreview.classList.remove('active');
            }
        }

        // Show chat preview on hover (optional feature)
        let hoverTimeout;
        const widget = document.querySelector('.whatsapp-widget');
        const chatPreview = document.getElementById('chatPreview');
        
        widget.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
                // Uncomment to enable chat preview on hover
                // chatPreview.classList.add('active');
            }, 1000);
        });
        
        widget.addEventListener('mouseleave', function() {
            clearTimeout(hoverTimeout);
            setTimeout(() => {
                chatPreview.classList.remove('active');
            }, 300);
        });

        // Close chat preview
        function closeChat() {
            chatPreview.classList.remove('active');
        }

        // Prevent default link behavior
        document.querySelector('.whatsapp-button').addEventListener('click', function(e) {
            e.preventDefault();
            openWhatsApp();
        });

        // Add some interaction feedback
        const whatsappButton = document.querySelector('.whatsapp-button');
        
        whatsappButton.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        whatsappButton.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        whatsappButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });

        // Optional: Remove notification badge after first interaction
        let hasInteracted = false;
        whatsappButton.addEventListener('click', function() {
            if (!hasInteracted) {
                const badge = document.querySelector('.notification-badge');
                badge.style.animation = 'badgePulse 0.3s ease-out';
                setTimeout(() => {
                    badge.style.display = 'none';
                }, 300);
                hasInteracted = true;
            }
        });

        // Accessibility: Keyboard support
        whatsappButton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openWhatsApp();
            }
        });

        // Optional: Show widget after page load delay
        window.addEventListener('load', function() {
            setTimeout(() => {
                widget.style.animation = 'floatBounce 3s ease-in-out infinite, fadeIn 0.5s ease-out';
            }, 2000);
        });
    </script>
</body>
</html>
