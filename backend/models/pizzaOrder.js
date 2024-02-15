import mongoose from "mongoose";

const pizzaOrderSchema = new mongoose.Schema(
  {
  pizzaName: { type: String, required: true },
  base: { type: String, required: true },
  sauce: { type: String, required: true },
  cheese: { type: String, required: true },
  veggies: { type: [String], default: [] },
  meat: { type: [String], default: [] },
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
}
);

const PizzaOrder = new mongoose.model("PizzaOrder", pizzaOrderSchema);
export default PizzaOrder;
