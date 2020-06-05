const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

//GET  /flights/<%= flight._id %>/tickets/new
router.get('/flights/:id/tickets/newTicket', ticketsCtrl.newTicket);

//POST /flights/<%= flightId %>/tickets
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;