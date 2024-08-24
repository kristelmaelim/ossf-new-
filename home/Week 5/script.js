document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');

    // Generate initial dots on page load
    generateDots(20);

    container.addEventListener('mousemove', function (e) {
        createDot(e.clientX, e.clientY);
    });

    function createDot(x, y) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = x + 'px';
        dot.style.top = y + 'px';
        container.appendChild(dot);

        setTimeout(() => {
            dot.remove();
        }, 1000);
    }

    function generateDots(numDots) {
        for (let i = 0; i < numDots; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;

            createDot(x, y);
        }
    }
});

/*<script defer src="script.js"></script>- (to be added on html)*/
/* CSS: 
.dot {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
}
*/