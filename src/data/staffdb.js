const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema(
    {
        id: Number,
        name: String,
        image: String,
        title: String
    },

    { timestamps: true }
);

module.exports = mongoose.model("Staff", StaffSchema)