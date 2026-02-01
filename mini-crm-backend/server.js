const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/minicrm")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Lead Schema
const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  source: String,
  status: {
    type: String,
    default: "new", // new | contacted | converted
  },
  notes: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Lead = mongoose.model("Lead", LeadSchema);

// ===== ROUTES =====

// Add lead (from contact form)
app.post("/api/leads", async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json(lead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all leads (admin)
app.get("/api/leads", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update lead status
app.put("/api/leads/:id", async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(lead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add follow-up note
app.post("/api/leads/:id/notes", async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    lead.notes.push(req.body.note);
    await lead.save();
    res.json(lead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a lead
app.delete("/api/leads/:id", async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: "Lead deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
