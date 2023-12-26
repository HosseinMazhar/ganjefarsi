import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Full Name is Required"],
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email address",
    ],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  grade: {
    type: Number,
  },
  classNumber: {
    type: Number
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

const user =
  mongoose.models.user || mongoose.model("user", userSchema);
export default user;
