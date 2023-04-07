const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
  new: newTicket,
  create
}

function newTicket(req, res) {
  res.render('tickets/new', { title: 'New Ticket', flightId: req.params.id });
}

async function create(req, res) {
  let flightId = req.params.id
  req.body.flight = flightId
  try {
    const ticket = await Ticket.create(req.body);
    res.redirect(`/flights/${flightId}`);
  } catch (err) {
    console.log(err);
    res.render('tickets/new', { errorMsg: err.message });
  }
}
