import mongoose from "mongoose";

const customPizzaSchema = new mongoose.Schema({
  user: {
    type: String,
    // unique: true,
  },
  pizzaName: { type: String, required: true },
  base: { type: String, required: true },
  sauce: { type: String, required: true },
  cheese: { type: String, required: true },
  veggies: { type: String },
  // veggies: { type: [String], default: [] },
  meat: { type: String, default:""},
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  baseStock: { type: Number }, // Stock count for base
  sauceStock: { type: Number}, // Stock count for sauce
  cheeseStock: { type: Number }, // Stock count for cheese
  veggiesStock: { type: Number }, // Stock count for veggies
  meatStock: { type: Number}, // Stock count for meat
});

const CustomPizza = new mongoose.model("customPizza", customPizzaSchema);

export default CustomPizza;
