const express = require('express');
const router = express.Router();
const {
  bookTickets,
  getAllBookings,
  removeBookById,
} = require('../controllers/blogsController');

router.post('/bookTickets', bookTickets);
router.get('/getAllBookings', getAllBookings);
router.delete('/removeBookById/:id', removeBookById);
module.exports = router;
