const express = require("express");
const router = new express.Router();
const Message = require("../models/message");

// --- GET ----
// Home page

router.get("/", (req, res) => {
  res.send("Hello!!!");
});

// Mendapatkan semua messages

router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find({});
    res.status(201).send(messages);
  } catch (error) {
    res.status(400).send(error);
  }
});

// --- END GET ---

// --- POST ---
// Membuat dan menyimpan sebuah message baru

router.post("/messages", async (req, res) => {
  const message = new Message({
    ...req.body
  });

  try {
    await message.save();
    res.status(201).send(message);
  } catch (error) {
    res.status(400).send(error);
  }
});

// --- END POST ---

module.exports = router;
