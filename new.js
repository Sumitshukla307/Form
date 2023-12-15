//1 Artittmetic operators
//1.2 Additions,Subtraction, Multiplication , Divisions , modules , 
{let a = 10;
 let b = 5;
 console.log('a + b =', a+b);
 console.log("A - B = ", a-b);
 console.log("A * B = ", a*b);
 console.log("A / B = ", a/b);
 console.log("A % B = ", a%b);
 console.log("A ** B = ", a**b);
}

//2 Unary Operator
//2.1 Post Increment, Post decrement,
{
    let a = 5;
    console.log("a =",a++);
    console.log("Post Increment a = ",a);
}
{
    let a = 5;
    console.log("a =",a--);
    console.log("Post decrement a = ",a);
}
//2.2 Pre Increment, Pre decrement,
{
    let a = 5;
    console.log("a =",a);
    console.log("Pre Increment a = ",++a);
    console.log("Pre Increment a = ",++a);
}
{
    let a = 5;
    console.log("a = ",a);
    console.log("Pre decrement a = ",--a);
    console.log("Pre decrement a = ",--a);
}
//1.3 Assignment Operators
{
    console.log("a = 5\nb = 3");
{let a = 5;
let b = 3;
console.log("a += b ", a+= b);
}
{let a = 5;
let b = 3;
console.log("a -= b ", a-= b);
}
{let a = 5;
let b = 3;
console.log("a *= b ", a-= b);
}
{let a = 5;
let b = 3;
console.log("a /= b ", a/= b);
}
{let a = 5;
let b = 3;
console.log("a %= b ", a%= b);
}

{let a = 5;
let b = 3;
console.log("a %= b ", a%= b);
}
{let a = 5;
let b = 3;
console.log("a **= b ", a**= b);
}}
//2 conditional Statement
//2.1 IF ELSE Statement
{
    console.log("if- else Statement");
    let age = 18;
    console.log("age = 18");
    if(age>=18){
        console.log("you can vote");
    }
    else{
        console.log("you can not vote");
    }
}
//2.2 Ternary Operator
{
    console.log("Ternary Operator\nAge = 25");
    let age = 25;
    let result = age>=18? "Adult" : "not Adult";
    console.log(result);
    console.log(`(Ternary Operator , let age = 25;\nlet result = age>=18? "Adult" : "not Adult";)`)
}
//3 loop in JS
{
    console.log("For loop -");
    for(let i = 1;i<=10;i++){
        console.log("javaScript");
    }
}
{
console.log("calculate Sum of 1 to 5");
let sum = 0;
for(let i = 1;i<=5;i++){
    sum = sum + i;
    
}
console.log("Sum = ", sum);
console.log("Loop has end");
}
{
    console.log("while loop");
    let i = 1;
    while(i<=5){
        console.log("i = ",i);
        i++;
    }}
    {
        console.log("Do - While Loop");
        i = 1;
        do{
            console.log("i = ",i);
            i++;
        }
        while(i<=5);
    }
    {
        console.log("For OF Loop");
        let str="sumit Shukla";
        for(
            let i of str
        ){
            console.log("i= ",i);
        }
    }
    {
        console.log("For In Loop");
        let student = {
            name:"Sumit Shukla",
            age:20,
            CGPA:7.5,
            isPass:true
        };
        for(let i in student){
            console.log(i,":",student[i]);
        }
    }
{
    console.log("Q. 1 Print all even number from 0 to 100\nAns.");
    for(let num = 0;num<=100;num++){
        if(num%2==0){
            console.log("Num =" ,num);
        }
    }
}
 {
     console.log('Q.2 Create a game where you start with any random game number ask the user to key guessing the  game number until the user the correct value \nAns.');
     let gameNumber = 25;
     let userNum = prompt("guess the game number:");
     while(userNum!=gameNumber){
         userNum = prompt("you enter wrong number. Guess Again")
     }
     alert("Congratulations, You enter the Right number ")

 }
 {
     console.log("Q.3 Prompt the user to enter thir full name , Generate a user name for them based on the input\n Start user name with @ Followed by their full name and ending with the full name length\nAns. ");
     let firstName = prompt("Enter the Full Name");
     let rev =  firstName.split(" ").join("");
     rev = rev.toLowerCase();

     let userName = "@"+rev+rev.length;
     alert(userName);
 }

let names=[];
let fnames=[];
let ages = [];
let cities = [];

const addData = () => {

    let val1 = document.getElementById('name').value;
    let val2 = document.getElementById('fname').value;
    let val3 = document.getElementById('age').value;
    let val4 = document.getElementById('city').value;

    names.push(val1)
    fnames.push(val2)
    ages.push(val3)
    cities.push(val4);
    document.getElementById('name').value = ' ';
    document.getElementById('fname').value = ' ';
    document.getElementById('age').value = ' ';
    document.getElementById('city').value = ' ';
    console.log(val1,val2,val3,val4);

    
}
const showData = ()=>{
   let str = `<tr><th>UserId</th><th>Full Name</th><th>Father Name</th><th>Age</th><th>City</th></tr>`;
   for(let i=0;i<names.length;i++){
     str+= `<tr><td> @${names[i].split(" ").join("")}${i+1}</td><td> ${names[i]}</td><td>${fnames[i]}</td><td> ${ages[i]}</td><td> ${cities[i]}</td></tr>`
   }
   document.getElementById('tableData').innerHTML = str
   
}
const updateData = ()=>{
    const val = document.getElementById('name').value;
    const getIndex = names.indexOf(val);
    let val2 = document.getElementById('fname').value;
    let val3 = document.getElementById('age').value;
    let val4 = document.getElementById('city').value;
    fnames.splice(getIndex,1,val2);
    ages.splice(getIndex,1,val3);
    cities.splice(getIndex,1,val4)
    showData();
}
