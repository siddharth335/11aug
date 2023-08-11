const {default:mongoose}=require('mongoose');

const mongoose= require('mongoose');

const mongoose= new mongoose.Schema({
    title:{
        type:'string',
        required:true,
    },
    description:{
        type:'string',
    },

});
const Todo = mongoose.model("todo", TodoSchema)
module.exports= Todo;