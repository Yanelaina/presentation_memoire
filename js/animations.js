// =============================================
// ANIMATIONS.JS - Interactive Soil Water Animations
// For Richards-AquaCrop Presentation
// =============================================

// Global animation state
let animationState = {
    bucketRunning: false,
    dripRunning: false,
    moistureBulbRunning: false,
    moistureBulbPaused: false,
    moistureBulbTime: 0
};

// =============================================
// BUCKET MODEL ANIMATION
// =============================================
function animateBucketModel(ctx, width, height, time) {
    ctx.clearRect(0, 0, width, height);
    
    // Draw soil layers
    const layerHeight = height / 4;
    const waterLevels = [
        0.3 + 0.1 * Math.sin(time * 0.002),
        0.4 + 0.08 * Math.sin(time * 0.002 + 0.5),
        0.5 + 0.06 * Math.sin(time * 0.002 + 1),
        0.6 + 0.04 * Math.sin(time * 0.002 + 1.5)
    ];
    
    for (let i = 0; i < 4; i++) {
        const y = i * layerHeight;
        
        // Soil background
        ctx.fillStyle = '#d4a574';
        ctx.fillRect(0, y, width, layerHeight);
        
        // Water content (blue overlay)
        const alpha = waterLevels[i];
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.fillRect(0, y, width, layerHeight);
        
        // Layer border
        ctx.strokeStyle = '#8b6f47';
        ctx.lineWidth = 2;
        ctx.strokeRect(0, y, width, layerHeight);
        
        // Layer label
        ctx.fillStyle = '#000';
        ctx.font = '14px Arial';
        ctx.fillText(`Couche ${i + 1}`, 10, y + 20);
    }
    
    // Draw uniform irrigation arrows
    const arrowY = -20;
    for (let x = width / 6; x < width; x += width / 3) {
        drawArrow(ctx, x, arrowY, x, 10, '#3b82f6', 3);
    }
    
    // Draw roots (simple lines)
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 2;
    for (let x = width / 4; x < width; x += width / 4) {
        for (let i = 0; i < 4; i++) {
            const y = i * layerHeight + layerHeight / 2;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + layerHeight * 0.4);
            ctx.stroke();
        }
    }
}

