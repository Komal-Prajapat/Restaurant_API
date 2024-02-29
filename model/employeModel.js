import mongoose from "mongoose";

const empMasterSchema = new mongoose.Schema({
  COMPANYID: {
    type: Number,
    // required: true,
  },
  EMPID: {
    type: Number,
    // required: true,
  },
  FIRSTNAME: String,
  LASTNAME: String,
  FATHERNAME: String,
  AGE: Number,
  DOB: Date,
  BLOODGRP: String,
  TELEPHONE: Number,
  MOBILE: Number,
  ADDRESS: String,
  DOJ: Date,
  CURRSAL: Number,
  PAYMENT: Number,
  ADVGIVEN: Number,
  PID: String,
  SHIFT: String,
  REFCONT: String,
  REMARK: String,
  STATUS: String,
  CREATEDBY: String,
  CREATEDON: String, 
  UPDATEDBY: String,
  UPDATEDON: String,
}, {
  collection: 'EMPMASTER',
  timestamps: true, 
});

export const Employe = mongoose.model('EmpMaster', empMasterSchema);
