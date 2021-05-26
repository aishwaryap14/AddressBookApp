let personContactList;
window.addEventListener('DOMContentLoaded', (event) => {
    personContactList = getPersonContactDataFromStorage();
    createInnerHtml();
  });

  const getPersonContactDataFromStorage = () => {
    return localStorage.getItem('PersonContactList') ? 
                        JSON.parse(localStorage.getItem('PersonContactList')) : [];
  }

  const createInnerHtml = () => {
    // const cardData =`<div class="cards"><div class="card">`;
    // const cardEnd = `</div></div>`;
    // let innerHtml = `${cardData}`;
    // let personContactList = createPersonJSON();
    console.log(personContactList.length);
    console.log("personContactList: ", personContactList);
    let num = personContactList.length;

    for (const personData of personContactList) 
    // for (let i=0; i<personContactList.length; i++)
    {
  //   innerHtml = `${innerHtml}
  //   <h4><b>${personData.fname} &nbsp ${personData.lname}</b></h4>
  //   <p><img id="1" onclick="remove(this)" alt="delete" src="../images/logo/edit4.png"> &nbsp&nbsp
  //   <img id="1"  onclick="update(this)" alt="edit" src="../images/logo/delete2.png"></p>
  //   </div></div>`
  // ;
      let fetch = document.querySelector('#card-contents').innerHTML;
      innerHtml = `
      <div class="card">
      <p>Hello <b> ${personData._firstname}&nbsp${personData._lastname}</b></p>
      <p><a id="edit-button" href="#updateModal"><img id="1" onclick="update(this)"  alt="delete" src="../images/logo/pencil-256.webp"></a> &nbsp&nbsp
      <img id="1"  onclick="remove(this)" alt="edit" src="../images/logo/dumpster-recycle-trash-container-bin-garbage-256.webp"></p>
      </div>` + fetch;
      document.querySelector('#card-contents').innerHTML = innerHtml;
    }
  
}

// const createPersonJSON = () => {
//   let personListLocal = [
//       {
//       fname: 'Narayan',
//       lname: 'Mahadevan',
//       email: "email@gmail.com",
//       // pwd: '500000',
//       address: 'Nashik',
//       city: "Nashik",
//       zip: "222444",
//       state: "Maharashtra",
//   }
//   ,
//   {
//     fname: 'Aishwarya',
//     lname: 'Potdar',
//     email: "email@gmail.com",
//     // pwd: '500000',
//     address: 'Nashik',
//     city: "Nashik",
//     zip: "222444",
//     state: "Maharashtra",
// }
// ,
// {
//   fname: 'Dilip',
//   lname: 'Potdar',
//   email: "email@gmail.com",
//   // pwd: '500000',
//   address: 'Nashik',
//   city: "Nashik",
//   zip: "222444",
//   state: "Maharashtra",
// }
// ]
//   return personListLocal;
// }
