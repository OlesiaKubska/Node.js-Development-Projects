import { Schema, model } from "mongoose";
import Joi from "joi";

import { handleSaveError, preUpdate } from "./hooks.js";

const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new Schema({
    password: {
        type: String,
        required: [true, 'Set password for user'],
    },
    email: {
        type: String,
        match: emailRegexp,
        required: [true, 'Email is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    avatarURL: {
        type: String,
    },
    token: {
        type: String,
    },
    verify: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        required: [true, 'Verify token is required'],
    }
}, { versionKey: false, timestamps: true });

userSchema.post("save", handleSaveError);

userSchema.pre("findOneAndUpdate", preUpdate);

userSchema.post("findOneAndUpdate", handleSaveError);

export const userSignupSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    subscription: Joi.string().valid("starter", "pro", "business").optional(),
})

export const userSigninSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().pattern(emailRegexp).required(),
})

export const userEmailSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
})

const User = model("user", userSchema);

export default User;