let btn = document.querySelector("button");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
   inp.click();
});

inp.addEventListener("change", function(ee){
   const nm = ee.target.files[0].name;
   console.log(nm);
   btn.textContent=nm;
});


//  let inp = document.querySelector("input");
 
// inp.addEventListener("input", function(dts){
//    if(dts.data!==null){
//    console.log(dts.data);
//    }
// });

// let btn = document.querySelector("button");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function(){
//    inp.click();
// });

// inp.addEventListener("change", function(ds){
//    const nm = ds.target.files[0].name; 
//    console.log(nm);
//    btn.textContent = nm;
// });

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function(e){
//    if(e.key === " "){
//     h1.textContent="SPC";
//    }
//    else{
//   h1.textContent=e.key;
//    }
 
// });


// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function(val){
//    console.log(val.key);
//    if(val.key === " "){
//       h1.textContent = "SPC";
//    } 
//    else{
//    h1.textContent = val.key;
//    }
// });

// let select = document.querySelector("select");
// let h2 = document.querySelector("h2");

// select.addEventListener("change", function(e){
//    console.log(e.target.value);
//    h2.textContent = e.target.value + "  Device Selected Successfully !!!! ";
// });
// let inp = document.querySelector("input");
// inp.addEventListener("input", function(dts){
//    if(dts.data!==null){
//    console.log(dts.data);
//    }
// });



// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//    btn.style.color="blue";
// })

// btn.addEventListener("dblclick", function(){
//    btn.style.color="red";
// })


// let li = document.querySelectorAll("li:nth-child(3n)");

// li.forEach(function(val){
//    val.classList.add("huu");
// })

// let bd = document.querySelector("body");
// bd.remove();

// let img = document.querySelector("img");
// img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS8DDBojw4bikNjAWH6f7RD-bHhw2GEVjF6Q&s");
// document.querySelector("body").prepend(img);

// let ul = document.createElement("ul");
// let li = document.createElement("li");

// li.textContent="Hii I am here";
// ul.append(li);
// document.querySelector("body").append(ul);

// let a = document.querySelector("a");
// a.setAttribute("href","https://www.sheryians.com/");

// let h2 = document.querySelector("h1");
// h2.classList.toggle("huu");

// let h1 = document.querySelector("h1");

// h1.innerText="Hor bhaji kida ??";
// h1.innerHTML="<i>yeah</i>";
// h1.hidden=false;


// let user = {
//     name: "Aman",
//     details: {
//         "home address": {
//             city: "Delhi",
//             zip: 110001
//         },
//         "work address": {
//             city: "Mumbai",
//             zip: 400001
//         }
//     }
// };

// let key = "work address";
// console.log(user.details[key].zip); // ❓ What will this print?



// let add = {
//     name:"Gurneet singh",
//     Address:{
//         area:"Luxmi nagar",
//         street:7,
//         "pin code":141001
//     }
// };

// console.log(add.Address["pin code"]);


// let unit = [120, 90, 300];
// let res = unit.reduce(function(acc,val){
//     return val+acc;
// },0);
// console.log(res*6);

// let num = [10,15,16,30,35];
// let res=num.reduce(function(accumulator,val){
//     return accumulator+val;
// },0);
// console.log(res);

// let prices = [200, 450, 600, 1200, 3000];
// let GST = 18;

// let final = prices.filter((val)=>{
//     if(val>500){
//         return true;
//         }
// });

// let rectify = final.map(function(hii){
//     return hii + (hii*GST/100);
// });

// console.log(rectify);

// let hello = [15,14,13,10,2,6,1];
// let res= hello.filter(function(val){
//     if(val>5){
//         return true;
//     }
// }); 
// console.log(res);

// let hii = [
//   { name: "Aman", marks: 70 },
//   { name: "Rohit", marks: 40 }
// ]

// let res = hii.map(function(val){
//     if(val===""){
//         return val;
//     }
        
// });

// console.log(res);

// let pass = [1, 0, 1, 1, 0]

// let attendance = pass.map((val) => {
//     if (val === 1) {
//         return "Present";
//     } else { return "Absent"; }
// });
// console.log(attendance);

// let jas = [15, 20, 25, 30, 90];
// let tax = [18, 10, 8, 19, 14];

// let res = jas.map(function (val,chaha) {
//     return val + (val * tax[chaha] / 100);
// });

// console.log(res);


// let arr = [3,4,5,6,7];

// let arr1 = arr.map(val=>{
//     return(val+2);
// });

// console.log(arr1);

// let jas = [15, 14, 13, 12, 11, 10];

// let res = jas.sort(function (n, m) {
//     return m - n;
// });

// res.forEach(function (mm) {
//     console.log(mm);
// })

// let arr = [20, 30, 5, 49, 70, 6];

// console.log(arr);
// arr.forEach(function (val) {
//     console.log(val);

// });

// let cart = [];

// cart.push("Smartwatch", "T-shirt", "Shirt", "Shoes");
// cart.pop();

// cart.forEach(function (val) {
//     console.log(val);
// });

// console.log("\n");

// let arr = ["jassal", "harry", "tushar", "sahil"];
// arr.unshift("Gurkamal =>> Emergency Patient");

// arr.forEach(function (hii) {
//     console.log(hii);
// });

// console.log("\n");

// arr.shift();
// arr.forEach(function (kk) {
//     console.log(kk)
// });

// let num = [19, 56, 49, 87, 36, 14];
// num.splice(2, 3);

// num.forEach(function (val) {
//     console.log(val);
// });

// console.log("\n");

// let num2 = [19, 21, 56, 49, 87, 36, 14];
// let Hi = num2.slice(2, 5);

// Hi.forEach(function (lol) {
//     console.log(lol);
// });


