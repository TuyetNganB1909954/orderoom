const mongoose = require("mongoose")

const RoomSchema = new mongoose.Schema({
    NameRoom:{
        required: true,
        type: String,
        Trim: true
    },
    stateRoom: {
        type: String,
        Trim: true,
        // required: true,
    }, 
},{
    timestamp:true
})
module.exports = mongoose.model("room", RoomSchema)