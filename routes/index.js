const express = require('express');
const router = express.Router();

//Import controllers object from /controllers/controller.js
const controllers = require('../controllers/controller.js');

//Import express validator to sanitize entries on posts
const { body } = require('express-validator');

//Export router object with endpoints and controllers
module.exports = function() {
  router.get('/', controllers.indexController);

  router.get('/about', controllers.aboutController);

  router.get('/new_project', controllers.newProjectController);

  router.post('/new_project',
    body('nombre').not().isEmpty().trim().escape(),
    controllers.newProjectPOSTController);  
  
  router.get('/proyecto/:url', controllers.singleProjectController);

  router.get('/proyecto/editar/:id', controllers.singleProjectEdit);
 
  router.post('/proyecto/editar/:id',
    body('nombre').not().isEmpty().trim().escape(),
    controllers.editProjectPOSTController);

  
  router.delete('/proyecto/:url', controllers.projectDELETEController);

  return router;
}