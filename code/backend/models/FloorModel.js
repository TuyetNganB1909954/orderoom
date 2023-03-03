const mongoose  = require('mongoose')
const FloorSchema = new mongoose.Schema({
    FloorName:{
        required: true,
        type: String,
        Trim: true
    },
    rooms:{
        type: Array,
        default:[]
    },
},{
    timeseries: true
})
module.exports = mongoose.model("floor",FloorSchema)
 