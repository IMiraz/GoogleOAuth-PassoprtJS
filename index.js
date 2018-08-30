const express = require('express');
const passport require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app =express();

passport.use( new GoogleStrategy());


app.listen(process.env.PORT || 8080 ,function(){
    console.log("up and running on port "+process.env.PORT);
});
