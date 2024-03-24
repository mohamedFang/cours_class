import mongoose, { Schema, model } from "mongoose";


const userSchema = new Schema({
 
    Name: {
        type: String,
        required: [true, 'userName is required'],
        min: [2, 'minimum length 2 char'],
        max: [20, 'max length 2 char']

    },
    email: {
        type: String,
        unique: [true, 'email must be unique value'],
        required: [true, 'userName is required'],
    },
 
    phone: {
        type: String,
    },
   level:String,
    confirmEmail: {
        type: Boolean,
        default: false,
    },
    university:String,
    address: String,
    DOB: String,
    DOB: String,
}, {
    timestamps: true
})


const userModel =mongoose.models.User || model('User', userSchema)
export default userModel