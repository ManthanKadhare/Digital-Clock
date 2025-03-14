const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const buttons = document.querySelectorAll('.theme-switcher button');
const customColorPicker = document.getElementById('customColorPicker');
const clock = document.querySelector('.clock');
let currentColor = '#00ffff';

function updateTime() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();

    timeElement.innerHTML = `${hours}:${minutes}:${seconds}`;
    dateElement.innerHTML = `${day}, ${month} ${date}, ${year}`;
}

function applyTheme(color) {
    currentColor = color;
    document.documentElement.style.setProperty('--glow-color', currentColor);
    clock.style.borderColor = currentColor;
    timeElement.style.color = currentColor;
    dateElement.style.color = currentColor;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        applyTheme(button.getAttribute('data-color'));
    });
});

customColorPicker.addEventListener('input', (event) => {
    applyTheme(event.target.value);
});

applyTheme(currentColor);
setInterval(updateTime, 1000);
updateTime();
