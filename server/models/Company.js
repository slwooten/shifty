const { Schema, model } = require('mongoose');

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  days: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Day'
    }
  ],
});

const Company = model('Company', companySchema);

module.exports = Company;
