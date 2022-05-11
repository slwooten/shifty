const { Schema, model } = require('mongoose');

const shiftSchema = new Schema({
  startTime: {
    type: String,
    match: [/^(((0?[1-9]|1[012])(:[0-5][0-9])?am)|((0?[0-9]|1[012])(:[0-5][0-9])?pm))\b/, 'Must match correct time of day formatting!'],
  },
  endTime: {
    type: String,
    match: [/^(((0?[1-9]|1[012])(:[0-5][0-9])?am)|((0?[0-9]|1[012])(:[0-5][0-9])?pm))\b/, 'Must match correct time of day formatting!'],
  },
  day: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Day'
    }
  ],
});

const Shift = model('Day', shiftSchema);

module.exports = Shift;
