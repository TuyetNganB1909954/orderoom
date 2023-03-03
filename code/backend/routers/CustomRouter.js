const { Router } = require("express")
const CustomCtrl = require('../controllers/CustomCtrl')
const router = require("express").Router()

router.route("/custom")
    .post(CustomCtrl.create)
    .get(CustomCtrl.read)
// router.route("/floor/:id")
//     .delete(FloorCtrl.delete)
//     .put(FloorCtrl.update)

module.exports = router