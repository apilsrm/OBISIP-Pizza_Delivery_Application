import mongoose from "mongoose";

const stockPizzaSchema = new mongoose.Schema({
  baseStock: { type: Number }, // Stock count for base
  sauceStock: { type: Number}, // Stock count for sauce
  cheeseStock: { type: Number }, // Stock count for cheese
  veggiesStock: { type: Number }, // Stock count for veggies
  meatStock: { type: Number}, // Stock count for meat
});

const StockPizza = new mongoose.model("stockPizza", stockPizzaSchema);

export default StockPizza;
