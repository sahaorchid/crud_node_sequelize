const { getAllTodo,createNewTodo,TodoById,deleteTodo } = require('../models/Todos')

function getTodo(req,res){
    const Todo = getAllTodo()
    Todo.then((data)=>res.json({ data }))
}

function createTodo(req,res){
    const { task } = req.body
    const data = createNewTodo(task)
    res.json({ msg: data})
}

function updateTodoById(req,res){
    const id = req.params.id
    const { task } = req.body
    const data = TodoById({ id,task })
    res.json({ msg: "success"})
}

function deleteTodoById(req,res){
    const id = req.params.id
    const data = deleteTodo(id)
    res.json({ msg: "success"})
}

module.exports = {
    getTodo,
    createTodo,
    updateTodoById,
    deleteTodoById
}