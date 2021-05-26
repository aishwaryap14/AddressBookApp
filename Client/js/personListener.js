window.addEventListener('DOMContentLoaded', (event) => {
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const fnameErr = document.querySelector('.fname-error');
    const lnameErr = document.querySelector('.lname-error');
    const email = document.querySelector('#email');
    const emailErr = document.querySelector('.email-error');
    const zip = document.querySelector('#zip');
    const zipErr = document.querySelector('.zip-error');
    firstname.addEventListener('input', function() {
        if(firstname.value.length == 0) {
            fnameErr.textContent = "";
            return;
        }
        try{
            (new Person()).firstname = firstname.value;
            fnameErr.textContent = "";
        }catch (e)
        {
            fnameErr.textContent  = e;
        }
    });

    lastname.addEventListener('input', function() {
        if(lastname.value.length == 0) {
            lnameErr.textContent = "";
            return;
        }
        try{
            (new Person()).lastname = lastname.value;
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
          let personData = createPersonContact();
        //   dashboardModal.span.onclick();
          createAndUpdatePerson(personData);
          resetForm();
      } catch (e) {
          return;
      }
  }

  const update = () => {
    try{
        let personData = createPersonContact();
        createAndUpdatePerson(personData);
        resetForm();
    } catch (e) {
        return;
    }
}

  function createAndUpdatePerson(personData) {
      let personContactList = JSON.parse(localStorage.getItem('PersonContactList'));
      if (personContactList != undefined) {
          personContactList.push(personData);
      } else {
          personContactList = [personData]
      }
      alert(personContactList.toString());
      localStorage.setItem('PersonContactList', JSON.stringify(personContactList))
  }

  const createPersonContact = () => {
      let personData = new Person();
      try{
          personData.firstname = getInputValueById('#firstname');
      } catch (e) {
        setTextValue('.fname-error', e);
        throw e;
      }

      try{
          personData.lastname = getInputValueById('#lastname');
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
    setValue('#firstname', '');
    setValue('#lastname', '');
    setValue('#email', '');
    setValue('#address', '');
    setValue('#city', '');
    setValue('#zip', '');
    setValue('#state', '');
}

const setValue = (id,value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}