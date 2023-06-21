'use strict'

const express = require('express');
const cors = require('cors');
const pageNotFound = require('./err/404')
const serverError = require('./err/500')
const foodRouter = require('./routes /food')
const clothesRouter = require('./routes /clothes')
const recipieRouter = require('./routes /recipe')
const ingredientRouter = require('./routes /ingredient')

const app = express();
app.use(cors());
app.use(express.json())
app.get('/', homehandler)
app.use(foodRouter)
app.use(clothesRouter)
app.use(recipieRouter);
app.use(ingredientRouter);

app.use(serverError)
app.use('*', pageNotFound)

function homehandler(req, res){
res.status(200).json({
code: 200,
message: 'Welcome to the home page'

})
}


function start (port){
    app.listen(port, ()=> console.log(`Up and running on port: ${port}`))
}

module.exports = {
    start,
    app
}