

class User {
    //property
    // firstname;
    // lastname;
    // email;
    // password1;
    // address;
    // city;
    // zip;
    // state;

    //getter setter
    get firstname() {return this._firstname}
    set firstname(firstname) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');
        if (nameRegex.test(firstname))
        this._firstname = firstname;
        else throw 'First Name is Incorrect';
    }

    get lastname() {return this._lastname}
    set lastname(lastname) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');
        if (nameRegex.test(lastname))
        this._lastname = lastname;
        else throw 'Last Name is Incorrect';
    }

    get email() {return this._email}
    set email(email) {
        this._email = email;
    }

    get password1() {return this._password1}
    set password1(password1) {
        this._password1 = password1;
    }

    get password2() {return this._password2}
    set password2(password2) {
    this._password2 = password2;
    }
  
    
    get address() {return this._address}
    set address(address) {
        this._address = address;
    }

    get city() {return this._city}
    set city(city) {
        this._city = city;
    }

    get zip() {return this._zip}
    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{6}$');
        if(zipRegex.test(zip))
        this._zip = zip;
        else throw 'Zip code is Incorrect';
    }

    get state() {return this._state}
    set state(state) {
        this._state = state;
    }

    toString() {
        return "firstname= " + this.firstname + ", lastname= " + this.lastname + ",email= " + this.email +
        ",password= " + this.pwd + ",Address= " + this.address + ",City= " + this.city + ",zip= " + this.zip +
        ",state= " + this.state;
        }

}


