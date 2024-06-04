const mongoose = require("mongoose");

mongoose
    // .connect("mongodb://127.0.0.1:27017/socialmedia09")
    .connect(
        "mongodb+srv://dhanesh-malviya:dhanesh123@mastercluster.i7cpa.mongodb.net/socialmedia09?retryWrites=true&w=majority&appName=MasterCluster"
    )
    .then(() => console.log("db connected!"))
    .catch((err) => console.log(err.message));
