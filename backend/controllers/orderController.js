import Order from "../models/order";

//paceorder create
export const placeOrder = async (req, res, next) => {
  try {
    //order logic
    const userId = req.user.id;

    //order details
    const { items, totalPrice } = req.body;

    //create new order  instance
    const order = new Order({
      user: userId,
      items,
      totalPrice,
      status: "order_received",
    });

    //save the order to the db
    await order.save();

    res.status(201).json({
      success: true,
      message: "order placed successfully",
      order,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//get user order
export const getUserOrder = async (req, res, next) => {
  try {
    //extract userid
    const userId = req.body;

    //fetch order from user
    const orders = await Order.find({ user: userId });

    res.status(201).json({
      success: true,
      message: "order gets successfully",
      orders,
    });

  } catch (error) {
    console.log(error);
    next(error);
  }
};

//update the order
export const updateOrderStatus = async (req, res, next) => {
  try {
    const { orderId, status } = req.body;

    //update order status
    await Order.findByIdAndUpdate(orderId, { status });

    res.status(200).json({
      success: true,
      message: "Order status updated successfully",
    });

  } catch (error) {
    console.log(error);
    next(error);
  }
};


//update payment status
export const updatePaymentStatus = async (req, res, next) => {
      try {

        //extract orderid and new payment status
        const { orderId, paymentStatus } = req.body;

        //update payment status
        await Order.findByIdAndUpdate(orderId, { paymentStatus });

        res.status(200).json({
          success: true,
          message: "Payment status updated successfully",
        });
        
      } catch (error) {
        console.log(error);
        next(error);
        
      }
}