const container = document.getElementById("box");

console.log(container);



const h2 = document.getElementById("box2");

h2.innerHTML = "hello";



const class123 = document.getElementsByClassName('lis')[0];
class123.innerHTML ="I am the first item ";
const class1234 = document.getElementsByClassName('lis')[1];
class1234.innerHTML ="I am the second item ";
const class12345 = document.getElementsByClassName('lis')[2];
class12345.innerHTML ="I am the thirsd item ";



console.log(class123);



const allTheDiv = document.getElementsByTagName('div');
allTheDiv[0].innerHTML = "hello from the javascript";
console.log(allTheDiv[0]);




const box3 = document.getElementById('box3');
const buttonAtBox3 = document.createElement('button')
buttonAtBox3.innerHTML = "clickMe Yo";

function eventHandler(){
    return console.log("you clicked");
}

buttonAtBox3.addEventListener('click', eventHandler )

box3.append(buttonAtBox3);

function hello(){
    console.log('hello')
}