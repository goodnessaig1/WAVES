const mongoose = require('mongoose');

const mongoUrl = "mongodb+srv://waves:osemudiame12@waves.i1tkn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose
    .connect(mongoUrl, options)
    .then(() => {
        // eslint-disable-next-line
        return console.log('Mongo connected');
    })
    .catch(err => {
        // mongoose connection error will be handled here
        // eslint-disable-next-line
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

    module.exports = mongoose;