import { Customer } from "../model/customerModel.js";
import mongoose from "mongoose";

export const addCustomer = async (req, res) => {
  try {
    const {
      COMPANYID,
      CUSTOMERID,
      TITLE,
      FNAME,
      DOB,
      TELEPHONE,
      MOBILE,
      ADDRESS,
      REMARK,
      CREATEDBY,
      CREATEDON,
      UPDATEDBY,
      UPDATEDON,
      STATUS,
      PEARNED,
      PREDEEMED,
      GSTNO,
      EMAILID,
    } = req.body;

    const customer = await Customer.create({
      COMPANYID,
      CUSTOMERID,
      TITLE,
      FNAME,
      DOB,
      TELEPHONE,
      MOBILE,
      ADDRESS,
      REMARK,
      CREATEDBY,
      CREATEDON,
      UPDATEDBY,
      UPDATEDON,
      STATUS,
      PEARNED,
      PREDEEMED,
      GSTNO,
      EMAILID,
    });

    res.json({ customer });
  } catch (error) {
    console.error("Error adding customer:", error.message);
    res.status(500).json({ error: "Error adding customer" });
  }
};
