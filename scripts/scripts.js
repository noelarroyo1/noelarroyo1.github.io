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

// setTimeout(function() {
//   const scroller = document.getElementById("scroll-push");
//   scroller.classList.add("pulsate");
// }, 30000);

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }
}

TypeWriter.prototype.type = function() {
  console.log("hello");
  const current = this.wordIndex % this.words.length;
  const fullTxt = this.words[current];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  let typeSpeed = 300;
  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    typeSpeed = this.wait;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.wordIndex++;
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  new TypeWriter(txtElement, words, wait);
}

// document.addEventListener("DOMContentLoaded", function() {
//   const wordObserver = new IntersectionObserver((entries, txtObserver) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const lazyText = entry.target;
//         console.log("lazy loading ", lazyText);
//         document.getElementById("bg-txt").innerHTML = lazyText.dataset.text;
//         // lazyText.classList.remove("lzy_txt");
//         // txtObserver.unobserve(lazyText);
//       }
//     });
//   });
//   const arr = document.querySelectorAll("p.lzy_txt");
//   arr.forEach(v => {
//     wordObserver.observe(v);
//   });
// });
