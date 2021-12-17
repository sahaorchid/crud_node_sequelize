const { getAllTodo,createNewTodo,TodoById,deleteTodo } = require('../models/Todos')

function getTodo(req,res){
    const todos = getAllTodo()
    console.log(todos)
    todos.then((data)=>{
         res.status(200).json({
         message: "successfully fetched",
         data: data })
    })
}

function createTodo(req,res){
    const { task } = req.body
    const data = createNewTodo(task)
    res.status(201).json({ message: "successfully created"})
}

function updateTodoById(req,res){
    const id = req.params.id
    const { task } = req.body
    const data = TodoById({ id,task })
    res.status(201).json({ msg: "successfully updated"})
}

function deleteTodoById(req,res){
    const id = req.params.id
    const data = deleteTodo(id)
    res.status(201).json({ msg: "successfully deleted"})
}

module.exports = {
    getTodo,
    createTodo,
    updateTodoById,
    deleteTodoById
}
