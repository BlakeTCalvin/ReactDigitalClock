function Time() {
    const currentTime = React.createElement('p', null, new Date().toLocaleTimeString());
    ReactDOM.render(currentTime, document.getElementById('clock'));
    setTimeout(Time, 1000);
}

Time();