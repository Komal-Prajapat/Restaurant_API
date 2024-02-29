import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    COMPANYID: {
      type: Number,
      required: true,
    },
    NAME: {
      type: String,
      required: true,
    },
    REGISTEREDADDRESS1: String,
    REGISTEREDADDRESS2: String,
    CITY: String,
    STATE: String,
    PHONE1: Number,
    PHONE2: Number,
    MOBILE1: Number,
    MOBILE2: Number,
    EMAIL1: String,
    EMAIL2: String,
    CONTACTPERSON1: String,
    CONTACTPERSON2: String,
    JURIDICTION: String,
    REMARK: String,
    SENDERID_FC: String,
    SENDERID_COY: String,
    SMSKEY_FC: String,
    SMSKEY_COY: String,
    INSTALL_DATE: Date,
  },
  {
    collection: "COMPANYMASTER",
    timestamps: true,
  }
);

export const Company = mongoose.model("Company", companySchema);
