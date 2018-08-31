const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Keys = require('./config/keys.js');
const app =express();

passport.use( new GoogleStrategy({

    clientID:Keys.googleClientID,
    clientSecret:Keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('Access token', accessToken);
    console.log('profile:', profile);

})

);

app.get('/auth/google',
 passport.authenticate('google',
{
    scope:['profile', 'email']

})

);

app.get('/auth/google/callback', passport.authenticate('google'));


app.listen(process.env.PORT || 8080 ,function(){
    console.log("up and running on port "+process.env.PORT);
});
