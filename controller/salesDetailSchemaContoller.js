// salesController.js

import { SalesDetailModel } from "../model/salesDetailSchemaModel.js"

// Create a new sales detail
export const addSalesDetail = async (req, res) => {
  try {
    const newSalesDetail = await SalesDetailModel.create(req.body);
    res.status(201).json(newSalesDetail);
  } catch (error) {
    console.error("Error adding sales detail:", error.message);
    res.status(500).json({ error: "Error adding sales detail" });
  }
};

// Retrieve all sales details
export const getSalesDetails = async (req, res) => {
  try {
    const salesDetails = await SalesDetailModel.find();
    res.json(salesDetails);
  } catch (error) {
    console.error("Error fetching sales details:", error.message);
    res.status(500).json({ error: "Error fetching sales details" });
  }
};

// Retrieve a single sales detail by ID
export const getSalesDetailById = async (req, res) => {
  try {
    const salesDetail = await SalesDetailModel.findById(req.params.id);
    if (!salesDetail) {
      return res.status(404).json({ error: "Sales detail not found" });
    }
    res.json(salesDetail);
  } catch (error) {
    console.error("Error fetching sales detail:", error.message);
    res.status(500).json({ error: "Error fetching sales detail" });
  }
};

// Update a sales detail by ID
export const updateSalesDetail = async (req, res) => {
  try {
    const updatedSalesDetail = await SalesDetailModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSalesDetail) {
      return res.status(404).json({ error: "Sales detail not found" });
    }
    res.json(updatedSalesDetail);
  } catch (error) {
    console.error("Error updating sales detail:", error.message);
    res.status(500).json({ error: "Error updating sales detail" });
  }
};

// Delete a sales detail by ID
export const deleteSalesDetail = async (req, res) => {
  try {
    const deletedSalesDetail = await SalesDetailModel.findByIdAndDelete(req.params.id);
    if (!deletedSalesDetail) {
      return res.status(404).json({ error: "Sales detail not found" });
    }
    res.json({ message: "Sales detail deleted successfully" });
  } catch (error) {
    console.error("Error deleting sales detail:", error.message);
    res.status(500).json({ error: "Error deleting sales detail" });
  }
};
