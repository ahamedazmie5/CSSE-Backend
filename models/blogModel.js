const mongoose = require('mongoose');

const travelSechema = new mongoose.Schema(
  {
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model('Travel', travelSechema);
