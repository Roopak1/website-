function promptForPassword() {
    // Completely default, unstyled SweetAlert with broken text
    Swal.fire({
        title: '<span style="font-family:monospace;letter-spacing:-1px;">E̶R̸R̵O̶R̵:̵ ̶S̸Y̵S̵3̴M̴_̴3̴R̷R̵0̶R̵</span>',
        text: 'PaSsW0rD r3Qu1r3d!!',
        icon: 'error',
        input: 'password',
        // Remove all styling classes
        customClass: {
            container: '',
            popup: '',
            header: '',
            title: '',
            closeButton: '',
            icon: '',
            image: '',
            content: '',
            input: '',
            actions: '',
            confirmButton: '',
            cancelButton: '',
            footer: ''
        },
        showClass: {
            popup: ''
        },
        hideClass: {
            popup: ''
        },
        // Random broken positioning
        position: Math.random() > 0.5 ? 'top-start' : 'bottom-end',
        // Cluttered buttons
        confirmButtonText: '>>ENTER<<',
        cancelButtonText: 'ABORT-X',
        showCancelButton: true,
        // Disable default styling
        buttonsStyling: false
    }).then((result) => {
        if (result.dismiss) {
            // User canceled - show error
            Swal.fire({
                title: 'ACCESS_VIOLATION::0x8F43',
                text: 'Fatal error in module user32.dll',
                icon: 'error',
                buttonsStyling: false,
                timer: Math.floor(Math.random() * 3000) + 1000,
                timerProgressBar: true
            }).then(() => {
                document.body.innerHTML = '<div style="font-family: monospace; color: red; font-size:30px; position:fixed; top:50%; left:50%; transform:translate(-50%,-50%);">SYSTEM FAILURE: TERMINAL ERROR</div>';
            });
        } else if (result.value === '190309') {
            showGradientSelector();
        } else {
            // Even more broken error prompt
            Swal.fire({
                title: 'E̵̡̢̛̤̱̪̰̮͉̗̜̺͍͓̟̣͈̗̞̭̘͔̪̞͙̯̎̈́͗̃̾̆̅̐͐̏̒̽̇̕̕͝ŗ̶̤̮̠̲͎̣̗̫͓̙̙̤̣̠̲̲̩̠̮̯̇̈́̽̄̔̈́̽̅̅̕ͅͅṛ̵̢̮̰͔̞̺͎̫́̒͛̍̎͋̔̆͐̏͛̓̃͋͒̂́̊̈͆̽ơ̴̙̺̮͕͕͙̹̘̪̫̙͎̂͑̆̉͂̆̿̊̇̀̇̀̀̍͑̿͐͐̈̉̚̚̕͝ͅr̶̨̨̨̡̬̲̼͈̦̥͕̬̘̲̮̱̜̮͚̙͖͍͆̐̍̾̓̑̿̄̏̒̂́̍̒ͅ',
                text: 'Invalid credentials - System integrity compromised, activating countermeasures',
                icon: 'warning',
                buttonsStyling: false,
                timer: Math.floor(Math.random() * 1000) + 500
            }).then(() => {
                // Add visual glitch before reprompting
                document.body.style.filter = 'invert(1) hue-rotate(180deg)';
                setTimeout(() => {
                    document.body.style.filter = '';
                    promptForPassword();
                }, 200);
            });
        }
    });
}

