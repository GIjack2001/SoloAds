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

starWarsController.deleteAds = (req, res, next) => {
  db.query('DELETE FROM ads WHERE _id =' + Number(req.params.id))
    .then((result) => {
      // console.log('result',result.rows);
      console.log(result);
      res.locals.deletems = 'deleted it at _id:' + req.query.id;
      return next();
    })
    .catch((e) => {
      return next({
        log: e,
        status: 500,
        message: { err: 'error deleting and ad' },
      });
    });
};

starWarsController.getFilm = (req, res, next) => {
  // write code here

  next();
};

starWarsController.addCharacter = (req, res, next) => {
  // write code here
  console.log('hello from controller' + JSON.stringify(req.body));
  const {} = req.body;
  db.query(
    'INSERT INTO ads (title, description, width, height, "BG-type", "BG-color", "BG-image", "HL-font-family", headline, "SHL-font-family", "sub-headline", "CTA", "CTA-font-family","CTA-BG-color", "CTA-FONT-color", "CTA-link", author_id) VALUES (' +
      "'" +
      req.body.title +
      "'" +
      ', ' +
      "'" +
      req.body.description +
      "'" +
      ', ' +
      req.body.width +
      ',' +
      req.body.height +
      ',' +
      "'Solid'," +
      "'" +
      req.body.BG_color +
      "'" +
      ',' +
      "'" +
      req.body.BG_image +
      "'" +
      ',' +
      "'" +
      req.body.HL_font_family +
      "'" +
      ',' +
      "'" +
      req.body.headline +
      "'" +
      ',' +
      "'" +
      req.body.SHL_font_family +
      "'" +
      ',' +
      "'" +
      req.body.sub_headline +
      "'" +
      ',' +
      "'" +
      req.body.CTA +
      "'" +
      ',' +
      "'" +
      req.body.CTA_font_family +
      "'" +
      ',' +
      "'" +
      req.body.CTA_BG_color +
      "'" +
      ',' +
      "'" +
      req.body.CTA_font_color +
      "'" +
      ',' +
      "'" +
      req.body.CTA_link +
      "'" +
      ', 1)'
  );
  next();
};

module.exports = starWarsController;
