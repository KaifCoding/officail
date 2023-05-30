import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        fname: {
            type: String,
            required: true,
        },
        enroll: {
            type: String,
            required: true,
            unique : true,
        },
        per: {
            type: String,
            required: true,
        },
    },
    {
        timestamp: true,
    })
module.exports = mongoose.models.Data || mongoose.model('Data', dataSchema)

