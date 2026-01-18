let input = document.querySelectorAll("input");
let frm = document.querySelector("form");
let textarea = document.querySelector("textarea");


frm.addEventListener("submit", function (e) {
    e.preventDefault();

    let oldres = document.querySelector(".res_shown");
    if (oldres) {
        oldres.remove();
    }

    let resume = document.createElement("div");
    resume.classList.add("res_shown");

    let image = document.createElement("div");
    image.classList.add("image");

    let img1 = document.createElement("img")
    img1.setAttribute("src", input[0].value);

    let name = document.createElement("div");
    name.classList.add("h2");
    name.textContent = input[1].value;

    let address = document.createElement("div");
    address.classList.add("address");
    address.textContent = input[2].value;

    let email = document.createElement("div");
    email.classList.add("email");
    email.textContent = input[3].value;

    let phone = document.createElement("div");
    phone.classList.add("phone");
    phone.textContent = input[4].value;

    let occupation = document.createElement("div");
    occupation.classList.add("occupation");
    occupation.textContent = input[5].value;

    let about = document.createElement("div");
    about.classList.add("about-us");
    about.textContent = textarea.value;

    image.appendChild(img1);

    resume.appendChild(image);
    resume.appendChild(name);
    resume.appendChild(address);
    resume.appendChild(email);
    resume.appendChild(phone);
    resume.appendChild(occupation);
    resume.appendChild(about);

    document.body.appendChild(resume);

});