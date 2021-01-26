const express = require('express');
const router = express.Router();

//Import controllers object from /controllers/controller.js
const controllers = require('../controllers/controller.js');

//Export router object with endpoints and controllers
module.exports = function() {
  router.get('/', controllers.indexController);

  router.get('/about', controllers.aboutController);

  router.get('/new_project', controllers.newProjectController);

  router.post('/new_project', controllers.newProjectPOSTController);
  
  return router;
}