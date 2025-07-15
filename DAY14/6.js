var changetxt=document.getElementById("header-title");  //get element by ID
changetxt.innerText="html";
changetxt.style.borderBottom="10px solid white"


var text=document.getElementsByClassName("list-item");  // get element by class 
text[1].style.background="red";

var li=document.getElementsByTagName("li");
li[3].style.background="orange"                 // get element by tag

var headline=document.querySelector("#tagline");    // queryselector
headline.style.color="red."

var header1=document.querySelector(".list-item");
header1.style.background="blue";

var input=document.querySelector("#button");
input.style.background="yellow";
input.innerText="send";


// how to create Html  element using javascript

var newdiv=document.createElement("div");  //create a div
newdiv.className="hello";   //create a class
newdiv.id="bye";//create a id

var newdivtext=document.createTextNode("hello everyone long time no see.."); // create text 
newdiv.appendChild(newdivtext);  //append into newdiv
console.log(newdiv);

//show in live server and need two parameters to show where that div need to place 

var container=document.querySelector("#content");

var form=document.querySelector("form");

container.insertBefore(newdiv,form);

