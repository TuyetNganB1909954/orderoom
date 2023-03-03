const FloorSchema = require("../models/FloorModel")

const FloorCtrl = {
    create: async(req, res) => {
        try{
            const {FloorName,rooms} = req.body
            const floorName = await FloorSchema.findOne({FloorName})
            if(floorName)
                return res.status(400).json("Tầng phòng đã tồn tại")
            if(!FloorName)
                return res.status(400).json("Tên tầng phòng trống")
            const newFloor = new FloorSchema( {FloorName,rooms})
            await newFloor.save()
            res.json("Thêm tầng phòng thành công")
        }catch(error){
            return res.status(500).json({msg: error.message})
        }
        
    }, 
    delete: async(req,res) => {
        try{
            await CaterogyRom.findByIdAndDelete(req.params.id)
            res.json("Xóa loại phòng thành công")
        }catch(error){
            return res.status(500).json({msg: error.message})
        }  
    },
    update: async(req,res)=>{
        try{
            const {CaterogyRomName} = req.body
            if(!CaterogyRomName)
                return res.status(400).json("Tên loại phòng trống")
           await CaterogyRom.findByIdAndUpdate({_id: req.params.id}, {CaterogyRomName})
           res.json("Cập nhật loại phòng thành công")
        }catch(error){
            return res.status(500).json({msg: error.message})
        }  
    },
    read: async(req,res)=>{
        try{
          const floors= await FloorSchema.find()
          res.json({floors:floors})
        }catch(error){
            return res.status(500).json({msg: error.message})
        }  
    }
}
module.exports = FloorCtrl