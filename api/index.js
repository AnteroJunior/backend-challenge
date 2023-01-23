require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('cors');
const port = process.env.PORT;

app.use(cors());

routes(app);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});

module.exports = app;