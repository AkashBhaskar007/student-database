const mongoose = require('mongoose');

try {
    mongoose.connect('mongodb://localhost:27017/studentdatabase');
    console.log("DB has been connected successfully");
} catch (error) {
    handleError(error);
}
mongoose.connection.on('error', err => {
    logError(err);
});
