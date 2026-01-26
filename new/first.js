let tggle = document.querySelector(".tggle");

// function DarkorLight(){
// if(window.matchMedia("(prefers-color-scheme: dark)").matches){
//     document.body.classList.add("light");
// }
// else{
//     document.body.classList.add("dark");
// };
// }

// DarkorLight();

tggle.addEventListener("click", function(){
if(document.body.classList.contains("dark")){
    document.body.classList.add("light");
    document.body.classList.remove("dark");
}
else{
    document.body.classList.add("dark");
    document.body.classList.remove("light");
}
});