import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    //user items status

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        name: String,
        quantity: Number,
      },
    ],
    status: {
      type: String,
      enum: ["order_received", "in_kitchen", "sent_to_delivery"],
      default: "order_received",
    },
    totalPrice: {
        type: String,
        required: true
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed'],
      default: 'pending'
    },
    paymentId: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

const Order = new mongoose.model("Order", orderSchema);
export default Order;
