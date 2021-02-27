const Proyecto = require('../models/Proyecto');

exports.indexController = async (req,res) => {
  const projects = await Proyecto.findAll();
  res.render('index', {
    title: "Inicio",
    projects
  }); //view name without .pug and object with context vars
}

exports.aboutController = async (req,res) => {
  const projects = await Proyecto.findAll();
  res.send('Nosotros', {
    title: 'Nosotros',
    projects
  });
}

exports.newProjectController = async (req,res) => {
  const projects = await Proyecto.findAll();

  res.render('new-project',{
    title: 'Nuevo Proyecto',
    projects
  });
}

exports.newProjectPOSTController = async(req, res) => {
  const { nombre } = req.body;
  let errores = [];
  let err_flag = false;

  if(nombre == '') {
    err_flag = true;
    errores.push('No hay nombre');
  }
  
  if (err_flag) {
    res.render('new-project', {
      title: 'Nuevo Proyecto',
      errores
    });
  } else {
    const newProject = await Proyecto.create({ nombre });
    res.redirect('/');
  }
}

exports.singleProjectController = async (req, res) => {
  const projects = await Proyecto.findAll();

  //res.send(req.params.url); // in req.params you can get variables from the router like /:url
  const proyecto = await Proyecto.findOne({
    where: {
      url: req.params.url
    }
  });

  if (!proyecto) {
    res.render('proyecto', {
      projects,
      title: 'Proyecto no encontrado :('
    });
  } else {
    res.render('proyecto', {
      title: proyecto.nombre,
      proyecto,
      projects
    });
  }
}