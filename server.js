const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json({extended : false}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/openai/chatAssistant',require('./routes/api/openai'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server Starts on Port ${PORT}`)
})

