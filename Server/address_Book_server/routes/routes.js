const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/usercontroller");
const personController = require("../controller/personController");
const auth = require("../middleware/auth");

router.post("/users/register", usercontroller.addUser);
router.post("/users/login", usercontroller.loginUser);
router.post("/person/addContact", auth.checkToken ,personController.addContact);
router.get("/person/getAll", auth.checkToken ,personController.getAll);
router.put("/person/updateContact/:_id", auth.checkToken ,personController.updateContact);
router.delete("/person/deleteContact/:_id", auth.checkToken ,personController.deleteContact);
module.exports = router;