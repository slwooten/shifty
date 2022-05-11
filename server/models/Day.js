const { Schema, model } = require('mongoose');

const daySchema = new Schema({
  date: {
    type: String,
    required: true,
    match: [/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/, 'Must match format of mm/dd/yyyy!'], 
  },
  shifts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Shift'
    }
  ],
});

const Day = model('Day', daySchema);

module.exports = Day;
