require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();//app express
const port = process.env.PORT//port
const hostname = process.env.HOST_NAME;
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
//config template engine
configViewEngine(app);

//khai báo Route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})