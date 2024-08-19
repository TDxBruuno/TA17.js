let num = document.querySelector("p");
let boton = document.querySelector("button");
let span = 0;

boton.addEventListener("click", function () {
    span += 1;
    num.textContent = span;
});
