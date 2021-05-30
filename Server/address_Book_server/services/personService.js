const model = require("../model/personModel");
// const emailExistence = require('email-existence');
const { request, response } = require("express");



exports.addPersonContact = (request, callback) => {
    try{
        console.log("Entered email service1 =", request.body._email);
        // emailExistence.check(request.body.email, (err, result) => {
        //     if(result) {
                model.person.findOne({ "_email": request.body._email}, (err, user) => {
                    
                    if (user)
                    callback("Contact already exist");
                    else {
                        console.log("Entered email service2 =", request.body._email);
                        // console.log("request= ",request);
                        let contactDetails = new model.person({
                                "_fname": request.body._fname,
                                "_lname": request.body._lname,
                                "_email": request.body._email,
                                "_address": request.body._address,
                                "_city": request.body._city,
                                "_zip": request.body._zip,
                                "_state": request.body._state,
                                "userId": request.headers.userid
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