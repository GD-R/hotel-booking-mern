import mongoose from "mongoose";
const { Schema } = mongoose

const UserSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model("User", UserSchema)
