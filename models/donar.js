import mongoose from "mongoose";

const Orderschema = mongoose.Schema(
    {
        isPaid:Boolean,
        amount:Number,
        razorpay:{
            orderId:String,
            paymentId:String,
            singnature:String,
        }
        
    }
);
 
const Order = mongoose.model('Order', Orderschema);
 export default Order;