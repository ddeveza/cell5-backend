const tutModel = require('../model/tutorialModel');

class Tutorial {
    getList = async (req, res) =>{ 
        
        try {
            tutModel.findAll().then(data=>{
                res.json(data);
            });
          
        } catch (error) {
            res.send({error:err.toString()})
        }

    };
    createTutorial = async (req, res) =>{
        const body = {
            title:'Testing',
            tag:'Testing',
            link:'Testing',
            thumbnail:'https://img.youtube.com/vi/Crk_5Xy8GMA/0.jpg',
            summary: 'Testing'
        }
        try {
            const data = await tutModel.create(body);
            res.json(data);
        } catch (err) {
            res.send({error:err.toString()})
        }
       
        
    };
    updateTutorial = async (req, res) =>{
        res.status(200).send("TESTING");
    };
    deleteTutorial = async (req, res) =>{
        res.status(200).send("tESTING");
    };
}

const tutorialController = new Tutorial() ;
module.exports = tutorialController;