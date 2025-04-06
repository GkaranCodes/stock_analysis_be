import StockAnalysis from "../models/stockAnalysis.model.js";

export const createAnalysis = async (req, res) => {
  try {
    const body = req.body;
    const response = await StockAnalysis.create(body);
    return res
      .status(201)
      .json({ message: "Data created Successfully", data: response.data });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to create data", error: error });
  }
};

export const getAnalysis = async (req, res) => {
  try {
    const data = await StockAnalysis.find();

    if (!data) {
      return res.status(404).json({ message: "Data not found", data: null });
    }

    return res.status(200).json({ message: "Data fetched!", data: data });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", data: null });
  }
};

export const deleteAnalysis = async (req, res) => {
  try {
    const id = req.query.id;
    await StockAnalysis.deleteOne({ _id: id });
    return res.status(200).json({ message: "Entry Deleted Successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete record" });
  }
};

export const editAnalysis = async (req, res) => {
  try {
    const id = req.query.id;
    const body = req.body;

    const updatedData = await StockAnalysis.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true } 
    );

    if (!updatedData) {
      return res.status(404).json({ message: "Entry not found" });
    }

    return res
      .status(200)
      .json({ message: "Entry updated successfully", data: updatedData });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to update record", error: error.message });
  }
};

