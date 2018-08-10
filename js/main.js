/**********hamburger*************/
var hamburger = document.querySelector(".hamburger--squeeze");

hamburger.addEventListener("click", function () {
 hamburger.classList.toggle("is-active");
}, false);

/************ audio - music ************/
const audio = document.querySelector('audio');


/**** button in menu ****/
const button = document.getElementById('li-speaker');


/****** summer *********/
TweenMax.from(".astronaut", 3, { y:-19, repeat:-1, yoyo:true});

TweenMax.to(".pink-flower", 2.5, { transformOrigin: "bottom center", skewX:12, repeat:-1, yoyo:true});

/******* autumn ************/
TweenMax.to(".owl", 1.5, { y:6, repeat:-1, yoyo:true});

TweenMax.to(".left-wing", 1.5, { transformOrigin: "top center", rotation:60, repeat:-1, yoyo:true});


/******** winter **********/
TweenMax.from(".mouth", 1.3, {transformOrigin: "center center", scaleY:0.5,scaleX:0.4, repeat:-1, yoyo:true});

TweenMax.to(".melody", 1.3, { delay:1.3, y:9, repeat:-1, yoyo:true});

TweenMax.to(".smoke", 2, { y:4, repeat:-1, yoyo:true});

TweenMax.to(".tree", 2.5, { transformOrigin: "bottom center", skewX:4, repeat:-1, yoyo:true});

TweenMax.to(".snail", 140, {x:180});

TweenMax.to(".heart1", 4, {rotation:45, repeat:-1, yoyo:true});

TweenMax.to(".fly-but", 2, {y:480});