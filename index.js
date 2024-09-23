let member1 = `<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f62ac17d35461c98d1ba8f3c8f08eab217a5e00c23e3ba0b40dbf34a151f2eb5?placeholderIfAbsent=true&apiKey=ebed9f91303246fc9100e1000e7f7ebd" alt="Dr. Nitin Goje" class="member-image" loading="lazy">
      <div class="member-info">
        <h4 class="member-name">Dr. Nitin Goje</h4>
        <p class="member-role">Supervision</p>
      </div>`;
let member2 = `<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/214c8f29d0080cc632434c920c9c3a8d7da1d32152efcf9dc00317bff472ac52?placeholderIfAbsent=true&apiKey=ebed9f91303246fc9100e1000e7f7ebd" alt="Dr. Nitin Goje" class="member-image" loading="lazy">
      <div class="member-info">
        <h4 class="member-name">Dr. Nitin Goje</h4>
        <p class="member-role">Supervision</p>
      </div>`;

let departments = [...document.querySelectorAll(".team-card")];
let members = [...document.querySelectorAll(".member-card")];


departments.forEach( (elem,ind) => {
  elem.addEventListener("click", () => {
    departments.forEach( item=> {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    })
    elem.classList.add("active");
      if (ind % 2 === 0) {
    members.forEach(organizer => {
      organizer.innerHTML = member1;
    })
  } else {
        members.forEach(organizer => {
        organizer.innerHTML = member2;
    })
  }
  })
})

let teamBtn = [...document.querySelectorAll(".team-item")];
let teamPhoto = document.querySelector(".teams-info");

teamBtn.forEach((e,i) => {
  e.addEventListener("click", () => {
    teamBtn.forEach(i => {
      if (i.classList.contains("active")) {
        i.classList.remove("active");
      }
    })
    e.classList.add("active");
    if (i % 2 === 0) {
      teamPhoto.innerHTML = `<img src="https://i.postimg.cc/0QWDmBb8/Rectangle-42.png" alt="Webster group" class="teams-foto">
    <div class="names">
      <span class="name-item">Dr. Nitin Goje</span>
      <span class="name-item">Dr. Nitin Goje</span>
      <span class="name-item">Dr. Nitin Goje</span>
      <span class="name-item">Dr. Nitin Goje</span>
      <span class="name-item">Dr. Nitin Goje</span>
      <span class="name-item">Dr. Nitin Goje</span>
    </div>`;
    } else{
      teamPhoto.innerHTML = `<img src="https://i.postimg.cc/tJsSVPRM/image-5.png" alt="Webster group" class="teams-foto">
    <div class="names">
      <span class="name-item">Dr. Nitin Goje</span>
      <span class="name-item">Dr. Nitin Goje</span>
      <span class="name-item">Dr. Nitin Goje</span>
      <span class="name-item">Dr. Nitin Goje</span>
      <span class="name-item">Dr. Nitin Goje</span>
      <span class="name-item">Dr. Nitin Goje</span>
    </div>`;
    }
  })
})