const { request, response } = require("express");
const personService = require("../services/personService");

exports.addContact = (request, response) => {
    console.log("Entered email =", request.body.email);
    request.checkBody("fname","First name cannot be empty").notEmpty().isAlpha().len({min:2});
    request.checkBody("lname","Last name cannot be empty").notEmpty().isAlpha().len({min:2});
    request.checkBody("email","Email is invalid").isEmail();
    request.checkBody("address","Address must be provided").notEmpty().len({max:20});
    request.checkBody("city","City must be provided").notEmpty().isAlpha();
    request.checkBody("zip","Zip code must be provided").notEmpty().len({max:6});
    request.checkBody("state","state must be provided").notEmpty(); 
    // request.checkBody("userId","Id must be provided").notEmpty();

    const error = request.validationErrors();

    if (error)
        response.status(422).send(error);
    else {
        personService.addPersonContact(request, (err, data) => {
            if (err) {
                response.status(500).send({errors: err});
            } else {
                response.status(200).send({message: "Contact Added Successfully"});
            }
        });
    }
}


exports.getAll = (request, response) => {
    const error = request.validationErrors();
    console.log(request.headers);
    console.log("userId: ",request.headers['userid']);
    if (error)
        response.status(422).send(error);
    else {
        personService.getAllContact(request, (err, data) => {
            if (err) {
                response.status(500).send({errors: err});
            } else {
                response.status(200).send({message: "Contact Retrived Successfully", data:data});
            }
        });
    }
}

exports.updateContact = (request, response) => {
    const error = request.validationErrors();
    console.log("userId: ",request.headers['userid']);
    console.log("id in controller1: ",request.params._id);
    if (error)   {
        response.status(422).send(error);
    } else {
        console.log("id in controller2: ",request.params._id);
        let contactDetails = {
        "fname": request.body.fname === null ? null : request.body.fname,
        "lname": request.body.lname === null ? null : request.body.lname,
        "email": request.body.email === null ? null : request.body.email,
        "address": request.body.address === null ? null : request.body.address,
        "city": request.body.city === null ? null : request.body.city,
        "zip": request.body.zip === null ? null : request.body.zip,
        "state": request.body.state === null ? null : request.body.state,
        // "userId": request.body.userId === null ? null : request.body.userId
        }
        personService.updateContactDetails(request, contactDetails, (err,data) =>{
            if(err) {
                response.status(500).send("500 server Error");
            } else {
                response.status(200).send({message:"Contact Updated Successfully", data:data});
            }
        });
    }
}

exports.deleteContact = (request, response) => {
    const error = request.validationErrors();
    console.log("userId: ",request.headers['userid']);
    console.log("id in controller delete: ",request.params._id);
    if(error) {
        response.status(422).send(error);
    } else {
        personService.deleteContactDetails(request, (err) => {
            if (error) {
                request.status(500).send("500 server error");
            } else {
                response.status(200).send({message: "Contact Deleted Successfully"});
            }
        })
    }
}