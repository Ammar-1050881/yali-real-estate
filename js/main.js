function startAuthAnimation() {
    const walker = document.getElementById('walker');
    const authContent = document.getElementById('auth-content');

    // 1. Start Walking
    walker.classList.add('walking');

    // 2. Stop in middle (after 3 seconds)
    setTimeout(() => {
        walker.classList.remove('walking');
        walker.style.left = "50%";
        walker.style.transform = "translateX(-50%)";
        
        // 3. The "Drop & Explode" Sequence
        performExplosion();
    }, 3000);
}

function performExplosion() {
    const stage = document.getElementById('explosion-box');
    
    // Create particles for the explosion
    for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = '50%';
        p.style.top = '70%';
        
        const destinationX = (Math.random() - 0.5) * 500;
        const destinationY = (Math.random() - 0.5) * 500;

        p.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${destinationX}px, ${destinationY}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });

        stage.appendChild(p);
    }

    // 4. Reveal the Form
    setTimeout(() => {
        document.getElementById('walker').style.opacity = '0';
        document.getElementById('auth-content').classList.remove('hidden-content');
        document.getElementById('auth-content').classList.add('reveal-auth');
    }, 500);
}

// Start when page loads
window.onload = startAuthAnimation;