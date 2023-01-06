 const express = require('express');
 const productsRouter = require('./productsRouter');
 const categoriesRouter = require('./categoriesRoutes');
 const usersRouter = require('./usersRoutes');

function routerApi(app){
  //es para tomar versiones pro ejm si quiero crear
  //otras versiones de test pues pruebo esto mismo y
 //cmabio el v2
  const router = express.Router( );
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
