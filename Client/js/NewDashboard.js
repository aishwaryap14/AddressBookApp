let personContactList;
window.addEventListener('DOMContentLoaded', (event) => {
    getPersornCotactDataFromServer();
  });

  const getPersornCotactDataFromServer = () => {
    makeServiceCall("GET", "http://localhost:3000/person/getAll", true)
      .then(responseText => {
      console.log(responseText);
      personContactList = JSON.parse(responseText);
      localStorage.setItem('PersonContactList', responseText);
      console.log(personContactList);
      // personContactList = responseText;
      createInnerHtml();
      // processPersonContactDataResponse();
    })
    .catch(error => {
      console.log("GET Error Status: "+ error);
      personContactList = [];
      // processPersonContactDataResponse();
    });
  }


  const createInnerHtml = () => {
   
    console.log("person contact list length: ",personContactList.data.length);
    console.log("personContactList: ", personContactList.data);
    let num = personContactList.data.length;

    for (const personData of personContactList.data) 
    {
      let fetch = document.querySelector('#card-contents').innerHTML;
      innerHtml = `
      <div class="card">
      <p>Hello <b> ${personData._fname}&nbsp${personData._lname}</b></p>
      <div ><a id="${personData._id}" onclick="update(this)" data-toggle="modal" data-target="updateModal" name="edit-button" href="#updateModal">
      Update</a> &nbsp&nbsp
      <img id="${personData._id}"  onclick="remove(this)" alt="delete" src="../images/logo/dumpster-recycle-trash-container-bin-garbage-256.webp"></div>
      </div>` + fetch;
      document.querySelector('#card-contents').innerHTML = innerHtml;
    }
    // <img id="${personData._id}"  alt="edit" src="../images/logo/pencil-256.webp">
}


let modal1 = document.getElementById("updateModal");
let editbtn = document.getElementsByName("edit-button");

  editbtn.onclick = function() {
    // if (event.target == modal1) {
    modal1.style.display = "block";
  // }
}
// window.onclick = function() {
//   // if (event.target == modal1) {
//     modal1.style.display = "block";
//   // }
// }
