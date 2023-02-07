import express from "express";
import {CreateOrder, getapikey, GetOrder, listorder, payorder}  from '../controller/donation.js';
const routerpayment = express.Router();

routerpayment.get('/',GetOrder);

routerpayment.post('/',CreateOrder);
routerpayment.post('/payorder',payorder);
routerpayment.get('/getapikey',getapikey);
routerpayment.get('/listorder',listorder);

export default routerpayment;