// New function for selecting background gradient
function showGradientSelector() {
    document.body.classList.add("disable-text-glow");

    const gradients = {
        lightBlue: 'linear-gradient(45deg, red, blue)',
        darkBlue: 'repeating-linear-gradient(-45deg, #0a0f3a, #020b26 10px, black 10px, black 20px)',
        black: 'radial-gradient(ellipse at center, black 0%, red 100%)'
    };

    const htmlContent = `
        <div class="gradient-options" style="transform: skew(-5deg); filter: blur(0.5px);">
            <div class="gradient-option" data-gradient="lightBlue" 
                 style="background: ${gradients.lightBlue}; height: 40px; width: 105%; margin: 10px; transform: rotate(-2deg); cursor: not-allowed; color: yellow; font-family: monospace; font-size: 18px;">
                SYSTEM COLOR A-1
            </div>
            <div class="gradient-option" data-gradient="darkBlue" 
                 style="background: ${gradients.darkBlue}; height: 70px; width: 95%; margin: 20px -5px; transform: rotate(3deg); cursor: not-allowed; color: lime; font-family: 'Comic Sans MS'; text-shadow: 2px 2px red;">
                SYSTEM COLOR B-2
            </div>
            <div class="gradient-option" data-gradient="black" 
                 style="background: ${gradients.black}; height: 50px; width: 110%; margin: -5px; transform: rotate(-1deg); cursor: not-allowed; color: white; font-family: Impact; letter-spacing: 3px;">
                EMERGENCY MODE
            </div>
        </div>
    `;
    
    Swal.fire({
        title: 'DISPLAY CONFIGURATION',
        html: htmlContent,
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: 'COMMIT CHANGES',
        cancelButtonText: 'ABORT',
        // Make buttons overlap
        customClass: {
            confirmButton: 'broken-button-confirm',
            cancelButton: 'broken-button-cancel',
            container: 'broken-container'
        },
        didOpen: () => {
            // Add broken styling
            const style = document.createElement('style');
            style.textContent = `
                .broken-button-confirm {
                    background: red !important;
                    position: absolute !important;
                    right: 30px !important;
                    transform: rotate(3deg) !important;
                    font-family: monospace !important;
                    z-index: 2 !important;
                }
                .broken-button-cancel {
                    background: black !important;
                    position: absolute !important;
                    right: 50px !important;
                    color: yellow !important;
                    transform: rotate(-2deg) !important;
                    font-family: 'Comic Sans MS' !important;
                    z-index: 1 !important;
                }
                .broken-container {
                    filter: contrast(1.2) hue-rotate(5deg) !important;
                }
                .gradient-option {
                    border: 3px dashed red !important;
                    filter: contrast(1.5) !important;
                }
                .gradient-option:hover {
                    animation: glitch 0.3s infinite !important;
                }
                @keyframes glitch {
                    0% { transform: translate(2px, 0) skew(3deg); }
                    20% { transform: translate(-2px, 0) skew(-3deg); }
                    40% { transform: translate(0, 0) skew(0deg); }
                    60% { transform: translate(2px, 0) skew(3deg); }
                    80% { transform: translate(-2px, 0) skew(-3deg); }
                    100% { transform: translate(0, 0) skew(0deg); }
                }
            `;
            document.head.appendChild(style);
            
            // Add broken event listeners
            const options = document.querySelectorAll('.gradient-option');
            options.forEach(option => {
                option.addEventListener('mouseenter', () => {
                    const gradientType = option.getAttribute('data-gradient');
                    document.body.style.background = gradients[gradientType];
                    // Add random flickers
                    if(Math.random() > 0.7) {
                        document.body.style.background = 'black';
                        setTimeout(() => {
                            document.body.style.background = gradients[gradientType];
                        }, 100);
                    }
                });
            });
        }
    }).then(() => {
        document.body.classList.remove("disable-text-glow");
        triggerMusicPrompt();
    });
}

