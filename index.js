const express = require('express');
const mongoose = require('mongoose');
require('./services/passport.js')
const authRoutes= require('./routes/authRoutes.js');
const app =express();



authRoutes(app);


app.listen(process.env.PORT || 8080 ,function(){
    console.log("up and running on port "+process.env.PORT);
});
