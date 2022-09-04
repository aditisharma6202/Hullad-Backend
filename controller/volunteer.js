import Vol from '../models/volunteer.js';

export const createUser = async(req,res)=>{
   
    //const user = req.body;
    const newVolunteer = new Vol(req.body);
    //console.log(newVolunteer);
    try{
        res.json(newVolunteer);
        await newVolunteer.save();
        res.status(201).json(newVolunteer);
    } catch(error){
        res.status(409).json({message: error.message});
    }

}