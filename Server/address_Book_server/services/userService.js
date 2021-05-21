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
        console.log("Entered email =", request.body.email);
        // emailExistence.check(request.body.email, (err, result) => {
        //     if(result) {
                model.registerUser.findOne({ "email": request.body.email}, (err, user) => {
                    if (user)
                    callback("email already exist");
                    else {
                        let userDetails;
                        bycrypt.hash(request.body.pwd, 10, (err, encrypted) => {
                            userDetails = new model.registerUser({
                                "fname": request.body.fname,
                                "lname": request.body.lname,
                                "email": request.body.email,
                                "pwd": encrypted,
                                "address": request.body.address,
                                "city": request.body.city,
                                "zip": request.body.zip,
                                "state": request.body.state
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
    model.registerUser.findOne({email: request.body.email}, (err,user) => {
        if (user) {
            bycrypt.compare(request.body.pwd, user.pwd, (err,encrypted) => {
                if(!encrypted)  {
                    callback("Password not matched");
                } else {
                    const token = jwt.sign ({
                        email: request.body.email,
                        userId: request.body._id
                    }, 'secret',{expiresIn: "600s"});

                    console.log("Token: ",token);
                    response.fname = user.fname;
                    response.lname = user.lname;
                    response.token = token;
                    response.email = user.email;
                    response.userId = user._id;
                    callback(null, response);
                }
            })
        } else {
            callback("User not found");
        }
    });
}
