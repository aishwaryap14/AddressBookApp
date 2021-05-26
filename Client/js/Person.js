class Person {
    // firstname;
    // lastname;
    // email;
    // address;
    // city;
    // zip;
    // state;

    get firstname() {return this._firstname;}
    set firstname(firstname) {
        let fnameRegex = RegExp('^[a-zA-Z\\s]{2,}$');
        if (fnameRegex.test(firstname))
        this._firstname = firstname;
        else throw 'First Name is Incorrect';
    }

    get lastname() {return this._lastname;}
    set lastname(lastname) {
        let lnameRegex = RegExp('^[a-zA-Z\\s]{2,}$');
        if (lnameRegex.test(lastname))
        this._lastname = lastname;
        else throw 'Last Name is Incorrect';
    }

    get email() {return this._email}
    set email(email) {
        this._email = email;
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
        ",Address= " + this.address + ",City= " + this.city + ",zip= " + this.zip +
        ",state= " + this.state;
        }
}

