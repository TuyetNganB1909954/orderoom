const RoomCtrl = require("../controllers/RoomCtrl")

const router = require("express").Router()

router.route('/room')
    .post(RoomCtrl.create)
    .get(RoomCtrl.read)
    
router.route('/room/:id')
    .delete(RoomCtrl.delete)
    .put(RoomCtrl.update)
    .patch(RoomCtrl.updateRoomStateK)


module.exports = router