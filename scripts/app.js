let body = document.querySelector("body");
let image = document.querySelector(".centered-image");
let date_container = document.querySelector(".date-container");
let date = document.getElementById('date');

let cleft = config.color_left;
let cright = config.color_right;
let _paralax_img = config.paralax_image;
let _paralax_date = config.paralax_date;
let font = config.font;
let lang = config.language;

body.style.backgroundImage = `linear-gradient(45deg, ${cleft}, ${cright})`;
image.setAttribute("paralax", _paralax_img);
date_container.setAttribute("paralax", _paralax_date);
date.style.fontFamily = font;

let times = [];
let month;
let days;

switch (lang) {
    case "ru":
        month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
        days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        break;
    case "en":
        month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        break;
}

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