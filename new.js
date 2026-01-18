let frm = document.querySelector("form");
let ml = document.querySelector("#mla");
let pass = document.querySelector("#psw");

frm.addEventListener("submit", function(des){
        des.preventDefault();

        let res = ml.value;
        const Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
        if(Regex.test(ml.value)){
                document.querySelector(".mail").style.display="none";
        }
        else{
                document.querySelector(".mail").style.display="initial";
        }

        const Num = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/;
        if(Num.test(pass.value)){
                document.querySelector(".sec").style.display="none";
        }
        else{
                document.querySelector(".sec").style.display="initial";
        }
});




// let ul = document.querySelector("ul");
// let span = document.querySelector("span");

// ul.addEventListener("click", function(dets){
//         ul.target.classList.toggle("hoo");
// },true); 

// let input = document.querySelector("input");
// let span = document.querySelector("span");
// let max=20;

// input.addEventListener("input", function(dets){

//     let left = dets.target.value.length;
//     let fnl = max-left;
//     console.log(fnl);

//     if(fnl<0){
//         span.style.color="red"
//         alert("please write in fixed length");
//     }
//     else{
//         span.style.color="white";
//     }
//     span.textContent=fnl;

// });


// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function(e){
//    h1.textContent=e.key;
// })


// let box = document.querySelector(".box");

// box.addEventListener("mouseover", function(){
// box.style.backgroundColor="grey";
// });

// box.addEventListener("mouseout", function(){
//     box.style.backgroundColor="brown";
// });

// let h2 = document.querySelector("h1");

// h2.addEventListener("mouseover", function(){
//     h2.style.color="white";
//     h2.style.fontSize="3em";
   
// });

// h2.addEventListener("mouseout", function(){
//     h2.style.color="black";
//     h2.style.fontSize="1.5em";
// });