const Todo = require("C:\Users\MAHE\Documents\todolist\backend\models/Todo")

exports.getAllTools= (req,res)=>{
    Todo.Find()
     .then((todo)=> res.json(todo))
     .catch((err)=> res.status(404)
                        .json({message:"Todo not found", error:err.message}))
};

exports.postCreateTodo=(req,res)=>{
    Todo.create(req.body)
        .then((date)=>res.json)({
            message:"Todo added successfully",data
        })
};

exports.putUpdateTodo=(req,res)=>{
    Todo.findByIdAndUpdate(req.params.id,req.body)
    .then((data)=>res.json({
        message:"todo updated successfully",data
    }))
    .catch((err)=>
    res.status(400)
    .json({
        message:"failed to update the todo",error:err.message
    }));
};

exports.deleteTodo=(req,res)=>{
    Todo.findByIdAndRemove(req.params.id,req.body)
    .then((data)=>res.json({
        message:"todo deleted successfully",data
    }))
    .catch((err)=>
    res.status(404)
    .json({message:"couldn't delete"}));
};