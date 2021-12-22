const { restart } = require("nodemon");
const tutModel = require("../model/tutorialModel");
const getYoutubeID = require("../utility/youtubeID");

class Tutorial {
  getbyID = async (req, res) => {
    let id = await req.body;
    await tutModel
      .findAll({
        where: {
          id: id,
        },
      })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  };
  getList = async (req, res) => {
    try {
      await tutModel
        .findAll({
          order: [
            // Will escape title and validate DESC against a list of valid direction parameters
            ["id", "DESC"],
          ],
        })
        .then((data) => {
          data.length ? res.json(data) : res.json("Empty Data");
        });
    } catch (error) {
      res.send({ error: err.toString() });
    }
  };
  createTutorial = async (req, res) => {
    let body = await req.body;
    let { link } = body;

    const youtubeID = getYoutubeID(link);
    let thumbnail = `https://img.youtube.com/vi/${youtubeID}/0.jpg`;
    body = { ...req.body, thumbnail };

    try {
      if (body) {
        const data = await tutModel.create(body);
        res.json(data);
      } else {
        res.status(404).json({ err: "Empty Object" });
      }
    } catch (err) {
      res.status(404).send({ error: err.toString() });
    }
  };
  updateTutorial = async (req, res) => {
    const {id , title, summary ,link ,tag} =await req.body;
    let data = {};
    const youtubeID = getYoutubeID(link);
    let thumbnail = `https://img.youtube.com/vi/${youtubeID}/0.jpg`;

    data = {...data , title, summary, link, tag,thumbnail}
    await tutModel.update(data, {
      where: {
        id: id,
      },
    }).then(result=>{
        res.status(200).send(data);
    }).catch(err=>{
        res.status(404).send("Unable to Update")
    })
  
    
  };
  deleteTutorial = async (req, res) => {
    let {id} = req.body;
    await tutModel.destroy({
        where: {
          id: id
        }
      }).then(result=>{
          res.status(200).send('Successfully Deleted')
      }).catch(err=>{
        res.status(304).send(err)
      })
  };
}

const tutorialController = new Tutorial();
module.exports = tutorialController;
