import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
  //pizzabase sauces cheese veggies meat
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Inventory = new mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
