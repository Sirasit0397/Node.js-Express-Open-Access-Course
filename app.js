const express = require('express');
const app = express();
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const port = 3000;
app.use(morgan('combined'));

app.get('/',(req, res)=>{res.send('Hello World!');});

app.listen(port,()=>{
    debug("Listening on port " + chalk.red(" : " + port));
});


