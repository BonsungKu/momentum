const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    //날짜 시간 호출
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);
