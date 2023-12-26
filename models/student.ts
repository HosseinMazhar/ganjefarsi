import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
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
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  }
});

const student =
  mongoose.models.student || mongoose.model("student", studentSchema);
export default student;
