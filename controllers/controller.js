exports.indexController = (req,res) => {
  res.render('index', {
    title: "Inicio"
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