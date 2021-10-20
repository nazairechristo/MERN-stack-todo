const express = require('express');
const mongoose = require('mongoose');
const Note = require('../models/Note');
const router = express.Router();



router.get('/', async (req, res) => {
    const note =  await Note.find();
    res.json(note);
    console.log("it's working")
});

router.post('/new', async (req, res) => {
    const q = new Note(req.body);

    await q.save();
    res.json(q);
});


router.delete('/delete/:id', async (req, res) => {
    const note = await Note.findByIdAndDelete({_id : req.params.id});

    res.json(note);
})


module.exports = router;
