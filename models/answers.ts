import mongoose, { Schema } from "mongoose";

const answerSchema = new Schema({
    fullName : {
        type: String,
        required: [true, "fullName is essential"]
    },
    examTitle: {
        type: String,
        required: [true, "examTitle is essential"]
    },
    answerCollection: [
        {
            paragraph: {
                type: String
            }
        }
    ],
},{
    timestamps: true
})

const answer = mongoose.models.answer || mongoose.model("answer", answerSchema);
export default answer;