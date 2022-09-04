import express, { Router } from 'express'

import { createUser } from '../controller/volunteer.js';
const router = express.Router();



router.post('/', createUser);
router.get('/', function(req,res){
res.json('connection is established')

});

export default router;