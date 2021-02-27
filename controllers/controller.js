const Proyecto = require('../models/Proyecto');

exports.indexController = async (req,res) => {
  const projects = await Proyecto.findAll();
  res.render('index', {
    title: "Inicio",
    projects
  }); //view name without .pug and object with context vars
}

exports.aboutController = (req,res) => {
  res.send('Nosotros',{
    title: 'Nosotros'
  });
}

exports.newProjectController = (req,res) => {
  res.render('new-project',{
    title: 'Nuevo Proyecto'
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