let tabs = Array.from(document.querySelectorAll(".part-tab"));
let imageContainer = document.querySelector(".team-images");

let imgGrp = [
  `<img src="images/1.jpg">`,
  `<img src="images/2.jpg">`,
  `<img src="images/3.jpg">`,
  `<img src="images/4.jpg">`,
  `<img src="images/5.jpg">`,
  `<img src="images/6.jpg">`,
  `<img src="images/7.jpg">`,
];

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    let activeTab = document.querySelector(".active_tab");
    if (activeTab) activeTab.classList.remove("active_tab");
    tab.classList.add("active_tab");

    imageContainer.style.opacity = 0;
    setTimeout(() => {
      imageContainer.innerHTML = imgGrp[index];
      imageContainer.style.opacity = 1;
    }, 300);
  });
});
