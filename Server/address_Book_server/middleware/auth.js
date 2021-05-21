const { request, response } = require("express");
const jwt = require('jsonwebtoken');


exports.checkToken = (request, response, next) => {
    console.log(request.headers['token'])
    try{

    let token = request.headers['token'];
    if(token == undefined || token == null) {
        throw 'No token available'
    } else {
        jwt.verify(token, 'secret', (error, data) => {
            if(error) {
                return response.status(401).send(error);
            }else{
            next ();
            }
        })
    }
} catch (error) {
    return response.send(error);
}}