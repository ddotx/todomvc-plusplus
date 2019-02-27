const express = require('express');
const mid = require('./guide-middleware');

let app = express();

// app.use((request,response,next) => {
//     request.user = {name: 'Dome'};
//     next();
// });

app.use(mid('Dome'));

app.get('/hello', (request,response) => {
    response.send(`Hello New ${request.user.name}`);
});

app.listen(5000);