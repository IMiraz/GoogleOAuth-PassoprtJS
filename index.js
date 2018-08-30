const express = require('express');

const app =express();


app.get('/', (req, res) => {

    res.send({ h1: 'there'});

});

app.listen(process.env.PORT || 8080 ,function(){
    console.log("up and running on port "+process.env.PORT);
});
