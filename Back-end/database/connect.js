const mongoose = require('mongoose');
const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect('mongodb+srv://user-management:user-management@mydatabase.8vzuo.mongodb.net/test', option).then(success =>{
    console.log("Successfully connected to database!");
}).catch(error =>{
    console.log("Error in connection to database!" ,error);
});