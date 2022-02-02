'use strict;'
document.getElementById('numb1').innerHTML = '100';

function genNum() {
if(document.getElementsByClassName('box'.length)){
    const removeElements= (emls) => emls.forEach(el=>el.remove());
    removeElements(document.querySelectorAll(".box"));
}
let regularNumber = [];
 while(regularNumber.length<6) {
     let r = Math.floor(Math.random()*69 +1);
     if(regularNumber.indexOf(r)===-1) regularNumber.push(r);
     let add = true;
     for(let y =0; y<69;y++)   {
         if (regularNumber[y] == regularNumber){
             add = false;
         }
     }
    }
    const sorted = [...regularNumber].sort((a,b)=>a-b);

    console.log(sorted);
    // sorted.forEach(function (content){
    // let lotto = document.getElementsById("box");
    // let circle =document.createElement('span');

    // });
}