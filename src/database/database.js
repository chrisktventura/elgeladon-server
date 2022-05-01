const mongoose = require('mongoose');


const connectToDatabase = async () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log(err));
};

module.exports = connectToDatabase;
