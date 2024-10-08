const tablets = [...document.querySelectorAll(".org-tablet")];
const names = document.querySelector(".org-images");

tablets.forEach((item, ind) => {
  item.onclick = () => {
    tablets.forEach((elem) => elem.classList.remove("active_tablet"));
    item.classList.add("active_tablet");
    names.innerHTML = orglist[ind];
  };
});

let group1 = `      <div>
        <img id="mf-img" src="images/HamidKhusanov-photography--5.jpg">
    </div>`;
let group2 = `      <div>
        <img id="mf-img" src="images/HamidKhusanov-photography--3.jpg">
    </div>`;
let group3 = `      <div>
        <img id="mf-img" src="images/HamidKhusanov-photography--2.jpg">
    </div>`;
let group4 = `      <div>
        <img id="mf-img" src="images/HamidKhusanov-photography-.jpg">
    </div>`;

let orglist = [group1, group2, group3, group4];
