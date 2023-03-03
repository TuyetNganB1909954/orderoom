const RoomSchema = require("../models/RoomModel")

const RoomCtrl = {
    create: async (req,res) =>{
        try{
            const {NameRoom,stateRoom} = req.body
            if( !NameRoom  )
                return res.status(500).json("Vui lòng nhập tên phòng")
            const room = await RoomSchema.findOne({NameRoom})
            if(room)
                return res.status(400).json("Phòng đã tồn tại")
            const NewRoom = new RoomSchema( {NameRoom,stateRoom})
            await NewRoom.save()
            res.json("Thêm phòng mới thành công")
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    },
    read: async (req,res) =>{
        try{
            const room = await RoomSchema.find();
            res.json({room:room})
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    },
    delete: async (req,res) =>{
        try{
           const room = await RoomSchema.findByIdAndDelete(req.params.id)
           res.json("Xóa thành công")
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    },
    update: async (req,res) =>{
        try{
            const {NameRoom} = req.body
            await RoomSchema.findByIdAndUpdate({_id:req.params.id},{NameRoom})
            res.json("Cập nhật thành công")
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    },
    updateRoomStateK: async (req,res) => {
        try{
            const {stateRoom} = req.body
            await RoomSchema.findByIdAndUpdate({_id:req.params.id},{stateRoom})
            res.json("Cập nhật thành công")
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    }
}
module.exports = RoomCtrl