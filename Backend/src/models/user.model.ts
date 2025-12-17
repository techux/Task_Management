import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema: Schema<IUser> = new Schema(
    {
        name: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: false,
        },
    },

    {
        timestamps: true,
        collection: "users",
        versionKey: false,
    }
);

const userModel = mongoose.model<IUser>("User", userSchema);
export default userModel;
