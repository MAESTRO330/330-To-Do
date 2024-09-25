function updateTime() {
    const date = new Date();
    const options = { month: 'long', day: 'numeric' };
    const day = date.toLocaleDateString(undefined, options);
    document.getElementById('date').innerHTML =
        `Сегодня, ${day}`;
}

setInterval(updateTime, 60000);
updateTime();