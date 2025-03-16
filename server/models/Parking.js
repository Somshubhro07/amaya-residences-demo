const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema(
  {
    flatNumber: { type: String, required: true },
    slotName: { type: String, required: true },
    assignedTo: { type: String, required: true },
    status: { type: String, enum: ["Assigned", "Available"], default: "Available" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Parking", parkingSchema);