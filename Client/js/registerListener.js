let registrationData = {};

window.addEventListener('DOMContentLoaded', (event) => {
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const fnameErr = document.querySelector('.fname-error');
    const lnameErr = document.querySelector('.lname-error');
    const email = document.querySelector('#email');
    const emailErr = document.querySelector('.email-error');
    const zip = document.querySelector('#zip');
    const zipErr = document.querySelector('.zip-error');

    const password1 = document.querySelector('#pwd');
    const password2 = document.querySelector('#conPwd');
    const passErr = document.querySelector('#confwd-err');

    firstname.addEventListener('input', function() {
        if(firstname.value.length == 0) {
            fnameErr.textContent = "";
            return;
        }
        try{
            (new User()).firstname = firstname.value;
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
            (new User()).lastname = lastname.value;
            lnameErr.textContent = "";
        }catch (e)
        {
            lnameErr.textContent = e;
        }
    });

    zip.addEventListener('input', function() {
        if(zip.value.length == 0) {
            zipErr.textContent = "";
            return;
        }
        try{
            (new User()).zip = zip.value;
            zipErr.textContent = "";
        }catch (e)
        {
            zipErr.textContent = e;
        }
    });

    password2.addEventListener('input', function() {
        if(password2.value.length == 0 || password1.value === password2.value) {
            passErr.textContent = "";
            return;
        }

        try {
            passwordCheck(password1.value, password2.value);
        } catch (e){
            passErr.textContent = e;
        }
    })

    let passwordCheck = (pwd1, pwd2) => {
        if(pwd1 === pwd2)
        alert("Password Matched");
        else throw 'Password did not matched';
    }

  });

  const  register = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
        let registrationData = setUserContactsObject();
        registerUser(registrationData);
    } catch (e) {
        return;
    }
  }

  const setUserContactsObject =() => {
    let registrationData = new User();
    try{
        registrationData.firstname = getInputValueById('#firstname');
    } catch (e) {
      setTextValue('.fname-error', e);
      throw e;
    }

    try{
        registrationData.lastname = getInputValueById('#lastname');
    } catch (e) {
      setTextValue('.fname-error', e);
      throw e;
    }

    try{
        registrationData.email = getInputValueById('#email');
    } catch (e) {
      setTextValue('.fname-error', e);
      throw e;
    }
    // userContactObj.firstname = getInputValueById('#firstname');
    // userContactObj.lastname = getInputValueById('#lastname');
    // userContactObj.email = getInputValueById('#email');
    registrationData.pwd = getInputValueById('#pwd')
    // userContactObj.password2 = getInputValueById('#conPwd');
    registrationData.address = getInputValueById('#address');
    registrationData.city = getInputValueById('#city');
    registrationData.zip = getInputValueById('#zip');
    registrationData.state = getInputValueById('#state');
    alert(registrationData.toString());
    return registrationData;
    }

const registerUser = (registrationData) => {
    // let postURL = site.server_url;
    // let postURL = "http://localhost:3000/users/register";
    // let methodCall = "POST";
    // if(isUpdate) {
    //     methodCall = "PUT";
    //     // postURL = postURL + employeePayrollObj.id.toString();
    //     postURL = "http://localhost:3002/update/" + employeePayrollObj._id.toString();
    // }
    makeServiceCall("POST", "http://localhost:3000/users/register", true, registrationData)
    .then(responseText => {
        console.log("Update response: ", responseText);
        // resetForm();
        window.location.replace(site.login_page);
    })
    .catch(error =>{
        throw error;
    });
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}