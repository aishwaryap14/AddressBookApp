const mongoose = require('mongoose');

const registration = mongoose.Schema(
    {
        _firstname:{
            type:String,
            required: [true, "first name cannot be empty"]
        },
        _lastname:{
            type:String,
            required: [true, "last name cannot be empty"]
        },
        _email:{
            type:String,
            required: [true, "email cannot be empty"]
        },
        _pwd:{
            type:String,
            required: [true, "password must be provided"]
        },
        _address:{
            type:String,
            required: [true, "Address cannot be empty"]
        },
        _city:{
            type:String,
            required: [true, "city cannot be empty"]
        },
        _state:{
            type:String,
            required: [true, "state cannot be empty"]
        },
        _zip:{
            type:String,
            required: [true, "zip code cannot be empty"]
        },
    },{ timestamps: true}
)

exports.registerUser = mongoose.model("Users", registration);

