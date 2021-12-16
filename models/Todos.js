const { Sequelize } = require('sequelize');
const sequelize  = require('../config/database')

const Todo = sequelize.define('NewTodo',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    task:{
        type: Sequelize.STRING
    },
})

Todo.sync({ alter: true }).then(()=>console.log("table created"))
            .catch(err=>console.log(err))


async function getAllTodo(){
    try{
        const jane = await Todo.findAll();
    return jane
    }catch(err){
        console.log(err)
    }
} 

async function TodoById({ id,task }){
    try{
        await Todo.update({ task: task }, {
            where: {
              id: id
            }
          });
    }catch(err){
        console.log(err)
    }
} 

async function deleteTodo(id){
    try{
        await Todo.destroy({
            where: {
              id: id
            }
          });
          
    }catch(err){
        console.log(err)
    }
} 

async function  createNewTodo(task){
    try{
        const jane = await Todo.create({ task: task });
    return jane
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    Todo,
    getAllTodo,
    createNewTodo,
    TodoById,
    deleteTodo
}