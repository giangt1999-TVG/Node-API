const express =  require("express");
const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res) => {
    res.send('Get infor Hello G');
});

app.listen(3000, (req, res) => {
    console.log('Node api running on port 3000');
});

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://giangt1999_db_user:BOUVTvQZXBHNKGIo@giangtongapi.qq09u5c.mongodb.net/?appName=GiangTongAPI')
.then(() => {
    console.log('Connect mongo database');
}).catch((error) => {
    console.log(error);
});
