import React, { useEffect, useRef } from "react";

const StarryBackground = () => {
    const canvasRef = useRef(null);
    let animationFrameId;
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Function to resize canvas dynamically
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initializeDrops(); // Reset drops on resize
        };

        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+~`|}{\:;?><,./-=";
        const charArray = chars.split("");
        
        const fontSize = 16;  // Increased font size for better visibility
        ctx.font = `${fontSize}px monospace`;
        let columns, drops;

        // Initialize drops array
        const initializeDrops = () => {
            columns = Math.floor(canvas.width / fontSize);
            drops = Array(columns).fill(1); // Initialize all drops at position 1
        };

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Slightly stronger fade effect
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#00FF00"; // Bright neon green color
            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0; // Reset drop after reaching bottom
                }
                drops[i]++;
            }
        };

        const animate = () => {
            draw();
            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        animate();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0"
            style={{
                background: "black",
                zIndex: -1,
            }}
        />
    );
};

export default StarryBackground;
