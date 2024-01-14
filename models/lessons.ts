import mongoose, { Schema } from "mongoose";

const lessonSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    paragraph: {
        type: String,
        required: [true, "paragraph is required"]
    }
})

const lesson = mongoose.models.lesson || mongoose.model("lesson", lessonSchema);

export default lesson;