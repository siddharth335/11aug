const express= require("express");
const router= express.Router();

const {getAllToDo,
    postCreateTodo,
    putUpdateToDo,
    deleteToDo,} =require("C:\Users\MAHE\Documents\todolist\backend\controllers/todo");

router.get("/");
router.post("/");
router.put("/");
router.delete("/");

module.exports=router;

//netstat .ano | finstr "LISTRING"