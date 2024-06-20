
    //1. ways to print in Javascript  
    // console.log("Hello world")
    // alert("me")
    // document.write("this is document write")
   
    // // 2.Javascript console API
    // console.log("Hello world",5*8,"sanjana")
    // console.warn("This is a warning")
    // console.error("This is an error")

 // 3.Javascript Variables
//  Containers to store data values(Variables)
// var number1=34;
// var number2=45;
// console.log(number1+number2);

    // 4.Javascript Datatypes
    // //number
    // var num1=45;
    // var num2=56;
    // //strings
    // var str1="this is a string";
    // var str2="this is also a string";
    // //objects
    // var marks={
    //     ravi: 34,
    //     sanju:67,
    //     esha:78,
    // }
    //booleans
    // var a=true;
    // var b=false;

    // console.log(a,b)
//    var und=undefined
    // var und
    // console.log(und)
    // var n= null;
    // console.log(n)

   /* At a very High level,there are two data types
    1.Primitive data types: undefined,null,number,string,boolean,symbol
    2.Reference data type*/
// //Arrays
//     var arr=[1,2,3,4,"sanju",5]
//     console.log(arr);


// Operators in Javascript
// var a=56;
//  var b= 90;
// console.log("The value of a+b is",a+b);
// console.log("The value of a-b is",a-b);
// console.log("The value of a*b is",a*b);
// console.log("The value of a/b is",a/b);

// Assignment operators
// var c=b;
// c+=2;//c=cc+2
// console.log(2)
//Comparator operators
// var x=67;
//  var y=67;
// console.log(x==y)
// console.log(x>=y)
// console.log(x<=y)
// console.log(x>y)
// console.log(x<y)
//Logical operations
// //and operator
// console.log(true&&true)
// console.log(true&&false)
// console.log(false&&true)
// console.log(false&&false)
// //or operator
// console.log(true||true)
// console.log(true||false)
// console.log(false||true)
// console.log(false||false)
//Not operator
// console.log(!false)
// console.log(!true)


// Functions in javascript//
// DRY = Do Not Reapet yourself
// function avg(a,b){
//     c= (a+b)/2;
//     return c;
// }
// DRY = Do Not Reapet yourself
// c1= avg(3,5);
// c2=avg(14,35);
// console.log(c1,c2);
// In console if we get any no or any alphabet in black color then consider it as the string else it is number which is indicated by the blue color.

//Conditionals in Javascript
// var age=1;
// //Single if statement
// if(age>8){
//     console.log("You are not a kid");
// }
// //If-else statement
// if(age>8){
//     console.log("You are not a kid");
// }
// else{
//     console.log('You are kid');
// }
//If-else ladder
// if (age>2){
//     console.log("You are not a kid")
// }
// else if(age>26){
//     console.log("Bacche nahi rahe")
// }
// else if(age>45)
// {
//     console.log("Bacche na rahe")
// }
// else{
//     console.log("Tum abhi bacche ho bhai!")
// }
// console.log("End of the ladder")

//Rasana example
// if(age>6){
//     console.log("You are not a kid. So you can drink the Rasana")
// }
// else{
//     console.log("You are a kid. It maybe harmful to your health so be careful fromm it.")
// }

//Using for loop
// var arr=[1,2,3,4,5,6,7];
// // console.log(arr);
//  for(var i=0;i<arr.length;i++){
//    if(i==2){
//     // break;
//     continue; //Cancel this iteration and movie to next itteration
//    }
//     console.log(arr[i])
// }
// console.log("End of the loop")
// arr.forEach(function(element)
// {
//     console.log(element);
// })
// // const ac=0;
// ac++;

//  var arr=[1,2,3,4,5,6,7];
// let j = 10;
// while(j<Array.length){
//     console.log(arr[j]);
//     j++;
// // }
// do{
// console.log(arr[j]);
// j++
// }while(j<arr.length);


//  var myArr=["fan","Camera",34,null,true]
// console.log(myArr.length)
// console.log(myArr)
// myArr.pop();
// myArr.push("sanjana")
// myArr.shift()
// const newlen =myArr.unshift("SAnjana")
// console.log(newlen);
// console.log()

// String Methods in Javascript
var myLovelyString="Sanjana is a good girl girl";
// console.log(myLovelyString.length) 
// console.log(myLovelyString.indexOf("is"))
// console.log(myLovelyString.lastIndexOf("girl"))
// console.log(myLovelyString.slice(1,4))
d=myLovelyString.replace("Sanjana","gouri")
// d=d.replace("good","bad")
// console.log(d,myLovelyString)
let myDate= new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());

//DOM Manipulation

// let elem= document.getElementById('click');
// console.log(elem);

// let elemClass= document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].classList.add("bg-primary") 
// elemClass[0].classList.add("text-success") 
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn= document.getElementsByTagName('div')
// console.log(tn)
// createdElement=document.createElement('p');
// createdElement.innerText="This is a created paragraph";
// tn[0].appendChild(createdElement);

// createdElement2=document.createElement('b');
// createdElement2.innerText="This is a created bold";
// tn[0].replaceChild(createdElement2,createdElement);
// removeChild(element); (Remove a element)

/*selecting using Query*/

// sel= document.querySelector('.container')
// console.log(sel)

// sel= document.querySelectorAll('.container')
// console.log(sel)

// function clicked(){
//     console.log("The button was clicked")
// }
// window.onload = function(){
//     console.log("The document was loaded")
   
// }

// Events in Javascript
// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked </b>"
//     console.log('Clicked on Container')
// })
// firstContainer.addEventListener('mouseover',function(){
//     console.log('Mouse on container')
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log('Mouse out containe')
// })

// let prevHTML =document.querySelectorAll('.container')[1].innerHTML

// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked </b>"
//     console.log('Mouse up when clicked on containe')
// })

// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked </b>"
//     console.log('Mouse down when cklicked on containe')
// })

//Arrow functions
// function sumn(){
//     return 5;
//     }
    
//setTimeout and setinterval
// sumn=(a,b)=>{
//     return a+b;
// }
// logKaro=()=>{
//     document.querySelectorAll('.container')[1].innerHTML="<b> Set interval fired </b>"
//     console.log("I am your log")
    // }
// setTimeout(logKaro,2000)
//  clr=setTimeout(logKaro,5000); //used for repated event
//  clr=setInterval(logKaro,5000)
// se clearInterval/clearTimeout to cancel setInterval/SetTimeout

// // Local storage
// localStorage.setItem('name','sanjana')
// undefined
// localStorage
// Storage {name: 'sanjana', length: 1}
// localStorage.getItem('name')
// 'sanjana'
//localstorage.removeItem()
//localstorage.clear()

//Json
obj={name:"sanjana",length:1,a:{this:'tha"t"'}}
jso =JSON.stringify(obj)
console.log(typeof jso)
console.log(obj)
// parsed=JSON.parse




















