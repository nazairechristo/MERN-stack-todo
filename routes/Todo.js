const express = require('express');
const Todo = require('../models/Todo');
const mongoose = require('../app');


const router = express.Router();

// Get all todo in collection

router.get('/', async (req, res) => {
    const todos = await Todo.find(); 
    res.json(todos);
});


// Get One Todo in Collection
router.get('/get/:id', async (req, res) => {
    const oneTodo = await Todo.findById({_id: req.params.id});
    res.json(oneTodo);
    console.log(req.params);
});


// Add new todo on collection

router.post('/new', async (req, res) => {
    const todo = new Todo({
        text: req.body.text,
    })
    await todo.save();
    res.json(todo);
});


// Delete one todo in collection
router.delete('/delete/:id', async (req, res) => {
    const deleteOneTodo =  await Todo.findByIdAndDelete({ _id: req.params.id});

    res.json(deleteOneTodo);
});


module.exports = router;

