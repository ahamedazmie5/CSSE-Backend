const express = require('express');
const mongoose = require('mongoose');
const { title } = require('process');
const TravelModal = require('../models/blogModel');

const bookTickets = async (req, res) => {
  console.log('blogs');
  const bookingdata = req.body;
  const newBlog = new TravelModal(bookingdata);
  console.log('saved data', TravelModal);
  try {
    await newBlog.save();

    res.status(200).json({ newBlog });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getAllBookings = async (req, res) => {
  console.log('All');

  try {
    const AllBlogs = await TravelModal.find();
    console.log(AllBlogs);

    res.status(200).json(AllBlogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const removeBookById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await TravelModal.findByIdAndRemove(id);

  res.json({ message: "User deleted successfully." });
};
module.exports = {
  bookTickets,
  getAllBookings,
  removeBookById,
};
