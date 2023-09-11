
// document.getElementById("buttonID").addEventListener('click', () =>{
  `<button class="collapsible">click</button>`

  fetch('https://swapi.dev/api/people')
  .then((data) => {
    return data.json();
  })
  .then((completeData) => {
    let starData = completeData.results;
    let data1 = "";

    starData.map((values) => {
      data1 += `
        <div class="sub-folder">
        <img src="images/${values.name}.jpeg" alt="star-character" class="image">
          <button class="collapsible">${values.name}</button>
          <div class="content">
            <h3 class="Gender">${values.gender}</h3>
            <h4 class="Height">${values.height}</h4>
          </div>
        </div>`;
    });

    document.getElementById("main-holder").innerHTML = data1;

    // Add event listeners to collapsible buttons
    let coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });

      // Hide content by default
      coll[i].nextElementSibling.style.display = "none";
    }
  });

