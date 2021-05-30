const mongoose = require('mongoose');

// person schema
const person = mongoose.Schema(
    {
        _fname:{
            type:String,
            required: [true, "first name cannot be empty"]
        },
        _lname:{
            type:String,
            required: [true, "last name cannot be empty"]
        },
        _email:{
            type:String,
            required: [true, "email cannot be empty"]
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
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'users'
        },
    },{ timestamps: true}
)

exports.person = mongoose.model("person", person);