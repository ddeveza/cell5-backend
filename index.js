const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

const tutorialRoutes = require('./routes/tutorialRoutes');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
 app.use('/',tutorialRoutes);




app.listen(process.env.PORT || 3001, ()=>{
    console.log("Server is running");
})



