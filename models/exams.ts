import mongoose, { Schema } from "mongoose";

const examSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is essential"],
  },
  deadline: {
    type: String,
    required: [true, "deadline is required"],
    match: [/^\d+(\.\d+)?$/, "Invalid deadline"],
  },
  questions: [
    {
        text: {
            type: String,
        }
    }
  ]
});

const exam = mongoose.models.exam || mongoose.model("exam", examSchema);
export default exam;

