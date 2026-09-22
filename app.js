const man = document.getElementById("man");
window.onload = () => {
   man.style.transform = "translateX(0px)";
   setTimeout(() => {
      man.style.animation = "byte 2s linear infinite, pulse 1s linear infinite";
   }, 450);
};

let clickCount = 0;

man.addEventListener("click", (event) => {
   clickCount++;
   console.log(clickCount);
   if (clickCount === 1) {
      const greet = document.getElementById("greet");
      greet.style.opacity = "1";
   }
   if (clickCount === 2) {
      const greet = document.getElementById("congratulation");
      greet.style.opacity = "1";
      const fireworks = document.querySelectorAll(".firework");
      fireworks.forEach((firework, index) => {
         // 1. Показываем контейнер
         firework.style.opacity = "1";

         const roket = firework.querySelector(".roket");
         const boom = firework.querySelector(".boom");

         // 2. Запускаем полёт с задержкой (чтобы ракеты взлетели не одновременно)
         const delay = 400; // 0 мс для первой, 400 мс для второй
         setTimeout(() => {
            roket.classList.add("flying");
         }, delay);

         roket.addEventListener("animationend", () => {
            roket.style.opacity = "0";
            roket.style.display = "none";
            boom.classList.add("exploding");
         });

         boom.addEventListener("animationend", () => {
            boom.style.opacity = "0";
         });
      });
   }
});
