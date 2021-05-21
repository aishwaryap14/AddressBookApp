const { request, response } = require("express");
const userService = require("../services/userService");
const jwt = require('jsonwebtoken');
exports.addUser = (request, response) => {
    request.checkBody("fname","First name cannot be empty").notEmpty().isAlpha().len({min:2});
    request.checkBody("lname","Last name cannot be empty").notEmpty().isAlpha().len({min:2});
    request.checkBody("email","Email is invalid").isEmail();
    request.checkBody("pwd","Password is Invalid").notEmpty();
    request.checkBody("address","Address must be provided").notEmpty().len({max:20});
    request.checkBody("city","City must be provided").notEmpty().isAlpha();
    request.checkBody("zip","Zip code must be provided").notEmpty().len({max:6});
    request.checkBody("state","state must be provided").notEmpty();

    const error = request.validationErrors();

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
    request.checkBody("email","Email is invalid").isEmail();
    request.checkBody("pwd","Password is Invalid").notEmpty();

    const error = request.validationErrors();

    if (error)
        response.status(422).send(error);
    else {
        userService.userLogin(request, (err, data) => {
            if (err) {
                response.status(500).send({errors: err});
            } else {
                response.status(200).send({message: "Successfully login", data:data});
            }
        });
    }
};

