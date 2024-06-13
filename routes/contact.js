const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/create", async (req, res) => {
  try {
    const { name, address, mobile, whatsapp, message, type } = req.body;
    console.log(req);
    const newContact = new Contact({
      name,
      address,
      mobile,
      whatsapp,
      message,
      type,
    });

    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500);
  }
});

module.exports = router;
