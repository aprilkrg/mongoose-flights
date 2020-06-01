const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    required: true,
  },
  airport: {
    type: String,
    default: 'DEN',
  },
  flightNo: { 
    type: Number, 
    min: 10,
    max: 9999,
    default: 1000,
    },
  departs: {
    type: Date,
    default: function () {
      return new Date().getFullYear();
    },
  },
});

module.exports = mongoose.model('Flight', flightSchema);