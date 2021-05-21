const model = require("../model/personModel");
// const emailExistence = require('email-existence');
const { request, response } = require("express");



exports.addPersonContact = (request, callback) => {
    try{
        console.log("Entered email =", request.body.email);
        // emailExistence.check(request.body.email, (err, result) => {
        //     if(result) {
                model.person.findOne({ "email": request.body.email}, (err, user) => {
                    if (user)
                    callback("Contact already exist");
                    else {
                        let contactDetails = new model.person({
                                "fname": request.body.fname,
                                "lname": request.body.lname,
                                "email": request.body.email,
                                "address": request.body.address,
                                "city": request.body.city,
                                "zip": request.body.zip,
                                "state": request.body.state,
                                "userId": request.body.userId
                            })
                            contactDetails.save()
                                .then(user => {
                                    callback(null, user);
                                })
                                .catch(err => {
                                    callback(err);
                                });
                    }
                });
        //     }
        // })

    } catch (e) {

    }
}


exports.getAllContact = (request, callback) => {
    let id = request.headers['userid'];
    console.log("user id in services: ",id);
    // try{
        model.person.find({userId: id}, (err, data) => {
            if(err) {
                callback(err);
            } else {
                console.log("service data:",data);
                callback(null, data);
            }
        });
    }


exports.updateContactDetails = (request, data, callback) => {
    let id = request.params._id;
    console.log("Id is:",id);
    try {
        model.person.findByIdAndUpdate(id, data)
        .then(user => {
            callback(null, user);
        })
        .catch(err => {
            callback(err);
        });
    } catch (err)
    { }
}

exports.deleteContactDetails = (request, callback) => {
    let id = request.params._id;
    console.log("Id in delete service:",id); 
    try {
        model.person.findByIdAndDelete(id)
        .then(user => {
            callback(null, user);
        })
        .catch(err => {
            callback(err);
        });

    }catch (err) {
        // response.status(404).send("404 Not Found");
    }
}