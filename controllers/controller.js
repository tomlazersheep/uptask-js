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

exports.newProjectPOSTController = (req, res) => {
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
    res.send('pasaste  sin errores '+ nombre);
  }
}