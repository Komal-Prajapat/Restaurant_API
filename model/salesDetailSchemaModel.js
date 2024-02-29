import mongoose from "mongoose";

const salesDetailSchema = new mongoose.Schema({
  company_id: { type: Number, required: true },
  fin_year: { type: String, required: true },
  series: { type: String, required: true },
  sale_id: { type: Number, required: true },
  sr_no: { type: Number, required: true },
  item_id: { type: Number, required: true },
  item_desc: { type: String, required: true },
  qty: { type: mongoose.Decimal128, required: true },
  mrp: { type: mongoose.Decimal128, required: true },
  amount: { type: mongoose.Decimal128, required: true },
  tax: { type: mongoose.Decimal128, required: true },
  cgst_percentage: { type: mongoose.Decimal128, required: true },
  cgst_amount: { type: mongoose.Decimal128, required: true },
  sgst_percentage: { type: mongoose.Decimal128, required: true },
  sgst_amount: { type: mongoose.Decimal128, required: true },
  igst_percentage: { type: mongoose.Decimal128, required: true },
  igst_amount: { type: mongoose.Decimal128, required: true },
  cn_rate: { type: mongoose.Decimal128, required: true },
  cadd_disc: { type: mongoose.Decimal128, required: true },
  cadd_disca: { type: mongoose.Decimal128, required: true },
  disc: { type: mongoose.Decimal128, required: true }
});

export const SalesDetailModel = mongoose.model('SalesDetail', salesDetailSchema);

