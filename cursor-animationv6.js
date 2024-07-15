// ... (previous code remains the same)

// Drawing function
function draw(e) {
    if (isFirstMove) {
        lastX = e.clientX;
        lastY = e.clientY;
        isFirstMove = false;
        return;
    }

    const newStroke = {
        startX: lastX,
        startY: lastY,
        endX: e.clientX,
        endY: e.clientY,
        opacity: 0.1,
        age: 0  // Add an age property to track how long the stroke has existed
    };

    strokes.push(newStroke);

    lastX = e.clientX;
    lastY = e.clientY;

    // Increase the maximum number of strokes
    if (strokes.length > 500) {  // Increased from 100 to 500
        strokes.shift();
    }
}

// Animation function
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw paper texture
    ctx.drawImage(paperTexture, 0, 0);

    strokes.forEach((stroke, index) => {
        ctx.beginPath();
        ctx.moveTo(stroke.startX, stroke.startY);
        ctx.lineTo(stroke.endX, stroke.endY);
        ctx.strokeStyle = `rgba(0, 0, 0, ${stroke.opacity})`;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.stroke();

        stroke.age += 1;  // Increment the age of the stroke

        // Start fading out after a certain age
        if (stroke.age > 300) {  // Wait 5 seconds (60 frames per second * 5)
            stroke.opacity -= 0.0005;  // Reduced from 0.002 to 0.0005
        }

        if (stroke.opacity <= 0) {
            strokes.splice(index, 1);
        }
    });

    requestAnimationFrame(animate);
}

// ... (rest of the code remains the same)