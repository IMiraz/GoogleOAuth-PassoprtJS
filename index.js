const express = require('express');

const app =express();


app.get('/', (req, res) => {

    res.send({ h1: 'buddy what are doing'});

});

app.listen(process.env.PORT || 8080 ,function(){
    console.log("up and running on port "+process.env.PORT);
});
