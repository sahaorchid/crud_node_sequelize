vconst { Sequelize } = require('sequelize');
const sequelize  = require('../config/database')

const todos = sequelize.define('Todos',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    task:{
        type: Sequelize.STRING
    },
},{
    timestamps: false
})


async function getAllTodo(){
    try{
        const data = await todos.findAll();
    return data
    }catch(err){
        console.log(err)
    }
} 

async function TodoById({ id,task }){
    try{
        await todos.update({ task: task }, {
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
        await todos.destroy({
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
        const data = await todos.create({ task: task });
    return data
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    todos,
    getAllTodo,
    createNewTodo,
    TodoById,
    deleteTodo
}
