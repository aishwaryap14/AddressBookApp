const mongoose = require('mongoose');

// person schema
const person = mongoose.Schema(
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
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'users'
        },
    },{ timeStamps: true}
)

exports.person = mongoose.model("person", person);