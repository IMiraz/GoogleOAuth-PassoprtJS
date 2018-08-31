const express = require('express');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport.js');
const Keys= require('./config/keys.js');
const authRoutes= require('./routes/authRoutes.js');


mongoose.connect(Keys.mongoURI);


const app =express();



authRoutes(app);


app.listen(process.env.PORT || 8080 ,function(){
    console.log("up and running on port "+process.env.PORT);
});
