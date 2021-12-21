
const tutModel = require('../model/tutorialModel');
const getYoutubeID = require('../utility/youtubeID');

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

        let body = await req.body;
        let {link} =body;

        const youtubeID = getYoutubeID(link);
        let thumbnail = `https://img.youtube.com/vi/${youtubeID}/0.jpg`;
        body = {...req.body ,thumbnail};
      
        try {
            if (body) {
                const data = await tutModel.create(body);
                res.json(data);
            }else {
                res.status(404).json({err:"Empty Object"})
            }
            
        } catch (err) {
            res.status(404).send({error:err.toString()})
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