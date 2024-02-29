import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  COMPANYID: {
    type: Number,
    required: true,
  },
  CUSTOMERID: {
    type: Number,
    required: true,
  },
  TITLE: String,
  FNAME: {
    type: String,
    required: true,
  },
  DOB: Date,
  TELEPHONE: Number,
  MOBILE: Number,
  ADDRESS: String,
  REMARK: String,
  CREATEDBY: String,
  CREATEDON: Date,
  UPDATEDBY: String,
  UPDATEDON: Date,
  STATUS: String,
  PEARNED: {
    type: Number,
    default: 0,
  },
  PREDEEMED: {
    type: Number,
    default: 0,
  },
  GSTNO: String,
  EMAILID: String,
}, {
  collection: 'CUSTOMERMASTER', 
  timestamps: true, 
});

export const Customer = mongoose.model('Customer', customerSchema);
