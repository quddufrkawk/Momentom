const clock = document.querySelector("h2#clock");

function sayClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const nowDate = `${hours}:${minutes}:${seconds}`;
    clock.innerText=(nowDate);
}
sayClock();
setInterval(sayClock, 1000);
