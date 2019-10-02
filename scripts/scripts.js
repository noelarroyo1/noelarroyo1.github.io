// const navEl = document.getElementById("bg-txt")[0];
// let observer = new IntersectionObserver(entries => {
//   if (entries[0].boundingClientRect.y < 0) {
//     navEl.classList.add("txt-scrolled");
//   } else {
//     navEl.classList.remove("txt-scrolled");
//   }
// });
// observer.observe(document.querySelector("#project-one"));
// observer.observe(document.querySelector("#project-three"));

setTimeout(function() {
  const scroller = document.getElementById("scroll-push");
  scroller.classList.add("pulsate");
}, 10000);
