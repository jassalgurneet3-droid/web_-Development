
let arr = [20,30,5,49,70,6];
arr.forEach(function(val){
    console.log(val);
});

// let num = 100;

// if(num>90 && num<=100){
//     console.log("A+");
// }else if(num>80 && num<=89){
//     console.log("A");
// }else if(num>70 && num<=79){
//     console.log("B");
// }else if(num>60 && num<=69){
//     console.log("C");
// }else if(num>33 && num<=59){
//     console.log("D");
// }else if(num>=0 && num<=32){
//     console.log("Fail");
// }else{
//     console.log("Invalid Marks");
// }


// function rps(user, computer) {

//     if (user === "rock" && computer === "secissor") {
//         console.log("User Win");
//     } else if (user === "rock" && computer === "paper") {
//         console.log("Computer Win");
//     } else if (user === "rock" && computer === "rock") {
//         console.log("Draw");
//     } else if (user === "paper" && computer === "secissor") {
//         console.log("Computer Win");
//     } else if (user === "paper" && computer === "rock") {
//         console.log("User Win");
//     } else if (user === "paper" && computer === "paper") {
//         console.log("Draw");
//     } else if (user === "secissor" && computer === "secissor") {
//         console.log("Draw");
//     } else if (user === "secissor" && computer === "paper") {
//         console.log("User Win");
//     } else if (user === "secissor" && computer === "rock") {
//         console.log("Computer Win");
//     } else {
//         console.log("Invalid Pass");
//     }
// }

// function login(username, password) {
//     if (username === "GUR33088") {
//         console.log("Login Successfully!!");

//         if (password === 3308818) {
//             console.log("Login Successfully!!");
//         }
//         else {
//             console.log("Unsuccessfully!!");
//         }
//     }
//     else {
//         console.log("Unsuccessfully!!");
//     }
// }

// let username = prompt("Enter username : ");
// let password = parseInt(prompt("Enter Password : "));

// login(username, password);



// function calculator(num1, num2, operator){

//         switch(operator){

//                 case "+":
//                 console.log(num1+num2);
//                 break;
//                 case "-":
//                 console.log(num1-num2);
//                 break; 
//                 case "*":
//                 console.log(num1*num2);
//                 break;
//                 case "/":
//                 console.log(num1/num2);
//                 break;
//                 case "%":
//                 console.log(num1%num2);
//                 break;
//                 default:
//                     console.log("Not Exist !!");
//         }
// }

// let num1 = parseInt(prompt("Enter Number 1 : "));
// let num2 = parseInt(prompt("Enter Number 2: "));
// let operator = prompt("Enter Operator Which used to Perform Calculation -> ");

// calculator(num1,num2,operator);

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {

//         console.log(`${i} Number is Even`);
//         console.log("\n");
//     }

// }

// var num=parseInt(prompt("Enter a Number -> "));
// var count = 0;

// while(num>0){
//     let digit=num%10;
//     count++;
//     num=parseInt(num/10);
// }
// console.log(count);



// var num=parseInt(prompt("Enter a Number -> "));
// var count = 0;
// var sum = 0;

// while(num>0){
//     digit=num%10;
//     sum = sum + digit;
//     num = parseInt(num/10);
// }
// console.log(sum);


// let a = parseInt(prompt("Enter a Number -> "));
// let comp = a;
// let sum = 0;

// while (a > 0) {
//     let digit = a % 10;
//     sum = 10 * sum + digit;
//     a = Math.floor(a / 10);
// }
// console.log(sum);

// if(comp===sum){
//     console.log(sum+" Is a Pallindrome Number!!");
// }else{
//     console.log(sum+" Is not a Pallindrome Number!!");    
// }

// let a = parseInt(prompt("Enter a Number -> "));

// for (let i = 0; i < a; i++) {
//     let k = 1;
//     for (let j = 0; j < i + 1; j++) {
//         document.write(k);
//         k++;
//     }
//     document.write("<br>");
// }

// let a = parseInt(prompt("Enter a Number -> "));
// let isprime = true;

// if (a <= 1) {
//     isprime=false;
// } else{
//     for(let i=2; i<=Math.sqrt(a); i++){
//         if(a%i==0){
//             isprime=false;
//         }
//     }
// }
// if(isprime){
//     console.log(a+" Number is Prime");
// }
// else{
// console.log(a+" Number is NON-Prime");
// }

// let a = parseInt(prompt("Enter a Number -> "));
// let org = a;
// let sum = 0;
// let count = 0;
// let z = [];
// let result = [];

// while (a > 0) {
//     let digit = a % 10;
//     sum = 10 * sum + digit;
//     a = Math.floor(a / 10);
//     count++;
//     z.push(digit); 
// }
// console.log(org);

// for(let i = 0; i<z.length; i++){
//     if(z[i]!==0){
//         result.push(z[i]);
//     }

// }

// for(let i = 0; i<result.length; i++){
//     console.log(result[i]);
// }
// console.log(result.length);


// function hii(val){
// val();
// }

// hii(function ()
// {
// console.log("Food Delivered");
// });

// function num(a,val){
//     val(a);
// }

// num(2,function(a){
//     console.log(10*a);
// })

// function getDiscount(val){
//     return function(price){
//         return price-(price*val/100);
//     }
// }

// console.log(getDiscount(20)(200));

// function GST(slab){
//     return function(Income){
//         console.log(Income*slab/100);
//     }
// }

// GST(18)(20000);

// function bill(total){
//     return function(discount){
//         return function(tax){
//             return total-(total*discount/100)+(total*tax/100);
//         }
//     }
// }

// bill(5000)(8)(18);



// function value(){
//     let a = 0;
//     return function(){
//         console.log(a++);
//     }
// }

// const a = value();
// a();
// a();
// a();



// const secret = (function(){
//     let password=33088;
//         return function(val){
//             if(val==="Jassal"){
//                 console.log(password);
//             }
//             else{
//                 console.log("Access Denied");
//             }
//         }
// })();



