let userContactObj = {};

window.addEventListener('DOMContentLoaded', (event) => {
    const email = document.querySelector('#email');
    const emailErr = document.querySelector('.email-error')
    const pwd = document.querySelector('#password');
    const pwdErr = document.querySelector('.pwd-error');

    // email.addEventListener('input', function() {
    //     if(email.value.length == 0) {
    //         emailErr.textContent = "";
    //         return;
    //     } else {
    //         (new User()).email = email.value;
    //         emailErr.textContent = "";
    //     }
       
    // });
    email.addEventListener('input', function() {
        if(email.value.length == 0) {
            emailErr.textContent = "";
            return;
        }
        try{
            (new User()).email = email.value;
            emailErr.textContent = "";
        }catch (e)
        {
            emailErr.textContent = e;
        }
    });

    pwd.addEventListener('input', function() {
        if(pwd.value.length == 0) {
            pwdErr.textContent = "";
            return;
        } else {
            (new User()).pwd = pwd.value;
            pwdErr.textContent = "";
        }
    });
});



const login = (event) => {
    // event.preventDefault();
    // event.stopPropagation();
    try {
        setUserContactsObject();
        registerOrLoginUser();
    } catch (e) {
        return;
    }
  }

  const setUserContactsObject =() => {
    userContactObj.email = getInputValueById('#email');
    userContactObj.pwd = getInputValueById('#password');
    }

const registerOrLoginUser = () => {
    // let postURL = site.server_url;
    let postURL = "http://localhost:3000/users/login";
    let methodCall = "POST" ;
    // if(isUpdate) {
    //     methodCall = "PUT";
    //     // postURL = postURL + employeePayrollObj.id.toString();
    //     postURL = "http://localhost:3002/update/" + employeePayrollObj._id.toString();
    // }
    let data = {};
    makeServiceCall(methodCall, postURL, true, userContactObj)
    .then(responseText => {
        // console.log("Update response: ", responseText);
        // resetForm();
        responseData = JSON.parse(responseText);
        // let responseData = JSON.parse(data);
        let token = responseData.data.token;
        let userId = responseData.data.userId;
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('userId', userId);
        window.location.replace(site.dashboard_page);
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