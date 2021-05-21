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
  const projects = await Proyecto.findAll();
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
      errores,
      projects
    });
  } else {
    const newProject = await Proyecto.create({ nombre });
    res.redirect('/');
  }
}

exports.singleProjectController = async (req, res) => {
  //make one query, await untill done and then do the other
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

exports.singleProjectEdit = async (req, res) => {
  const projects_promise = Proyecto.findAll();
  const project_promise = Proyecto.findOne({
    where: {
      id: req.params.id
    }
  });

  // mix both promises and make both queries simoultaneously
  const [projects, project] = await Promise.all([projects_promise, project_promise]);

  res.render('new-project', {
    title: `Editar Proyecto: ${project.nombre}`,
    project,
    projects
  });
}

exports.editProjectPOSTController = async (req, res) => {
  const projects = await Proyecto.findAll();
  const { nombre } = req.body;
  let errores = [];
  let err_flag = false;

  if (nombre == '') {
    err_flag = true;
    errores.push('No hay nombre');
  }

  if (err_flag) {
    res.render('new-project', {
      title: 'Nuevo Proyecto',
      errores,
      projects
    });
  } else {
    const newProject = await Proyecto.update(
      { nombre: nombre },
      { where: { id: req.params.id }}
      );
    res.redirect('/');
  }
}

exports.projectDELETEController = async (req,res) => {
  const projectToDelete = await Proyecto.findOne({
    where: {
      url: req.params.url
    }
  });

  if (!projectToDelete) {
    res.send(500);
  } else {
    await projectToDelete.destroy();
    res.send(200);
  }
}