let date = document.getElementById('date');
let times = [];
let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
let isMoved = false;
setInterval(() => setDate(), 1000);
setDate();

function setDate() {
    let d = new Date();
    let methods = [`${d.getHours()}`, `${d.getMinutes()}`, `${d.getSeconds()}`];
    for (let i = 0; i < methods.length; i++) {
        if (parseInt(methods[i]) < 10) {
            times[i] = `0${methods[i]}`;
        } else {
            times[i] = methods[i];
        }
    }
    date.innerHTML = `${times[0]}:${times[1]}:${times[2]}<br>
    ${days[d.getDay()]}, ${d.getDate()} ${month[d.getMonth()]}
    <br><span class="small-text">${d.getFullYear()}</span>`
}

const elem = document.querySelectorAll("#paralax");
document.addEventListener("mousemove", paralax);
function paralax(event) {
for (let i = 0; i < elem.length; i++) {
        let _mouseX = event.clientX;
        let _mouseY = event.clientY;
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let x = (_mouseX - _w) * elem[i].getAttribute("paralax");
        let y = (_mouseY - _h) * elem[i].getAttribute("paralax");
        elem[i].style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
}