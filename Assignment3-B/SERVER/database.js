const mongoose = require('mongoose') ;
const url = require("./config");

const CONNECTION_URL = url.MONGODB;

mongoose.connect(CONNECTION_URL, (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;