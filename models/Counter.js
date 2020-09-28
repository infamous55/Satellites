const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({
  views: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Counter', CounterSchema);
