const express =  require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Get infor');
});

app.listen(3000, (req, res) => {
    console.log('Node api running on port 3000');
});