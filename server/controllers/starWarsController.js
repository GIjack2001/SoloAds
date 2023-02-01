const db = require('../database');

const starWarsController = {};

starWarsController.getCharacters = (req, res, next) => {
  // write code here
  const sql = 'SELECT * FROM ads';
  db.query(sql)
    .then((result) => {
      // console.log('result',result.rows);
      //console.log(result.rows);
      res.locals.ads = result.rows;
      return next();
    })
    .catch((e) => {
      return next({
        log: e,
        status: 500,
        message: { err: 'error from getting characters during query' },
      });
    });
};

starWarsController.getSpecies = (req, res, next) => {
  // write code here
  db.query(
    'SELECT species.*, planets.name AS homeworld FROM species LEFT OUTER JOIN planets ON planets._id = species.homeworld_id WHERE species._id =' +
      req.query.id
  )
    .then((result) => {
      // console.log('result',result.rows);
      console.log(result.rows);
      res.locals.species = result.rows;
      return next();
    })
    .catch((e) => {
      return next({
        log: e,
        status: 500,
        message: { err: 'error from getting species during query' },
      });
    });
};

starWarsController.getHomeworld = (req, res, next) => {
  db.query('SELECT * FROM planets WHERE _id =' + req.query.id)
    .then((result) => {
      // console.log('result',result.rows);
      console.log(result.rows);
      res.locals.homeworld = result.rows[0];
      return next();
    })
    .catch((e) => {
      return next({
        log: e,
        status: 500,
        message: { err: 'error from getting species during query' },
      });
    });
};

starWarsController.getFilm = (req, res, next) => {
  // write code here

  next();
};

starWarsController.addCharacter = (req, res, next) => {
  // write code here
  console.log(req.body);
  const {} = req.body;
  db.query('');
  next();
};

module.exports = starWarsController;
