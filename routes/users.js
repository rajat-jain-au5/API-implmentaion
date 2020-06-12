var express = require("express");

var router = express.Router();
const userController = require("../controllers/userController");

router.get('/',(req,res)=>{
   res.send("Welcome to Api implementation")
})
router.post("/register", userController.register);
router.post("/login", userController.login);


module.exports = router;
