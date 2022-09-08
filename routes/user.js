const express = require("express");
const user = require("../controller/UserController");
const router = express.Router();

router.get("/", user.home);
router.get("/user", user.user);
router.get("/new_user", user.new_user);

router.post("/login", user.login);
router.post("/register_user", user.register_user);
router.post("/get_user_info", user.get_user_info);
router.post("/user_mod", user.user_mod);
router.post("/user_del", user.user_del);



module.exports = router;