const express = require('express');
const router = express.Router();

const db = require("../models/index.js");
const Message = db.message;
const Op = db.Sequelize.Op;

///routes
router.get('/messages', getUserMessage);
router.post('/post-message', postUserMesage);

async function getUserMessage(req,res){
    // console.log(req);
    // res.send('test');
    const message = {message: "stam message"}
    await Message.create(message);
    res.send(message);
}

async function postUserMesage(req, res){
    const message = req.body.message;
    const response = await Message.create(message);
    res.send(response);
}
module.exports = router; 