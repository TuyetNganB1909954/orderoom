const router = require ('express').Router()
const  UploadCtrl = require('../controllers/UploadCtrl')

router.post('/uploadimg', UploadCtrl.upload)
router.post('/destroy', UploadCtrl.destroy)


module.exports = router

