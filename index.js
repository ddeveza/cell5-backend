const express = require('express');
const app = express();


const tutorialRoutes = require('./routes/tutorialRoutes');

 app.use('/',tutorialRoutes);




app.listen(process.env.PORT || 3001, ()=>{
    console.log("Server is running");
})



