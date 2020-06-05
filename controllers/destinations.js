const Flight = require('../models/flight');

module.exports = {
  create
};

function create(req, res) {
  console.log(req.body, 'info on creating the review'); //output [object: null prototype] {destination: ATX}
  Flight.findById(req.params.id, function(err, flight) {
    console.log(flight, '      this is the flight destinations'); //output: []
    console.log(req.body , '--------------- req.body'); //output: [object: null prototype] {destination: ATX}
    // console.log(req.params, 'params on creating the review'); // output: {id: 5ecf0----}
    // console.log(req.params.id, 'flight id that we are creating destination for'); //output: 5ecf0----
    
    flight.destinations.push(req.body);
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`);
  })
    //res.send("hitting the create route in flight destinations");
  });
};

