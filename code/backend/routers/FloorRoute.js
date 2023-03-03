const { Router } = require("express")
const FloorCtrl = require("../controllers/FloorCtrl")
const router = require("express").Router()

router.route("/floor")
    .post(FloorCtrl.create)
    .get(FloorCtrl.read)
router.route("/floor/:id")
    .delete(FloorCtrl.delete)
    .put(FloorCtrl.update)

module.exports = router