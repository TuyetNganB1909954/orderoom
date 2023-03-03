const KindOfRoomSchema = require("../models/KindOfRoomModel")

const KindOfRoomCtrl = {
    create: async(req, res) => {
        try{
            const {KindOfRoomName,description,KindOfRoomImage, KindOfRoomPrice} = req.body
            const kindofroomname = await KindOfRoomSchema.findOne({KindOfRoomName})
            if(kindofroomname)
                return res.status(400).json("Loại phòng đã tồn tại")
            if(!KindOfRoomName)
                return res.status(400).json("Vui lòng nhập thông tin phòng")
            const newKindOfRoom = new KindOfRoomSchema( {KindOfRoomName,description,KindOfRoomImage, KindOfRoomPrice})
            await newKindOfRoom.save()
            res.json("Thêm tầng phòng thành công")
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    }, 
    delete: async(req, res) => {
        try{
            await KindOfRoomSchema.findByIdAndDelete(req.params.id)
            res.json({msg:"Xóa thành công"})
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    },
    read: async(req,res)=>{
        try{
          const kindofroom= await KindOfRoomSchema.find()
          res.json({kindofroom:kindofroom})
        }catch(error){
            return res.status(500).json({msg: error.message})
        }  
    },
    update: async(req, res) => {
        try{
            const {KindOfRoomName,description,KindOfRoomImage, KindOfRoomPrice} = req.body
            await KindOfRoomSchema.findByIdAndUpdate({_id:req.params.id},{KindOfRoomName,description,KindOfRoomImage, KindOfRoomPrice})
            res.json({msg:"Cập nhật thành công"})
        }catch(error){

        }
    } 
}
module.exports = KindOfRoomCtrl