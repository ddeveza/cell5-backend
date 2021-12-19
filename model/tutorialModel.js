const Sequelize = require('sequelize');
const db = require("../config/database");


const Tutorial = db.define("tutorialdb",{
    id:{
        type: "INT(100)",
        primaryKey: true,
        unique: true,
        autoIncrement:true
       
    },
    title:Sequelize.STRING,
    tag:Sequelize.STRING,
    link:Sequelize.STRING,
    thumbnail:Sequelize.STRING,
    summary: Sequelize.TEXT
   


});

module.exports = Tutorial;

