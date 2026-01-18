
let frm = document.querySelector("form");
let input = document.querySelectorAll("input");
let main = document.querySelector(".main");

frm.addEventListener("submit", function(e) {
    e.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");
    

    let prf = document.createElement("div");
    prf.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src",input[0].value);
        

    let name = document.createElement("div");
    name.classList.add("name");
    name.textContent = input[1].value;

    let occupat = document.createElement("div");
    occupat.classList.add("occupation");
    occupat.textContent = input[2].value;

    let about = document.createElement("div");
    about.classList.add("about");
    about.textContent = input[3].value;


    prf.appendChild(img);
    card.appendChild(prf);
    
    card.appendChild(name);
    card.appendChild(occupat);
    card.appendChild(about);

    document.body.appendChild(card);
});
