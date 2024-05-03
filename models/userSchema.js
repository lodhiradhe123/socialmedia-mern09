const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, "Name is required"],
            minLength: [4, "Name must be atleast 4 characters long"],
        },
        username: {
            type: String,
            trim: true,
            unique: true,
            required: [true, "Username is required"],
            minLength: [4, "Username must be atleast 4 characters long"],
        },
        email: {
            type: String,
            trim: true,
            unique: true,
            lowercase: true,
            required: [true, "Email is required"],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill a valid email address",
            ],
        },
        password: String,
    },
    { timestamps: true }
);

userSchema.plugin(plm);

const User = mongoose.model("user", userSchema);
module.exports = User;
