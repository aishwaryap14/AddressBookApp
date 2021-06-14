const { request, response } = require("express");
const userService = require("../services/userService");
const jwt = require('jsonwebtoken');
exports.addUser = (request, response) => {
    console.log("request: ", request);
    request.checkBody("_firstname","First name cannot be empty").notEmpty().isAlpha().len({min:2});
    request.checkBody("_lastname","Last name cannot be empty").notEmpty().isAlpha().len({min:2});
    request.checkBody("_email","Email is invalid").isEmail();
    request.checkBody("_pwd","Password is Invalid").notEmpty();
    request.checkBody("_address","Address must be provided").notEmpty();
    request.checkBody("_city","City must be provided").notEmpty().isAlpha();
    request.checkBody("_zip","Zip code must be provided").notEmpty();
    request.checkBody("_state","state must be provided").notEmpty();

    const error = request.validationErrors();
    console.log("registration error: ", error);

    if (error)
        response.status(422).send(error);
    else {
        userService.userRegistration(request, (err, data) => {
            if (err) {
                response.status(500).send({errors: err});
            } else {
                response.status(200).send({message: "Successfully registered", data:data});
            }
        });
    }
};

exports.loginUser = (request, response) => {
    console.log("login request: ", request);
    request.checkBody("_email","Email is invalid").isEmail();
    request.checkBody("_pwd","Password is Invalid").notEmpty();

    const error = request.validationErrors();

    if (error)
        response.status(422).send(error);
    else {
        userService.userLogin(request, (err, data) => {
            if (err) {
                response.status(500).send({errors: err});
            } else {
                response.status(200).send({data});
            }
        });
    }
};