// Add this function to create animation controls
function createAnimationControls(timeline) {
    // Create control container
    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'animation-controls';
    
    // Create Music control button (now first for top placement)
    const musicButton = document.createElement('button');
    musicButton.className = 'control-btn music-btn';
    musicButton.textContent = 'Play Music';
    
    // Create a row container for the other buttons
    const bottomRowContainer = document.createElement('div');
    bottomRowContainer.className = 'bottom-row-controls';
    
    // Create Back button
    const backButton = document.createElement('button');
    backButton.className = 'control-btn';
    backButton.textContent = 'Back';
    
    // Create Pause/Play button
    const pausePlayButton = document.createElement('button');
    pausePlayButton.className = 'control-btn';
    pausePlayButton.textContent = 'Pause';
    
    // Add bottom row buttons to their container
    bottomRowContainer.appendChild(backButton);
    bottomRowContainer.appendChild(pausePlayButton);
    
    // Add all elements to main container (music on top, then row of other buttons)
    controlsContainer.appendChild(musicButton);
    controlsContainer.appendChild(bottomRowContainer);
    
    // Add container to body
    document.body.appendChild(controlsContainer);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .animation-controls {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
        }
        
        .bottom-row-controls {
            display: flex;
            gap: 10px;
        }
        
        .control-btn {
            background-color: white;
            color: black;
            border: none;
            border-radius: 5px;
            padding: 8px 15px;
            font-size: 14px;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: all 0.2s ease;
        }
        
        .control-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        
        .control-btn:active {
            transform: translateY(0);
            box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        
        .music-btn {
            background-color: #ffcce0;
            width: 100%;
        }
    `;
    document.head.appendChild(style);
    
    // Add event listeners
    backButton.addEventListener('click', () => {
        // Go back 5 seconds in the timeline
        const currentTime = timeline.time();
        const newTime = Math.max(0, currentTime - 5);
        timeline.seek(newTime);
    });
    
    pausePlayButton.addEventListener('click', () => {
        if (timeline.paused()) {
            timeline.resume();
            pausePlayButton.textContent = 'Pause';
        } else {
            timeline.pause();
            pausePlayButton.textContent = 'Play';
        }
    });
    
    // Add music control functionality
    const audioElement = document.querySelector('.song');
    
    // Initial button state should reflect audio's initial state
    if (audioElement) {
        musicButton.textContent = audioElement.paused ? 'Play Music' : 'Pause Music';
        
        musicButton.addEventListener('click', () => {
            if (audioElement.paused) {
                audioElement.play();
                musicButton.textContent = 'Pause Music';
            } else {
                audioElement.pause();
                musicButton.textContent = 'Play Music';
            }
        });
    } else {
        // If audio element doesn't exist or isn't available yet
        musicButton.style.display = 'none';
    }
    
    return controlsContainer;
}

// Changed code: wrap existing music prompt in a function
function triggerMusicPrompt() {
    Swal.fire({
        title: 'Do you want to play music in the background?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        const audioElement = document.querySelector('.song');
        
        if (result.isConfirmed && audioElement) {
            audioElement.play();
            // Find and update the music button if it exists
            const musicBtn = document.querySelector('.music-btn');
            if (musicBtn) {
                musicBtn.textContent = 'Pause Music';
            }
        }
        
        animationTimeline();
    });
}

// Now run the password check first on load
window.addEventListener('load', promptForPassword);

// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    // Replace full stops with <br/> and split into segments
    let replacedText = textBoxChars.innerHTML.replace(/\.\s*/g, '.<br/>');
    let segments = replacedText.split(/<br\s*\/?>/gi);

    // Now wrap each segment in a container with class "line" and each character in its own span.
    segments = segments.map(segment => {
        // Trim to remove extra whitespace and split into characters
        const letterSpans = segment.trim().split("").map(letter => `<span>${letter}</span>`).join("");
        return `<div class="line">${letterSpans}</div>`;
    });

    // Replace the innerHTML with the new content (do not include extra <br/> tags since each line is its own block)
    textBoxChars.innerHTML = segments.join('');

    const hbd = document.getElementsByClassName("wish-hbd")[0];

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // Right before creating the timeline, disable replay area interactions:
    gsap.set(".ten", { pointerEvents: "none", opacity: 0 });

    // Register plugins if needed
    gsap.registerPlugin(MotionPathPlugin);

    // Create the timeline - BROKEN VERSION
    const tl = gsap.timeline();

    // Add animation controls after timeline is created
    createAnimationControls(tl);

    // Make animations inconsistent and glitchy
    tl.to(".container", {
        visibility: "visible",
        duration: 0.6,
        onStart: function() {
            // Random screen flicker
            document.body.style.backgroundColor = "#111";
            setTimeout(() => { document.body.style.backgroundColor = "black"; }, 100);
        }
    })
    .from(".zero", {
        opacity: 0,
        y: 10,
        duration: 0.7,
        // Broken callback
        onComplete: function() {
            // Random chance to skip animation
            if(Math.random() > 0.7) {
                tl.seek("+2");
            }
        }
    })
    .to(".zero", {
        opacity: 0,
        y: 10,
        duration: 0.7,
        delay: Math.random() * 2 + 5 // Inconsistent timing
    })
    .from(".zero-1", {
        opacity: 0,
        y: 10,
        duration: 0.7,
        onStart: function() {
            // Occasionally display error message
            if(Math.random() > 0.5) {
                console.error("SEQUENCE_FAILURE: 0x8F4A");
            }
        }
    })
    .to(".zero-1", {
        opacity: 0,
        y: 10,
        duration: 0.7,
        delay: Math.random() * 4 + 5 // Very inconsistent timing
    })
    .from(".one", {
        opacity: 0,
        y: 10, 
        duration: 0.7
    })
    .from(".two", {
        opacity: 0,
        y: 10,
        duration: 0.4
    })
    .to(".one", {
        opacity: 0,
        y: 10,
        duration: 0.7,
        delay: 3.5
    })
    .to(".two", {
        opacity: 0,
        y: 10,
        duration: 0.7,
        delay: -1
    })

    // Create emoji rain
    createEmojiRain();
}

/**
 * Enhanced Emoji Rain with combined features
 * @param {Object} options - Animation options
 * @param {number} options.minSize - Minimum emoji size in pixels (default: 15)
 * @param {number} options.maxSize - Maximum emoji size in pixels (default: 50)
 * @param {number} options.baseSpeed - Base falling speed in seconds (default: 5)
 * @param {number} options.speedFactor - Speed multiplier (default: 1.5)
 * @param {number} options.frequency - Milliseconds between emoji creation (default: 300)
 * @param {boolean} options.behindContent - Position emojis behind content (default: true)
 */
function createEmojiRain(options = {}) {
    // MAXIMUM CHAOS settings
    const settings = {
        minSize: 3,          // Tiny emojis
        maxSize: 200,        // Gigantic emojis
        minTextSize: 5,      // Tiny text
        maxTextSize: 150,    // Gigantic text
        baseSpeed: Math.random() * 4 + 0.5,  // Unpredictable speed
        speedFactor: 3,      // Even faster
        frequency: 20,       // Create EXCESSIVE emojis
        behindContent: false, // On top of everything
        ...options
    };
    
    // More chaotic error messages
    const emojis = [
      'ERROR', '404', 'NULL', '⛔', 'GLITCH', '🚫', 'BROKEN', 'SYSTEM FAIL', '⚠️', '❌',
      'BUG', '🛑', 'MALFUNCTION', 'CRITICAL', 'FAIL', '🕷️', 'CORRUPTED', '🔥', 'DEAD LINK', '💀', 
      'SYNTAX', '❗', 'UNKNOWN', '🌀', 'CONNECTION LOST', '⚡', 'GLITCHY', '❓', '404 NOT FOUND', 
      'REBOOT', '🕶️', 'STATIC', 'DISCONNECTED', '💢', 'CRASHED', '☠️', '🩸', 'UNDEFINED', 
      '💣', 'DATA BREACH', 'HACKED', 'FATAL ERROR', '💥', '⏳', 'SYSTEM OVERLOAD', '💻', 'BINARY', 
      '010101', 'RESTRICTED', 'ACCESS DENIED', 'EXCEPTION', '🚨', 'OVERHEAT', '🛠️', 'GHOST FILE', 
      'MEMORY LEAK', 'STACK OVERFLOW', '💾', 'GLITCH MODE', 'UNKNOWN SOURCE', '🖤', 'OUT OF MEMORY',
      '666', '0xDEAD', 'KERNEL PANIC', '0xFAIL', 'SEGFAULT', 'DUMP CORE', 'BLUE SCREEN', 'VIRUS DETECTED'
    ];

    let emojiContainer = document.querySelector('.emoji-rain');
    if (!emojiContainer) {
        emojiContainer = document.createElement('div');
        emojiContainer.className = 'emoji-rain';
        document.body.appendChild(emojiContainer);

        // Even more chaotic styling
        const style = document.createElement('style');
        style.innerHTML = `
            .emoji-rain {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                pointer-events: all; /* Block ALL user interaction */
                z-index: 9999; /* Always on top */
                overflow: visible;
                mix-blend-mode: difference; /* Extreme visual effect */
            }
            .emoji-rain span {
                position: absolute;
                user-select: none;
                mix-blend-mode: exclusion; /* Extremely weird visual effect */
                filter: contrast(200%) blur(0.7px);
                text-shadow: 0 0 5px #f00, 0 0 10px #0ff;
            }
            .emoji-rain .text-emoji {
                color: #f00;
                font-weight: 900;
                text-shadow: 0 0 5px black, 0 0 10px white, 0 0 15px red;
                font-family: monospace;
                letter-spacing: -2px;
            }
            .emoji-rain span:nth-child(odd) {
                filter: invert(1) hue-rotate(90deg);
            }
            .emoji-rain span:nth-child(3n) {
                filter: saturate(200%) brightness(150%);
            }
            body:hover .emoji-rain span {
                animation: spin 1s linear infinite;
            }
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    // Create FAR more emojis
    const createEmoji = () => {
        // Create 3-8 emojis at once for maximum chaos
        const count = Math.floor(Math.random() * 6) + 3;
        
        for (let i = 0; i < count; i++) {
            const item = emojis[Math.floor(Math.random() * emojis.length)];
            const element = document.createElement('span');

            // Extreme random sizing
            let size;
            if (/[a-zA-Z]/.test(item)) {
                element.classList.add('text-emoji');
                size = Math.random() * (settings.maxTextSize - settings.minTextSize) + settings.minTextSize;
            } else {
                size = Math.random() * (settings.maxSize - settings.minSize) + settings.minSize;
            }

            // Apply extreme rotation and scale effects
            element.style.fontSize = `${size}px`;
            element.style.transform = `rotate(${Math.random() * 720 - 360}deg) scale(${Math.random() * 1 + 0.2})`;
            element.textContent = item;
            
            // Unpredictable opacity
            element.style.opacity = Math.random() * 0.9 + 0.1;
            
            emojiContainer.appendChild(element);

            // Completely random starting positions - even off-screen
            const startX = Math.random() * (window.innerWidth + 200) - 100;
            const startY = Math.random() * (window.innerHeight + 200) - 100;
            const rotation = Math.random() * 720 - 360; // -360 to +360 degrees
            
            // Completely random movement patterns
            const pattern = Math.floor(Math.random() * 5);
            
            switch(pattern) {
                case 0: // Extreme zigzag
                    const tl = gsap.timeline();
                    tl.fromTo(
                        element,
                        { x: startX, y: -50, rotation: rotation },
                        { y: "+=150", x: "-=100", duration: 0.3, ease: "power1.in" }
                    ).to(element, { y: "+=150", x: "+=200", duration: 0.4, ease: "power1.out" })
                    .to(element, { y: window.innerHeight + 200, x: "-=150", duration: 0.7, ease: "power2.in" });
                    break;
                    
                case 1: // Wild spiral
                    gsap.to(element, {
                        duration: settings.baseSpeed * Math.random() * 2,
                        motionPath: {
                            path: [
                                {x: startX, y: startY},
                                {x: startX + 200, y: startY + 100},
                                {x: startX - 100, y: startY + 200},
                                {x: startX + 300, y: startY + 300},
                                {x: startX, y: window.innerHeight + 200}
                            ],
                            autoRotate: true
                        },
                        ease: "none",
                        opacity: 0
                    });
                    break;
                    
                case 2: // Chaotic bounce
                    gsap.to(element, {
                        x: startX + (Math.random() > 0.5 ? 400 : -400), 
                        y: window.innerHeight + 200,
                        rotation: rotation + Math.random() * 1440 - 720, // -720 to +720
                        duration: settings.baseSpeed * Math.random() * 2,
                        ease: "bounce.inOut",
                        opacity: Math.random() > 0.5 ? 0 : 1
                    });
                    break;
                    
                case 3: // Static position with flicker
                    gsap.to(element, {
                        duration: settings.baseSpeed * 3,
                        opacity: 0,
                        onUpdate: function() {
                            // Extreme flickering
                            if (Math.random() > 0.7) {
                                element.style.opacity = Math.random();
                                element.style.transform = `scale(${Math.random() * 2}) rotate(${Math.random() * 90}deg)`;
                                element.style.filter = Math.random() > 0.5 ? 'invert(1)' : '';
                            }
                        }
                    });
                    break;
                    
                default: // Extreme random flicker and fall
                    gsap.fromTo(
                        element,
                        { x: startX, y: startY, rotation: rotation, opacity: 1 },
                        { 
                            y: window.innerHeight + 200,
                            x: startX + (Math.random() * 500 - 250),
                            rotation: rotation + Math.random() * 360,
                            opacity: Math.random(), // Random final opacity
                            duration: settings.baseSpeed * (Math.random() * 1 + 0.2),
                            ease: "power1.in",
                            onUpdate: function() {
                                // Extreme random flickering
                                if (Math.random() > 0.8) {
                                    element.style.opacity = Math.random();
                                    element.style.transform = `scale(${Math.random() * 2}) rotate(${Math.random() * 90}deg)`;
                                    element.style.color = Math.random() > 0.5 ? 'red' : 'lime';
                                }
                            }
                        }
                    );
            }
            
            // Random chance to trigger a screen flicker
            if (Math.random() > 0.95) {
                document.body.style.filter = 'invert(1)';
                setTimeout(() => {
                    document.body.style.filter = '';
                }, 50 + Math.random() * 100);
            }
        }
        
        // Schedule next creation with highly variable timing
        setTimeout(createEmoji, Math.random() * settings.frequency + 10);
    };
    
    // Start the chaos
    createEmoji();

    return {
        stop: () => clearTimeout(createEmoji)
    };
}

// Simple start function
function startEmojiRain(options = {}) {
    return createEmojiRain(options);
}

// Simple stop function
function stopEmojiRain(controller) {
    if (controller && controller.stop) {
        controller.stop();
    }
}
