const plusBtns = Array.from(document.querySelectorAll(".question"));
const answers = Array.from(document.querySelectorAll(".answer"));
const imgPlus = Array.from(document.querySelectorAll(".img-plus"));
const plusCircles = Array.from(document.querySelectorAll(".plus"))

plusBtns.forEach( (item,ind) => {
  let toggle = false;
  item.addEventListener("click", () => {
    answers[ind].classList.toggle("active-answer");
    let numB = plusBtns[ind].children[0];
    if (toggle === false) {
      imgPlus[ind].style.rotate = "45deg";
      plusCircles[ind].style.top = "20%"
      numB.style.top = '20%';
      toggle = true;
    } else {
      imgPlus[ind].style.rotate = "0deg";
      plusCircles[ind].style.top = "50%"
      numB.style.top = '50%';
      toggle = false;
    }
  })
})