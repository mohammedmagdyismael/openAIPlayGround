const express = require('express')
const router = express.Router() 
const chatAssistant = require('./OpenAI_Controllers/chatAssistant.controller') 

router.post('/', (req,res,next)=>chatAssistant.chatgpt(req,res,next) );

module.exports = router;