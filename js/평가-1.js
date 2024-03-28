

let film =document.querySelector(".film");
let pictures = film.getElementsByClassName("picture2");

let currentIndex = 1;
let imgCnt = pictures.length;
let time = 4000;
let x = 1200;

setInterval(function(){
 let trans= currentIndex * x;

 film.style.transform ="translateX(-"+ trans +"px)";
 currentIndex++;

 if(currentIndex == imgCnt){
  currentIndex = 0;
 }
},time);

$(".mainmenu>li").mouseover(function(){
 $(this).next("ul").stop().slideDown();
 $(this).next("ul").find("li").show();
}).mouseout(function(){
 $(this).next("ul").stop().slideUp();
})