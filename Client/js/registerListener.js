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
        if(password2.value.length == 0) {
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