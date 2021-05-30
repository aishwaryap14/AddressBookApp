class Person {
    // id;
    // fname;
    // lname;
    // email;
    // address;
    // city;
    // zip;
    // state;
    get id() {return this._id}
    set id(id) {
        this._id = email;
    }

    get fname() {return this._fname;}
    set fname(fname) {
        let fnameRegex = RegExp('^[a-zA-Z\\s]{2,}$');
        if (fnameRegex.test(fname))
        this._fname = fname;
        else throw 'First Name is Incorrect';
    }

    get lname() {return this._lname;}
    set lname(lname) {
        let lnameRegex = RegExp('^[a-zA-Z\\s]{2,}$');
        if (lnameRegex.test(lname))
        this._lname = lname;
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
        return "fname= " + this.fname + ", lname= " + this.lname + ",email= " + this.email +
        ",Address= " + this.address + ",City= " + this.city + ",zip= " + this.zip +
        ",state= " + this.state;
        }
}

