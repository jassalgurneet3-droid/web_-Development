let button = document.querySelectorAll(".add-btn");
let cart = document.querySelector("#cart");

let price6 = document.createElement("div");
price6.classList.add("price3");
document.body.append(price6);

button.forEach(function (bt) {
      bt.addEventListener("click", function () {

            console.log(bt.name);

            price6.style.display = "block";

            let productName = bt.getAttribute("name");
            let productPrice = bt.getAttribute("price");
            let productImage = bt.getAttribute("image");

            let item = document.createElement("div");
            item.classList.add("item");

            let pic = document.createElement("div");

            let img = document.createElement("img");
            img.setAttribute("src", productImage);
            img.classList.add("pics");
            pic.appendChild(img);

            let rate = document.createElement("div");
            rate.classList.add("rate")
            rate.textContent = productPrice;

            let nm = document.createElement("div");
            nm.classList.add("nm");
            nm.textContent = productName;

            item.appendChild(pic);
            item.appendChild(nm);
            item.appendChild(rate);
            price6.appendChild(item);
      });
});
let tggle = document.querySelector(".tggle")
function DarkorLight() {
      if (windows.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
      }
      else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
      }
};

tggle.addEventListener("click", function () {
      if (document.body.classList.contains("dark")) {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
      }
      else {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
      }
});





let input = document.querySelector(".in");

input.addEventListener("input", function (e) {
      let a = e.target.value;

let grid = document.querySelectorAll(".grid");

      function show() {
            grid.forEach(function (val) {
                  console.log(a);
                  let name = val.innerText
                  let img = val.querySelector("img").src;

                  console.log(name);
                  console.log(img);

            });
            show();
      }
});





