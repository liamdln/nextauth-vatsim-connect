import { User as UserType } from "@/types/models/user";
import mongoose, { model } from "mongoose";

const regionSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
}, { _id: false });

const divisionSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
}, { _id: false });

const subDivisionSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
}, { _id: false });

const ratingSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    longName: {
        type: String,
        required: true
    }
}, { _id: false });

const pilotRatingSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    longName: {
        type: String,
        required: true
    }
}, { _id: false });

const personalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    familyName: {
        type: String,
        required: true
    },
    // email should be encrypted before stored
    email: {
        type: String,
        required: true
    }
}, { _id: false });

const vatsimSchema = new mongoose.Schema({
    region: regionSchema,
    division: divisionSchema,
    subdivision: subDivisionSchema,
    rating: ratingSchema,
    pilotRating: pilotRatingSchema
}, { _id: false });

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    personal: personalSchema,
    vatsim: vatsimSchema
}, { _id: false });

const User = mongoose.models.User || model<UserType>("User", userSchema)

export default User;