const mongoose = require('mongoose');

const registration = mongoose.Schema(
    {
        fname:{
            type:String,
            required: [true, "first name cannot be empty"]
        },
        lname:{
            type:String,
            required: [true, "last name cannot be empty"]
        },
        email:{
            type:String,
            required: [true, "email cannot be empty"]
        },
        pwd:{
            type:String,
            required: [true, "password must be provided"]
        },
        address:{
            type:String,
            required: [true, "Address cannot be empty"]
        },
        city:{
            type:String,
            required: [true, "city cannot be empty"]
        },
        state:{
            type:String,
            required: [true, "state cannot be empty"]
        },
        zip:{
            type:String,
            required: [true, "zip code cannot be empty"]
        },
    },{ timeStamps: true}
)

exports.registerUser = mongoose.model("Users", registration);

