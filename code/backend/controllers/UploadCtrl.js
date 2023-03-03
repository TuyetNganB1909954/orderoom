
const cloudinary = require('cloudinary')
const fs = require('fs')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY ,
    api_secret: process.env.CLOUD_API_SERECT

})

const UploadCtrl = {
    upload : async (req,res) => {
        try{
            // console.log(req.files)
           
            if(!req.files || Object.keys(req.files).length === 0)
                return res.status(400).json({msg:"Không có file để upload"})

            const file = req.files.file

            if(file.size > 1024*1024)
                return res.status(400).json({msg:"Kích thước file quá lớn"})
            if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png'){
                removeTmp(file.tempFilePath)
                return res.status(400).json({msg:"Định dạng file không đúng"})
            }
            cloudinary.v2.uploader.upload(file.tempFilePath,{folder: "hotel"}, async(error, result) => {
                if (error) throw error
                removeTmp(file.tempFilePath)
                res.json({public_id: result.public_id, url: result.secure_url})
            }) 
        }catch(error){
             res.status(500).json({msg:error.message})
        }
    },
    destroy: async(req, res) => {
        try{
            const {public_id} = req.body
            if(!public_id) return res.status(400).json("Không có hình ảnh")
            cloudinary.v2.uploader.destroy(public_id, async(error, result) => {
                if (error) throw error
                res.json({msg:"Xóa hình ảnh thành công"})
            }) 
        }catch(error){
            res.status(500).json({msg:error.message})
        }
    }
}

const removeTmp = (path) => {
    fs.unlink(path, error => {
        if(error) throw error
    })
}
module.exports = UploadCtrl