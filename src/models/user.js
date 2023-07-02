import {Schema, model} from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: true,
        required: true
    }

},{timestamps: true})

const User = model("User", userSchema);

export default User;