const express = require('express');
const router = express.Router();

const db = require("../models/index.js");
const Message = db.message;
const Op = db.Sequelize.Op;

///routes
router.get('/messages', getUserMessage);
router.post('/post-message', )

async function getUserMessage(req,res){
    // console.log(req);
    // res.send('test');
    const message = {message: "stam message"}
    await Message.create(message);
    res.send(message);
}

async function postUserMesage(req, res){
    console.log(req);
    res.send(res);
}
module.exports = router; 