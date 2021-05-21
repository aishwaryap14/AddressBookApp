class AddressBook {
    //property
    fname;
    lname;
    email;
    pwd;
    address;
    city;
    zip;
    state;

    //getter setter
    get fname() {return this.fname}
    set fname(fname) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');
        if (nameRegex.test(fname))
        this.fname = this.fname;
        else throw 'First Name is Incorrect';
    }

    get lname() {return this.lname}
    set lname(lname) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');
        if (nameRegex.test(lname))
        this.lname = this.lname;
        else throw 'Last Name is Incorrect';
    }

    get email() {return this.email}
    set email(email) {
        this.email = this.email;
    }

    get pwd() {return this.pwd}
    set pwd(pwd) {
        this.pwd = this.pwd;
    }

    get address() {return this.address}
    set address(address) {
        this.address = this.address;
    }

    get city() {return this.city}
    set city(city) {
        this.city = this.city;
    }

    get zip() {return this.zip}
    set zip(zip) {
        this.zip = this.zip;
    }

    get state() {return this.state}
    set state(state) {
        this.state = this.state;
    }

    toString() {
        return "firstname= " + this.fname + ", lastname= " + this.lname + ",email= " + this.email +
        ",password= " + this.pwd + ",Address= " + this.address + ",City= " + this.city + ",zip= " + this.zip +
        ",state= " + this.state;
        }

}



// let addressbook = new AddressBook ("Mark", "clay", "mark@gmail.com", "ABCd@1234", "Dubai arab emirate", "DubaiCity",
// "876888","DubaiState");
// console.log(addressbook.toString());
// try {
//     addressbook.fname = "Aish";
//     console.log(addressbook.toString());
// } catch (e) {
//     console.error(e);
// }