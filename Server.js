const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bodyParser  = require('body-parser')
const sequelize  = require('./config/Database')
const { Todo } = require('./models/Todos')
const { getTodo,createTodo,updateTodoById,deleteTodoById } = require('./controllers/Todos')

async function check(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
check()

const app = express()
app.use(cors())
app.use(cors())
app.use(bodyParser.json());

app.get('/todos',getTodo)
app.post('/todos',createTodo)
app.put('/todos/:id',updateTodoById)
app.delete('/todos/:id',deleteTodoById)

// app.post('/login',(req,res)=>{
//     console.log(req.body)
//     const { email,password } = req.body
//     client.findAll({
//         where: {
//             email: email,
//             password: password
//         }
//       })
//       .then(user=>{
//          console.log(user) 
//         if(user.length!=0){
//             jwt.sign({ user },"mySecreatKey",(err,token)=> {
    
//                 res.json({
//                 token 
//                 })
//             })
//         }else{
//             res.json({ msg: "invalid credential"})
//         }})
//         .catch(err=>console.log(err))

// })


app.listen(5000,()=>console.log('server setarted'))