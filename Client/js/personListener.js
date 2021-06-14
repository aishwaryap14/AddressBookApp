let personData = {};
window.addEventListener('DOMContentLoaded', (event) => {
    const fname = document.getElementById('firstname');
    const lname = document.getElementById('lastname');
    const fnameErr = document.querySelector('.fname-error');
    const lnameErr = document.querySelector('.lname-error');
    const email = document.querySelector('#email');
    const emailErr = document.querySelector('.email-error');
    const zip = document.querySelector('#zip');
    const zipErr = document.querySelector('.zip-error');
    fname.addEventListener('input', function() {
        if(fname.value.length == 0) {
            fnameErr.textContent = "";
            return;
        }
        try{
            (new Person()).fname = fname.value;
            fnameErr.textContent = "";
        }catch (e)
        {
            fnameErr.textContent  = e;
        }
    });

    lname.addEventListener('input', function() {
        if(lname.value.length == 0) {
            lnameErr.textContent = "";
            return;
        }
        try{
            (new Person()).lname = lname.value;
            lnameErr.textContent = "";
        }catch (e)
        {
            lnameErr.textContent = e;
        }
    });

    // email.addEventListener('input', function() {
    //     if(email.value.length == 0) {
    //         emailErr.textContent = "";
    //         return;
    //     }
    //     try{
    //         (new Person()).email = email.value;
    //         emailErr.textContent = "";
    //     }catch (e)
    //     {
    //         emailErr.textContent = e;
    //     }
    // });

    zip.addEventListener('input', function() {
        if(zip.value.length == 0) {
            zipErr.textContent = "";
            return;
        }
        try{
            (new Person()).zip = zip.value;
            zipErr.textContent = "";
        }catch (e)
        {
            zipErr.textContent = e;
        }
    });

  });

  const add = () => {
      try{
        //   setPersonContactDetails();
          let personData = createPersonContact();
        //   dashboardModal.span.onclick();
          createAndUpdatePerson(personData);
          resetForm();
      } catch (e) {
          return;
      }
  }

  const update = (node) => {
    try{
        console.log("person data ", personContactList.data._id)
        console.log("node id "+ node.id);
        let personData = personContactList.data.find(personCont => personCont._id == node.id);
        // setPersonContactDetails(personData);
        setModal(personData);
        setPersonContactDetails();
        // personData = createPersonContact();
        console.log("person data ", personData);
        // createAndUpdatePerson(personData);
        resetForm();
    } catch (e) {
        return;
    }
}

const setModal = (personData) => {
    setValue('#firstname', personData._fname); 
    setValue('#lastname', personData._lname); 
    setValue('#email', personData._email); 
    setValue('#address', personData._address); 
    setValue('#city', personData._city); 
    setValue('#zip', personData._zip); 
    setValue('#state', personData._state); 
    
}

const setPersonContactDetails = (personData) => {
    let person = new Person();

    try {
        person._fname = getInputValueById('#firstname');
    } catch (e) {
        setTextValue('.fname-error', e);
        throw e;
    }
    try {
        person._lname = getInputValueById('#lastname');
    } catch (e) {
        setTextValue('.lname-error', e);
        throw e;
    }
    person._email = getInputValueById('#email');
    person._address = getInputValueById('#address');
    person._city = getInputValueById('#city');
    person._zip = getInputValueById('#zip');
    person._state = getInputValueById('#state');
}

  const createAndUpdatePerson = (personData)=> {
    //   let personContactList = JSON.parse(localStorage.getItem('PersonContactList'));
    makeServiceCall("POST", "http://localhost:3000/person/addContact", true, personData)
    .then(responseText => {
        console.log("Update response: ", responseText);
        resetForm();
        window.location.replace(site.dashboard_page);
    })
    .catch(error =>{
        throw error;
    });
    //   if (personContactList.data != undefined) {
    //       personContactList.data.push(personData);
    //   } else {
    //       personContactList.data = [personData]
    //   }
      alert(personContactList.data.toString());
    //   localStorage.setItem('PersonContactList', JSON.stringify(personContactList))
  }


  const updatePersonAddress = (personData) => {
      console.log(personData);
  }


  const createPersonContact = () => {
      let personData = new Person();
      try{
          personData.fname = getInputValueById('#firstname');
      } catch (e) {
        setTextValue('.fname-error', e);
        throw e;
      }

      try{
          personData.lname = getInputValueById('#lastname');
      } catch (e) {
        setTextValue('.fname-error', e);
        throw e;
      }
    personData.email = getInputValueById('#email');
    personData.address = getInputValueById('#address');
    personData.city = getInputValueById('#city');
    personData.zip = getInputValueById('#zip');
    personData.state = getInputValueById('#state');
    alert(personData.toString());
    return personData;
  }

  const getInputValueById = (id) => {
      let value = document.querySelector(id).value;
      return value;
  }

  const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const resetForm = () => {
    setValue('#firstname', "");
    setValue('#lastname', "");
    setValue('#email', "");
    setValue('#address', "");
    setValue('#city', "");
    setValue('#zip', "");
    setValue('#state', "Select State");
}

const setValue = (id,value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const remove = (node) => {
    console.log("node id "+ node.id);
    let personData = personContactList.data.find(personCont => personCont._id == node.id);
    if (!personData) return;
    const index = personContactList.data
                    .map(personCont => personCont._id)
                    .indexOf(personData._id);
  
    personContactList.data.splice(index, 1);
    const deleteURL = "http://localhost:3000/person/deleteContact/" + personData._id.toString();
    makeServiceCall("DELETE", deleteURL, false)
        .then(responseText => {
        console.log("delete response: ",responseText);
        createInnerHtml();
        })
        .catch(error => {
          console.log("DELETE Error status: "+ JSON.stringify(error));
        });
        window.location.replace(site.dashboard_page);
  }