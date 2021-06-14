const model = require("../model/userModel");
const emailExistence = require('email-existence');
const bycrypt = require('bcryptjs');
// const jwt = require("../middleware/auth");
// const mailler = require("../middleware");
const jwt = require('jsonwebtoken');
const { request, response } = require("express");

exports.userRegistration = (request, callback) => {
    try{
        let response = {};
        console.log("Entered email =", request.body._email);
        // emailExistence.check(request.body.email, (err, result) => {
        //     if(result) {
                model.registerUser.findOne({ "_email": request.body._email}, (err, user) => {
                    if (user)
                    callback("email already exist");
                    else {
                        let userDetails;
                        bycrypt.hash(request.body._pwd, 10, (err, encrypted) => {
                            userDetails = new model.registerUser({
                                "_firstname": request.body._firstname,
                                "_lastname": request.body._lastname,
                                "_email": request.body._email,
                                "_pwd": encrypted,
                                "_address": request.body._address,
                                "_city": request.body._city,
                                "_zip": request.body._zip,
                                "_state": request.body._state
                            })
                            userDetails.save()
                                .then(user => {
                                    callback(null, user);
                                })
                                .catch(err => {
                                    callback(err);
                                });
                        })
                    }
                })
            // }
        // }
        // )

    } catch (e) {

    }
}

exports.userLogin = (request, callback) => {
    let response = {};
    model.registerUser.findOne({_email: request.body._email}, (err,user) => {
        if (user) {
            bycrypt.compare(request.body._pwd, user._pwd, (err,encrypted) => {
                if(!encrypted)  {
                    callback("Password not matched");
                } else {
                    const token = jwt.sign ({
                        email: request.body._email,
                        userId: request.body._id
                    }, 'secret',{expiresIn: "600s"});

                    console.log("Token: ",token);
                    response._firstname = user._firstname;
                    response._lastname = user._lastname;
                    response.token = token;
                    response._email = user._email;
                    response.userId = user._id;
                    callback(null, response);
                }
            })
        } else {
            callback("User not found");
        }
    });
}
