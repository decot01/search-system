// поиск///////////////////////////////////////////////////////////////////////////////////
// Находим элементы формы
const form = document.querySelector(".searcher");
const input = form.querySelector("input");
const button = form.querySelector("button");

// Добавляем обработчик события на кнопку "Искать!"
button.addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем действие по умолчанию (отправку формы)

    // Вызываем функцию для поисковой строки браузера
    searchQuery(input.value);
});

// Функция для создания поисковой строки браузера
function searchQuery(query) {
    let searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);
    window.location.href = searchUrl;
}

// часы///////////////////////////////////////////////////////////////////////////////////
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)
//to do list////////////////////////////////////////////////////////////////////////////////
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
//calendar////////////////////////////////////////////////////////////////////////////////
const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];

date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();
//qr////////////////////////////////////////////////////////////////////////////////
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + qrText.value;
        imgBox.classList.add("show-img");

        const containerAnimation = anime({
            targets: '.container',
            height: '350px',
            easing: 'linear',
            duration: 300 
          });

        containerAnimation.restart();  
        

    }else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
    
};