const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  newTicket,
  create
};

function newTicket(req, res) {
  console.log(req.params, '<<<<<<<<<<<< CONSOLE LOG');
//  flightNoForTicket: flight._id,
  res.render('tickets/newTicket', {
    title: 'New Ticket',
    flightId: req.params.id
  })
};

function create(req, res) {
  req.body.flight = req.params.id;
  Ticket.create(req.body, function(err, newTicket) {
    console.log(newTicket, '<<<<<<<<<<-------NEW TICKET>>>>>');
    res.redirect(`/flights/${req.params.id}`);
  })
};
