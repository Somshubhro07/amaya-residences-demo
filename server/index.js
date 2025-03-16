const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const Notice = require("./models/Notice");
const Parking = require("./models/Parking");
const Vendor = require("./models/Vendor");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running!" });
});

// Dummy Notices API
app.get("/api/notices", async (req, res) => {
  const notices = await Notice.find();
  if (notices.length === 0) {
    await Notice.create({
      title: "Puja Meeting",
      content: "March 20th, 10 AM at the lobby",
      date: "2025-03-20",
    });
    return res.json([{ title: "Puja Meeting", content: "March 20th, 10 AM", date: "2025-03-20" }]);
  }
  res.json(notices);
});

// Dummy Parking API
app.get("/api/parking", async (req, res) => {
  const parking = await Parking.find();
  if (parking.length === 0) {
    await Parking.create([
      { flatNumber: "101", slotName: "Kumartuli-1", assignedTo: "Resident A", status: "Assigned" },
      { flatNumber: "102", slotName: "Park Street-1", assignedTo: "Resident B", status: "Assigned" },
    ]);
    return res.json([
      { flatNumber: "101", slotName: "Kumartuli-1", assignedTo: "Resident A", status: "Assigned" },
      { flatNumber: "102", slotName: "Park Street-1", assignedTo: "Resident B", status: "Assigned" },
    ]);
  }
  res.json(parking);
});

// Dummy Vendors API
app.get("/api/vendors", async (req, res) => {
  const vendors = await Vendor.find();
  if (vendors.length === 0) {
    await Vendor.create([
      { name: "Amit’s Mishti", service: "Sweets", contact: "9876543210", adType: "Banner", clicks: 50, feeStatus: "Paid" },
      { name: "Ravi Electrician", service: "Repairs", contact: "8765432109", adType: "Listing", clicks: 30, feeStatus: "Pending" },
    ]);
    return res.json([
      { name: "Amit’s Mishti", service: "Sweets", contact: "9876543210", adType: "Banner", clicks: 50, feeStatus: "Paid" },
      { name: "Ravi Electrician", service: "Repairs", contact: "8765432109", adType: "Listing", clicks: 30, feeStatus: "Pending" },
    ]);
  }
  res.json(vendors);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));