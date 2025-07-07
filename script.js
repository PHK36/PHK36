
function loopTimer(id, maxTime) {
    let timer = maxTime;
    const el = document.getElementById(id);
    setInterval(() => {
        el.textContent = timer;
        timer--;
        if (timer < 0) timer = maxTime;
    }, 1000);
}
window.onload = () => {
    if (document.getElementById("timer")) loopTimer("timer", 10);
    if (document.getElementById("wingo-timer")) loopTimer("wingo-timer", 15);
};
