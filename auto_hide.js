localStorage.setItem("fruits", JSON.stringify((["Apple", "Mango","Banana", "Dragon Fruit", "Pomegranate"])));
let ans = JSON.parse(localStorage.getItem("fruits"));
console.log(ans);