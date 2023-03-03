const Custom = require('../models/customModel')

const CustomCtrl = {
    create: async (req,res) => {
        try{    
            const {customname,customaddress,customphone, cccd, orderDate} = req.body
            const room = req.body.room
            const CCCD =await Custom.findOne({cccd})
            if(CCCD) 
                return res.status(400).json("Khách thuê đã tồn tại")
            const custom = new Custom({customname,customaddress,customphone, cccd,orderDate,room })
            await custom.save()
            res.json("Thêm khách hàng thành công")

        }catch(error){
            return res.status(500).json({msg: error.message})
        }
    },
    read:  async (req,res) => {
        try{
            const custom = await Custom.find()
            res.json({custom:custom})
            
        }catch(error){
            return res.status(400).json({msg:error.message})
        }
    },
    delete:  async (req,res) => {

    },
    update:  async (req,res) => {

    },
    // addRoom: async (req, res) => {
    //     try{
    //         const custom = await Custom.findById(req.custom.id)
    //         if(!user) 
    //             return res.status(400).json({msg: "Khách thuê không tồn tại"})
    //         await Custom.findByIdAndUpdate({_id: req.user.id},{
    //             room : req.body.room
    //         })
    //         return res.json({})
    //     }catch(error){
    //         return res.status(500).json({msg: error.message})
    //     }
    // }
}
module.exports = CustomCtrl