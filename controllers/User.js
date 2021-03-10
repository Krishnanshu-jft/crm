const express = require('express')
const router = express.Router()
const { timestamp } = require('../Firebase/config')
// @ GET appropriate Model
const user = require('../models/user')

// Get All Users
router.get('/users', async (req,res)=>{
    const result =await user.find({})
    if(result){
        res.send(result)
    }else{
        res.send({ code : 8081 })
    }
})

// Get Single User
router.get('/:id', (req,res)=>{
    const result = await user.findById(req.params.id)
    if(result){
        res.send(result)
    }else{
        res.send({ code : 8082 })
    }
})

// Create new User 
router.post('/add', async (req,res)=>{
    let newUser = {
        name : req.body.name,
        email : req.body.email,
        role : 'Employee',
        createdBy : req.body.createdBy,
        createdOn : timestamp(),
        lastLogin : timestamp(),
        password : req.body.pwd
    }
    let addUser = new user(newUser)
    addUser.save()
        .then(res.send(newUser))
        .catch(res.send({ code : '8083' }))
})

// Update Single User
router.post('/:id/update', (req,res)=>{
    user.findByIdAndUpdate(req.params.id, req.body.updatedUser, (err,success)=>{
        if(err){
            res.send({ code : '8084' })
        }else{
            res.send({ code : '9568' })
        }
    })
})

// Delete Single User
router.post('/:id/delete', (req,res)=>{
    user.findByIdAndDelete(req.params.id, (err,success)=>{
        if(err){
            res.send({ code : '8085' })
        }else{
            res.send({ code : '9568'})
        }
    })
})  

module.exports = router