// =============================================
// DRIP IRRIGATION ANIMATION (MOISTURE BULB)
// =============================================
function animateDripModel(ctx, width, height, time) {
    ctx.clearRect(0, 0, width, height);
    
    // Draw dry soil background
    ctx.fillStyle = '#d4a574';
    ctx.fillRect(0, 0, width, height);
    
    // Emitter position
    const emitterX = width / 2;
    const emitterY = 20;
    
    // Animate moisture bulb (expanding ellipse)
    const maxRadius = Math.min(width, height) * 0.4;
    const radius = maxRadius * (0.5 + 0.3 * Math.sin(time * 0.001));
    
    // Draw moisture gradient (multiple ellipses)
    const gradientLevels = 5;
    for (let i = gradientLevels; i > 0; i--) {
        const r = radius * (i / gradientLevels);
        const alpha = 0.15 + (0.3 * (gradientLevels - i) / gradientLevels);
        
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.beginPath();
        ctx.ellipse(emitterX, emitterY + r * 0.8, r, r * 1.2, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    // Draw emitter (dripper)
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(emitterX, emitterY, 8, 0, 2 * Math.PI);
    ctx.fill();
    
    // Draw water droplet (animated)
    const dropY = emitterY + 15 + 10 * Math.sin(time * 0.005);
    ctx.fillStyle = '#3b82f6';
    ctx.beginPath();
    ctx.arc(emitterX, dropY, 4, 0, 2 * Math.PI);
    ctx.fill();
    
    // Draw roots concentrated near bulb
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 2;
    const rootAngles = [0, 45, 90, 135, 180, 225, 270, 315];
    rootAngles.forEach(angle => {
        const rad = angle * Math.PI / 180;
        const rootLength = radius * 0.7;
        const x = emitterX + Math.cos(rad) * rootLength;
        const y = emitterY + Math.sin(rad) * rootLength * 1.2 + radius * 0.8;
        
        ctx.beginPath();
        ctx.moveTo(emitterX, emitterY + radius * 0.8);
        ctx.lineTo(x, y);
        ctx.stroke();
    });
    
    // Draw iso-moisture contours
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
    ctx.lineWidth = 2;
    for (let i = 1; i <= 3; i++) {
        const r = radius * (i / 3);
        ctx.beginPath();
        ctx.ellipse(emitterX, emitterY + r * 0.8, r, r * 1.2, 0, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

// =============================================
// START SOIL ANIMATION (BOTH MODELS)
// =============================================
function startSoilAnimation() {
    const bucketCanvas = document.getElementById('bucket-animation');
    const dripCanvas = document.getElementById('drip-animation');
    
    if (!bucketCanvas || !dripCanvas) return;
    
    const bucketCtx = bucketCanvas.getContext('2d');
    const dripCtx = dripCanvas.getContext('2d');
    
    animationState.bucketRunning = true;
    animationState.dripRunning = true;
    
    let startTime = Date.now();
    
    function animate() {
        if (!animationState.bucketRunning && !animationState.dripRunning) return;
        
        const elapsed = Date.now() - startTime;
        
        if (animationState.bucketRunning) {
            animateBucketModel(bucketCtx, bucketCanvas.width, bucketCanvas.height, elapsed);
        }
        
        if (animationState.dripRunning) {
            animateDripModel(dripCtx, dripCanvas.width, dripCanvas.height, elapsed);
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// =============================================
// MOISTURE BULB DETAILED SIMULATION
// =============================================
function startMoistureBulbAnimation() {
    const canvas = document.getElementById('moisture-bulb-simulation');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    animationState.moistureBulbRunning = true;
    animationState.moistureBulbPaused = false;
    animationState.moistureBulbTime = 0;
    
    function animate() {
        if (!animationState.moistureBulbRunning) return;
        if (animationState.moistureBulbPaused) {
            requestAnimationFrame(animate);
            return;
        }
        
        ctx.clearRect(0, 0, width, height);
        
        // Draw soil background
        ctx.fillStyle = '#c4a574';
        ctx.fillRect(0, 0, width, height);
        
        // Emitter position
        const emitterX = width / 2;
        const emitterY = 50;
        
        // Time-dependent bulb expansion
        const t = animationState.moistureBulbTime;
        const maxTime = 24; // 24 hours
        const progress = Math.min(t / maxTime, 1);
        
        // Bulb dimensions (grow over time)
        const maxRadiusH = width * 0.35;
        const maxRadiusV = height * 0.6;
        const radiusH = maxRadiusH * Math.sqrt(progress);
        const radiusV = maxRadiusV * Math.sqrt(progress);
        
        // Draw moisture field with color gradient
        const numContours = 10;
        for (let i = numContours; i > 0; i--) {
            const fraction = i / numContours;
            const rH = radiusH * fraction;
            const rV = radiusV * fraction;
            
            // Color from blue (wet) to brown (dry)
            const moisture = 1 - fraction;
            const blue = Math.floor(59 + (212 - 59) * moisture);
            const green = Math.floor(130 + (165 - 130) * moisture);
            const red = Math.floor(246 + (196 - 246) * moisture);
            
            ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
            ctx.beginPath();
            ctx.ellipse(emitterX, emitterY + rV * 0.5, rH, rV, 0, 0, 2 * Math.PI);
            ctx.fill();
        }
        
        // Draw soil particles
        ctx.fillStyle = 'rgba(139, 111, 71, 0.3)';
        for (let i = 0; i < 100; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, 2 * Math.PI);
            ctx.fill();
        }
        
        // Draw emitter
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(emitterX, emitterY, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#c07a1a';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw water droplets
        if (t < maxTime * 0.5) { // Water only in first half
            for (let i = 0; i < 3; i++) {
                const dropY = emitterY + 20 + i * 15 + 5 * Math.sin(t * 0.5 + i);
                ctx.fillStyle = '#3b82f6';
                ctx.beginPath();
                ctx.arc(emitterX, dropY, 5, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
        
        // Draw moisture contour lines
        ctx.strokeStyle = 'rgba(30, 58, 138, 0.5)';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        for (let i = 1; i <= 3; i++) {
            const rH = radiusH * (i / 3);
            const rV = radiusV * (i / 3);
            ctx.beginPath();
            ctx.ellipse(emitterX, emitterY + rV * 0.5, rH, rV, 0, 0, 2 * Math.PI);
            ctx.stroke();
        }
        ctx.setLineDash([]);
        
        // Draw scale and labels
        ctx.fillStyle = '#000';
        ctx.font = 'bold 16px Arial';
        ctx.fillText(`Temps: ${t.toFixed(1)} h`, 20, 30);
        ctx.fillText(`Rayon: ${(radiusH / width * 100).toFixed(1)} cm`, 20, 55);
        
        // Legend
        ctx.font = '14px Arial';
        ctx.fillText('Humidité:', width - 150, 30);
        const legendGrad = ctx.createLinearGradient(width - 150, 40, width - 50, 40);
        legendGrad.addColorStop(0, '#c4a574');
        legendGrad.addColorStop(1, '#3b82f6');
        ctx.fillStyle = legendGrad;
        ctx.fillRect(width - 150, 40, 100, 20);
        ctx.strokeRect(width - 150, 40, 100, 20);
        
        // Update time display
        document.getElementById('sim-time').textContent = t.toFixed(1);
        
        // Increment time
        animationState.moistureBulbTime += 0.1;
        
        // Loop or stop at end
        if (animationState.moistureBulbTime > maxTime) {
            animationState.moistureBulbTime = maxTime;
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

function pauseMoistureBulbAnimation() {
    animationState.moistureBulbPaused = !animationState.moistureBulbPaused;
}

function resetMoistureBulbAnimation() {
    animationState.moistureBulbTime = 0;
    animationState.moistureBulbPaused = false;
}

// =============================================
// HELPER FUNCTION: DRAW ARROW
// =============================================
function drawArrow(ctx, fromX, fromY, toX, toY, color, width) {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = width;
    
    // Line
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
    
    // Arrow head
    const headLength = 10;
    const angle = Math.atan2(toY - fromY, toX - fromX);
    
    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(
        toX - headLength * Math.cos(angle - Math.PI / 6),
        toY - headLength * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
        toX - headLength * Math.cos(angle + Math.PI / 6),
        toY - headLength * Math.sin(angle + Math.PI / 6)
    );
    ctx.closePath();
    ctx.fill();
}

// =============================================
// BENIN MAP VISUALIZATION (D3.js)
// =============================================
function setupBeninMap() {
    const container = document.getElementById('benin-map');
    if (!container) return;
    
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;
    
    const svg = d3.select('#benin-map')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    
    // Simplified Benin outline
    const beninPath = "M150,50 L180,60 L190,100 L200,150 L195,200 L190,250 L180,300 L170,340 L150,360 L130,350 L120,320 L110,280 L100,220 L105,160 L115,100 L130,60 Z";
    
    svg.append('path')
        .attr('d', beninPath)
        .attr('fill', '#e0f2fe')
        .attr('stroke', '#3b82f6')
        .attr('stroke-width', 2);
    
    // Study communes
    const communes = [
        { name: 'Savè', x: 150, y: 180, samples: 89 },
        { name: 'Bembèrèkè', x: 160, y: 120, samples: 35 },
        { name: "N'Dali", x: 140, y: 150, samples: 12 },
        { name: 'Glazoué', x: 130, y: 200, samples: 8 }
    ];
    
    communes.forEach(commune => {
        const radius = 5 + Math.sqrt(commune.samples) * 2;
        
        svg.append('circle')
            .attr('cx', commune.x)
            .attr('cy', commune.y)
            .attr('r', radius)
            .attr('fill', '#f59e0b')
            .attr('stroke', '#c07a1a')
            .attr('stroke-width', 2)
            .attr('opacity', 0.8);
        
        svg.append('text')
            .attr('x', commune.x + radius + 5)
            .attr('y', commune.y + 5)
            .attr('font-size', '12px')
            .attr('fill', '#1e293b')
            .text(commune.name);
    });
}

// =============================================
// INITIALIZATION
// =============================================
function setupAnimations() {
    // Initialize Benin map
    setupBeninMap();
    
    // Set up animation triggers
    Reveal.on('slidechanged', event => {
        // Stop all animations when leaving slides
        animationState.bucketRunning = false;
        animationState.dripRunning = false;
        animationState.moistureBulbRunning = false;
    });
}

// Make functions globally accessible
window.startSoilAnimation = startSoilAnimation;
window.startMoistureBulbAnimation = startMoistureBulbAnimation;
window.pauseMoistureBulbAnimation = pauseMoistureBulbAnimation;
window.resetMoistureBulbAnimation = resetMoistureBulbAnimation;
window.setupAnimations = setupAnimations;
