// Making the background kinda animated
// by zooming into the background and moving as user moves the cursor.
// This gives kinda depth effect :p

const bg = document.getElementById('bg');

// let's create some changing background too :D

const bgImg = [
    'background/bg1.png',
    'background/bg2.png',
    'background/bg3.png',
    'background/bg4.png',
    'background/bg5.png'
]

let cIdx = 0;

function cyclicBackground() {
    cIdx = (cIdx + 1) % bgImg.length;
    bg.style.backgroundImage = `url(${bgImg[cIdx]})`;
}

setInterval(cyclicBackground, 32000);

document.addEventListener('mousemove', (e) => {
    const xPercent = e.clientX / window.innerWidth;
    const yPercent = e.clientY / window.innerHeight;

    const intensity = 60;
    const xMove = (xPercent - 0.5) * intensity; // 0.5 for offset
    const yMove = (yPercent - 0.5) * intensity;

    bg.style.transform = `scale(1.1) translate(${-xMove}px, ${-yMove}px)`;
});