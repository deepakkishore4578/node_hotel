const mongoose = require('mongoose');

const menuitemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true         
    },
    taste:{
        type:String,
        enum:['sweet','sour','spicy'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    }
})
 const Menuitem = mongoose.model('Menuitem',menuitemSchema);
 module.exports = Menuitem;
