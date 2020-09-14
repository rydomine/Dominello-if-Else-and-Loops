var wrapperEle = document.body.querySelector(".wrapper");
var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

for(var i=0; i<animals.length; i++){
 animalFarm(animals[i]);
}

function animalFarm(str){
   var ele = document.createElement("div");
  if(str==="cat"){
    ele.innerHTML=str+" I am a cat";
  }else if(str==="dog"){
    ele.innerHTML=str+" borf borf";
 }else{
    ele.innerHTML=str+" I am an animal";
 }
  
  wrapperEle.appendChild(ele);
}