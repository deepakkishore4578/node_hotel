const express = require('express');
const router = express.Router();
const menu = require('./menu')

// post(create)
router.post('/', async (req, res) => {
  try {
    const data = req.body
    //create a new person document using mongoose model
    const newMenu = new menu(data);

    //  save new peerson data to database
    const response = await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'internal server error' });
  }
});

//get(read)
router.get('/', async (req, res) => {
  try {
    const data = await menu.find();
    console.log('data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'internal error' });
  }
})
// update
router.put('/:id', async (req, res) => {
  try {
    const menuid = req.params.id; // getting id
    const updatemenu = req.body; // it will store data which will 

    const response = await menu.findByIdAndUpdate(menuid, updatemenu, {
      new: true,
      runValidators: true
    })
    console.log('data updated')
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'internal error' });
  }
})

// delete
router.delete('/:id',async(req,res)=>{
  try{
    const menuid = req.params.id;
    const response =await menu.findByIdAndDelete(menuid);

    console.log('data deleted');
    res.status(200).json({message:'menu deleted'});

  }catch(err){
    console.log(err);      
    res.status(500).json({error:'internal error'});
  }
})
// cdf deepak
module.exports = router;
