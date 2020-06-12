var jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var User = require("../Model/User");
var jwtDecode = require('jwt-decode')
const SECRET_KEY = "qwerty";
const userController={}
userController.register= function(req,res){
      // console.log(req)
       let { username, email, password,address } = req.body;
       if (!username || !email || !password || !address) {
         return res.status(400).json({ message: "please fill all field" });
       }
       User.findOne({ email }).then((user) => {
         if (user) return res
                     .status(400)
                     .json({ message: "user already exist" });

         const newUser = new User({
           username,
           email,
           password,
           address
         });

         bcrypt.genSalt(10, (err, salt) => {
           bcrypt.hash(newUser.password, salt, (err, hash) => {
             if (err) throw err;
             newUser.password = hash;
             newUser.save().then((user) => {
               jwt.sign(
                 { id: user.id,username:user.username },
                 SECRET_KEY,
                 { expiresIn: 3600 },
                 (err, token) => {
                   if (err) throw err;
                   res.status(201).json({
                  message:"new user created"
                   });
                 }
               );
             });
           });
         });
       });
}


userController.login=function(req,res){
      let { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "please fill all field" });
      }
      User.findOne({ email }).then((user) => {
        if (!user) return res
                     .status(400)
                     .json({ message: "user does not exist" });

        bcrypt.compare(password, user.password).then((isMatch) => {
          if (!isMatch)
            return res.status(400).json({ message: "Invalid credentials" });

          jwt.sign(
            { id: user.id,username:user.username },
            SECRET_KEY,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.status(200).json({
                message:"success",
                accessToken:token
              });
            }
          );
        });
      });
}


module.exports=userController