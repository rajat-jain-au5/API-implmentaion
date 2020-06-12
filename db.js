const mongoose = require("mongoose");
const uri =
  "mongodb+srv://rajat:vishal221198@cluster0-vwqjo.mongodb.net/Api?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  async (res) => {
    console.log("mongodb is connected succesfully");
  },
  (err) => {
    console.log("error in connection");
  }
);
