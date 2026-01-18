let line = document.querySelector(".line");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");
let count = 0;
let timer = 10;

let time = setInterval(function () {
    if (count <= 100) {
        line.style.width = count + "%";
        p.textContent = count + "%";
    }
    else{
        h2.textContent="Downloaded !!";
        clearInterval(time);
    }
    count++;
}, (timer * 1000) / 100);