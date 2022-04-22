const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/paleta.route');
const connectToDatabase = require('./src/database/database');

const port = 3000;
const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('paletas', routes);

app.listem(port, () => {
    console.log(`Server is running on port ${port}`);
});
