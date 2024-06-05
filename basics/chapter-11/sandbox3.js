//Clock on browser

const clock = document.querySelector('.clock');

const tick = () =>
    {
        const now = Date();

        const h = now.getHours();
    }


setInterval(tick, 1000);