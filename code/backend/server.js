const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const cookie_parser = require("cookie-parser")
const fileupload = require("express-fileupload")


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookie_parser())
app.use(fileupload({
    useTempFiles: true
}))
mongoose.set("strictQuery", false);
const URI = process.env.MONGOODB_URL
async function connect(){
    try{
        await mongoose.connect(URI)
        console.log("Connect to mongoodb")
    }catch{
        console.log("UnConnect to mongoodb")
    }
}
connect()

app.use("/api", require('./routers/FloorRoute'))
app.use("/api", require('./routers/RoomRouter'))
app.use("/api", require('./routers/KindOfRoomRouter'))
app.use("/api", require('./routers/UploadRouter'))
app.use("/api", require('./routers/CustomRouter'))

const PORT = process.env.port;
app.listen(PORT,() =>{
    console.log(`Server run on port ${PORT}`)
})
