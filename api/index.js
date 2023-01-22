require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const app = express();
const port = process.env.PORT;

routes(app);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});

module.exports = app;