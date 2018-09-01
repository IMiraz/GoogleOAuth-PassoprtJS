const passport = require('passport')

module.exports=(app) => {

app.get('/auth/google',
 passport.authenticate('google',
{
    scope:['profile', 'email']

})

);

app.get('/',(req, res) => {

    res.send("HOW TO YOU TEST ?'.Please take a look the github repo Readme doc  ");

});

app.get('/auth/google/callback', passport.authenticate('google'));

app.get('/api/current_user', (req, res) => {

    res.send(req.user);

});

app.get('/api/logout', (req, res) => {
 req.logout();
 res.send(req.user);
})

};