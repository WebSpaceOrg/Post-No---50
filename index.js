// Movement Animation to happen
const sneaker = document.querySelector(".sneaker img");

// Moving animation event
sneaker.addEventListener("mousemove", (e) => {
  sneaker.style.transform = "scale(1.1)";
});

// Animate In
sneaker.addEventListener("mouseenter", (e) => {
  sneaker.style.transition = "transform 0.5s ease";
  sneaker.style.transform = "scale(1.2)";
});

// Animate Out
sneaker.addEventListener("mouseleave", (e) => {
  sneaker.style.transition = "transform 0.5s ease";
  sneaker.style.transform = "scale(1)";
});
