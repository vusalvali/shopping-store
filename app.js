

const hideBtn = document.querySelector('.hiding-div');
const hiddenDiv = document.querySelector('.nav-list');
const showBtn = document.querySelector('.bar-not-bigsc');

function updateSize() {
  if (window.innerWidth <= 600) {
    hiddenDiv.style.display = 'none';
    hideBtn.addEventListener('click', function() {
      if (hiddenDiv.style.display !== "none") {
        hiddenDiv.style.display = 'none';
      }
    });

    showBtn.addEventListener('click', function() {
      if (hiddenDiv.style.display = "none") {
        hiddenDiv.style.display = 'block';
      } 
    } );
  } else if(window.innerWidth >= 600) {
    hiddenDiv.style.display = 'block' }
}



  


updateSize();
window.addEventListener("resize", updateSize);





// const hideBtn = document.querySelector('.hiding-div');
// const hiddenDiv = document.querySelector('.nav-list');
// const showBtn = document.querySelector('.bar-not-bigsc');
// hiddenDiv.style.display === 'none'
// const size = window.innerWidth;

// function updateSize() {
//   if (size <= '600px') {
//     hiddenDiv.style.display === 'none'
//     hideBtn.addEventListener('click', function() {
//       if (hiddenDiv.style.display !== 'none') {
//         hiddenDiv.style.display === 'none';
//       }
//     });

//     showBtn.addEventListener('click', function() {
//       if (hiddenDiv.style.display === 'none') {
//         hiddenDiv.style.display === 'block';
//       }
//     });
//   } else {
//     hiddenDiv.style.display === 'block';
//   }
// }

// updateSize();
// window.addEventListener("resize", updateSize);


// Close the dropdown menu if the user clicks outside of it

// const dropdowns = document.querySelectorAll(".dropdown-content");
// window.addEventListener("click", function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// });


const dropdowns = document.querySelectorAll(".dropdown-content");
const buttons = document.querySelectorAll(".dropbtn");

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event from bubbling up and triggering the window click event listener
    const dropdown = this.nextElementSibling;
    dropdown.classList.toggle("show");
  });
});

window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropbtn")) {
    dropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    });
  }
});





// const buttons = document.querySelectorAll(".dropbtn");

// buttons.forEach((button) => {
//   button.addEventListener("click", function (event) {
//     event.stopPropagation(); // Prevent event from bubbling up and triggering the window click event listener
//     const dropdown = this.parentElement.querySelector(".dropdown-content");
//     dropdown.classList.toggle("show");
//   });
// });

// window.addEventListener("click", function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     const dropdowns = document.querySelectorAll(".dropdown-content");
//     dropdowns.forEach((dropdown) => {
//       if (dropdown.classList.contains("show")) {
//         dropdown.classList.remove("show");
//       }
//     });
//   }
// });


