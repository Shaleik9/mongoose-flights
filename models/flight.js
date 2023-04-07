const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: {
    type: Date,
    required: true
  }
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
  type: Number,
  min: 10,
  max: 9999
  },
  departs: {
    type: Date,
    default: function () {
      const yearFromDate = new Date();
      yearFromDate.setFullYear(yearFromDate.getFullYear()+ 1);
      return yearFromDate;
    }
  },
  destinations: {
    type: [destinationSchema],
    ref: "Flight",
    required: true
  }
});

module.exports = mongoose.model('Flight', flightSchema);
