//Add Modal
let modal = document.getElementById("addModal");
let span = document.getElementsByClassName("close")[0];
let addbtn = document.getElementById("add-button");
  
  addbtn.onclick = function(event) {
    modal.style.display = "block";
  }

  span.onclick = function() {
    resetForm();
    modal.style.display = "none";
  }

  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }

//Update Modal
// let modal1 = document.getElementById("#updateModal");
// let editbtn = document.getElementById("edit-button");
  
//   editbtn.onclick = function(event) {
//     if (event.target == modal1) {
//     modal1.style.display = "block";
//   }
// }

  // window.onclick = function(event) {
  //   if (event.target == modal1) {
  //     modal1.style.display = "none";
  //   }
  // }

  