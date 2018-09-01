const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const Keys= require('./config/keys.js');
require('./models/User');
require('./services/passport.js');

const authRoutes= require('./routes/authRoutes.js');


mongoose.connect(Keys.mongoURI);


const app =express();
app.use(
    cookieSession({
maxAge: 30 * 24 * 60 * 60 * 1000,
keys: [Keys.cookieKey]
    })

);

app.use(passport.initialize());
app.use(passport.session());



authRoutes(app);


app.listen(process.env.PORT || 8080 ,function(){
    console.log("up and running on port8080 ");
});
