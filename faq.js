const plusBtns = Array.from(document.querySelectorAll(".question"));
const answers = Array.from(document.querySelectorAll(".answer"));
const imgPlus = Array.from(document.querySelectorAll(".img-plus"));

plusBtns.forEach( (item,ind) => {
  let toggle = false;
  item.addEventListener("click", () => {
    answers[ind].classList.toggle("active-answer");
    let numB = plusBtns[ind].children[0];
    if (toggle === false) {
      imgPlus[ind].style.rotate = "45deg";
      numB.style.top = '20%';
      toggle = true;
    } else {
      imgPlus[ind].style.rotate = "0deg";
      numB.style.top = '50%';
      toggle = false;
    }
  })
})