let tabs = Array.from(document.querySelectorAll(".part-tab"));
let image = document.querySelector(".team-images");

tabs.forEach((item,ind) => {
  item.addEventListener("click", () => {
    let activeTab = tabs.find( elem => elem.classList.contains("active_tab"));
    activeTab.classList.remove("active_tab");
    item.classList.add("active_tab");
    image.innerHTML = imgGrp[ind];
  })
});

let imgGrp = [`<img src="images/Rectangle 49.png">
      <div class="participants-names">
        <div>
          <h4>Dr. Nitin Goje</h4>
        </div>
        <div>
          <h4>Dr. Nitin Goje</h4>
        </div>
        <div>
          <h4>Dr. Nitin Goje</h4>
        </div>
        <div>
          <h4>Dr. Nitin Goje</h4>
        </div>
      </div>`, `<img src="images/Rectangle 42.png">
      <div class="participants-names">
        <div>
          <h4>Dr. Nitin Goje</h4>
        </div>
        <div>
          <h4>Dr. Nitin Goje</h4>
        </div>
        <div>
          <h4>Dr. Nitin Goje</h4>
        </div>
        <div>
          <h4>Dr. Nitin Goje</h4>
        </div>
      </div>`, `<img src="images/Rectangle 49.png">
      <div class="participants-names">
        <div>
          <h4>Dr. Nitin Goje</h4>
        </div>
        <div>
          <h4>Dr. Nitin Goje</h4>
        </div>
        <div>
          <h4>Dr. Nitin Goje</h4>
        </div>
        <div>
          <h4>Dr. Nitin Goje</h4>
        </div>
      </div>`, `<img src="images/Rectangle 42.png">
      <div class="participants-names">
        <div>
          <h4>Dr. Nitin Goje</h4>
        </div>
        <div>
          <h4>Dr. Nitin Goje</h4>
        </div>
        <div>
          <h4>Dr. Nitin Goje</h4>
        </div>
        <div>
          <h4>Dr. Nitin Goje</h4>
        </div>
      </div>`]
