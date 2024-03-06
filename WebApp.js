
const btn = document.querySelector("button");
const sound = document.querySelector("audio");
let rotationDirection = 1; 
btn.addEventListener("click",()=>{
    sound.play();
    setTimeout(() => {
        const userName = prompt("Por favor escribe tu nombre");
        document.querySelector("marquee").innerHTML = `Hola ${userName}`;
    }, 1000);
})

setInterval(funRotar, 500);

function funRotar() {
    btn.style.transform = "rotate(" + (5 * rotationDirection) + "deg)";
    rotationDirection *= -1;
}