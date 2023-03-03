const mongoose  = require('mongoose')
const KindOfRoomSchema = new mongoose.Schema({
    KindOfRoomName:{
        required: true,
        type: String,
        Trim: true
    },
    description:{
        required: true,
        type: String,
        Trim: true
    },
    KindOfRoomImage:{
        type: Object,
        required: true
    },
    KindOfRoomPrice:{
        required: true,
        type: String , 
    },
    rooms:{
        type: Array,
        default:[]
    },
},{
    timeseries: true
})
module.exports = mongoose.model("kindofroom",KindOfRoomSchema)