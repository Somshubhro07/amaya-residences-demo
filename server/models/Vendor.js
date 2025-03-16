const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    service: { type: String, required: true },
    contact: { type: String, required: true },
    adType: { type: String, enum: ["Banner", "Listing"], required: true },
    clicks: { type: Number, default: 0 },
    feeStatus: { type: String, enum: ["Paid", "Pending"], default: "Pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vendor", vendorSchema);