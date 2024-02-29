import express from 'express';
import { Company } from '../model/companyModel.js';


// Add a new company
export const add =  async (req, res) => {
  try {
    
    const newCompany = new Company(req.body);
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}




