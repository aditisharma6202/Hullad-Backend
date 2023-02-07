import Order from "../models/donar.js";
import Razorpay from 'razorpay';
import { config } from "dotenv";
config({path:"../config.env"});

 export const getapikey = async(req,res)=>{
    res.send({ key:"rzp_live_vI1xvBaVWWt10G"});
 }

   export const CreateOrder= async(req, res) => {
       try {
        const instance= new Razorpay({
            key_id:"rzp_live_vI1xvBaVWWt10G",
            key_secret:"qJ9o0zWDWPS5JZt6C05UezTv",
        });
        const options={
            amount:req.body.amount,
            currency:'INR',
        };
        const order= await instance.orders.create(options);
        if(!order)return res.status(500).send('some error occured');
        res.send(order);
        
       } catch (error) {
        res.status(500).send(error);
       }
    }
    export const GetOrder =(req,res)=>{
        try {

           res.send({ key_id:"rzp_live_vI1xvBaVWWt10G"})    
            
        } catch (error) {
            res.status(400).json({message: error.message}) 
        }
   
    }
export const payorder= async(req,res)=>{
    try {
        const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
          req.body;
        const newOrder = Order({
          isPaid: true,
          amount: amount,
          razorpay: {
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
            signature: razorpaySignature,
          },
        });
        await newOrder.save();
        res.send({
          msg: 'Payment was successfull, Thanks for Donating!',
        });
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }}
      export const listorder= async(req,res)=>{
        const orders = await Order.find();
        res.send(orders);
      }
