let text = document.getElementById("text");
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let water = document.getElementById("water");
let rocks = document.getElementById("rocks");
let header = document.getElementById("header");
let btn = document.getElementById("btny");
let forest = document.getElementById("forest");

if (screen.width > 999){
    window.addEventListener("scroll", function(){
        let value = window.scrollY;
        // console.log(value);
        text.style.top = 50 + value * -0.1 + "%";
        bird1.style.top = value * -1.5 + "px";
        bird1.style.left = value * 2 + "px";
        bird2.style.top = value * -1.5 + "px";
        bird2.style.left = value * -5 + "px";
        btn.style.marginTop = value * 1.5 + "px";
        rocks.style.top = value * -0.12 + "px";
        forest.style.top = value * 0.25 + "px";
        header.style.top = value * 0.5 + "px";
    })
}