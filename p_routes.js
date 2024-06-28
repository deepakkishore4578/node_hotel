const express=require('express')
const router = express.Router();
const Person = require('./Person');

//post route to add a person
router.post('/',async (req,res) =>{
    try{
      const data = req.body 
      //create a new person document using mongoose model
      const newPerson = new Person(data);

     //  save new peerson data to database
     const response = await newPerson.save();
     console.log('data saved');
     res.status(200).json(response);
    }
 catch(err){
   console.log(err);
   res.status(500).json({error: 'internal server error'});
 }
})
// get
router.get('/',async(req,res)=>{
    try{
      const data = await Person.find();
      console.log('data fetched');
      res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'internal error'});
    }
})

// update
router.put('/:id',async(req,res)=>{
  try{
     const personid = req.params.id;
     const updatepersondata = req.body;

     const response  = await Person.findByIdAndUpdate(personid,updatepersondata,{
       new:true,
       runValidators:true
      })
      console.log('data updated')
      res.status(200).json(response);
  }catch(err){
      console.log(err);
      res.status(500).json({error:'internal error'});
  }
})

// delete
router.delete('/:id',async(req,res)=>{
    try{
      const personid = req.params.id;
      const response =await Person.findByIdAndDelete(personid);

      console.log('data deleted');
      res.status(200).json({message:'person deleted'});

    }catch(err){
      console.log(err);
      res.status(500).json({error:'internal error'});
    }
})

module.exports = router;