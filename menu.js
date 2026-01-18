let menu = document.querySelector(".menu");
let parent = document.querySelector(".parent");

menu.addEventListener("click", function (e) {
   if (parent.innerHTML !== "") {
        parent.innerHTML = "";
        return;        
    }


    let slider = document.createElement("div");
    slider.classList.add("slider");

    let ul = document.createElement("div");
    ul.classList.add("li2");

    let h1 = document.createElement("h1");
    h1.textContent = "MENU";
    h1.classList.add("h1");

    let li1 = document.createElement("li");
    li1.textContent = "Dashboard";
    li1.classList.add("li");

    let li2 = document.createElement("li");
    li2.textContent = "Profile";
    li2.classList.add("li");

    let li3 = document.createElement("li");
    li3.textContent = "Trending";
    li3.classList.add("li");

    let li4 = document.createElement("li");
    li4.textContent = "Messages";
    li4.classList.add("li");

    let li5 = document.createElement("li");
    li5.textContent = "File Manager";
    li5.classList.add("li");

    let li6 = document.createElement("li");
    li6.textContent = "Portfolio";
    li6.classList.add("li");

    let li7 = document.createElement("li");
    li7.textContent = "Saved";
    li7.classList.add("li");

    let li8 = document.createElement("li");
    li8.textContent = "Settings";
    li8.classList.add("li");

    slider.appendChild(ul);
    slider.appendChild(h1);
    slider.appendChild(li1);
    slider.appendChild(li2);
    slider.appendChild(li3);
    slider.appendChild(li4);
    slider.appendChild(li5);
    slider.appendChild(li6);
    slider.appendChild(li7);
    slider.appendChild(li8);
    parent.appendChild(slider);

});