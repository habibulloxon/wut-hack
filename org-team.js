let groupbuttons = Array.from(document.querySelectorAll(".org-tablet"));
let images = document.querySelector(".org-images");
let arrowButton1 = document.querySelector(".arrow-1");
let arrowButton2 = document.querySelector(".arrow-2");

groupbuttons.forEach( (item, ind) => {
  item.addEventListener("click", () => {
    images.innerHTML = photos[ind];
    let prebut = groupbuttons.find( elem => elem.classList.contains("active_tablet"));
    prebut.classList.remove("active_tablet");
    item.classList.add("active_tablet");
  })
})

arrowButton1.addEventListener('click', () => {
  images.scrollLeft -= 300;
});


arrowButton2.addEventListener('click', () => {
  images.scrollLeft += 300;
});

let group1 = `<div>
        <img src="images/image.png"> 
        <div>
          <h4>Dr. Nitin Goje</h4>
          <p>Supervision</p>
      </div>
      </div>
      <div>
        <img src="images/image.png"> 
        <div>
          <h4>Dr. Nitin Goje</h4>
          <p>Supervision</p>
      </div>
      </div>
      <div>
        <img src="images/image.png"> 
        <div>
          <h4>Dr. Nitin Goje</h4>
          <p>Supervision</p>
      </div>
      </div>
      <div>
        <img src="images/image.png"> 
        <div>
          <h4>Dr. Nitin Goje</h4>
          <p>Supervision</p>
      </div>
      </div>`
let group2 = `</div>
      <div>
        <img src="images/image 2.png"> 
        <div>
          <h4>Dr. Nitin Goje</h4>
          <p>Supervision</p>
        </div>
      </div>
      </div>
      <div>
        <img src="images/image 2.png"> 
        <div>
          <h4>Dr. Nitin Goje</h4>
          <p>Supervision</p>
        </div>
      </div>
      </div>
      <div>
        <img src="images/image 2.png"> 
        <div>
          <h4>Dr. Nitin Goje</h4>
          <p>Supervision</p>
        </div>
      </div>
      </div>
      <div>
        <img src="images/image 2.png"> 
        <div>
          <h4>Dr. Nitin Goje</h4>
          <p>Supervision</p>
        </div>
      </div>`;
let group3 =`<div>
        <img src="images/image 3.png"> 
        <div>
          <h4>Dr. Nitin Goje</h4>
          <p>Supervision</p>
        </div>
      </div>
      <div>
        <img src="images/image 3.png"> 
        <div>
          <h4>Dr. Nitin Goje</h4>
          <p>Supervision</p>
        </div>
      </div>
      <div>
        <img src="images/image 3.png"> 
        <div>
          <h4>Dr. Nitin Goje</h4>
          <p>Supervision</p>
        </div>
      </div>
      <div>
        <img src="images/image 3.png"> 
        <div>
          <h4>Dr. Nitin Goje</h4>
          <p>Supervision</p>
        </div>
      </div>`;
let group4 = `<div>
        <img src="images/image 4.png"> 
        <div>
          <h4>Dr. Nitin Goje</h4>
          <p>Supervision</p>
        </div>
      </div>
      <div>
        <img src="images/image 4.png"> 
        <div>
          <h4>Dr. Nitin Goje</h4>
          <p>Supervision</p>
        </div>
      </div>
      <div>
        <img src="images/image 4.png"> 
        <div>
          <h4>Dr. Nitin Goje</h4>
          <p>Supervision</p>
        </div>
      </div>
      <div>
        <img src="images/image 4.png"> 
        <div>
          <h4>Dr. Nitin Goje</h4>
          <p>Supervision</p>
        </div>
      </div>`;
      
let photos = [group1, group2, group3, group4];
