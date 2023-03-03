const { Router } = require("express")
const KindOfRoomCtrl = require("../controllers/KindOfRoomCtrl")
const router = require("express").Router()

router.route("/kindofroom")
    .post(KindOfRoomCtrl.create)
    .get(KindOfRoomCtrl.read)
router.route("/kindofroom/:id")
    .delete(KindOfRoomCtrl.delete)
    .put(KindOfRoomCtrl.update)

module.exports = router