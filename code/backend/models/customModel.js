const mongoose = require("mongoose")

const CustomSchema = new mongoose.Schema({
    customname:{
        required: true,
        type: String,
        Trim: true
    },
    customaddress:{
        required: true,
        type: String,
        Trim: true
    },
    customphone:{
        required: true,
        type: Number,
    }, 
    cccd:{
        required: true,
        type: Number,
    },
    orderDate:{
        required: true,
        type: String
    },
    cancelDate:{
        type: Date
    },
    room:{
        type: Array,
        default:[]
    }
})
module.exports = mongoose.model("custom", CustomSchema)