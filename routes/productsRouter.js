const express = require("express");
const faker = require("faker");

const router = express.Router();

router.get("/", (req, res) =>{
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for(let index = 0; index < limit; index++){
   products.push({
     name: faker.commerce.productName(),
     price: faker.commerce.price(),
     image: faker.image.imageUrl(),
   })
  }
  res.json(products);
 });

 router.get("/:id", (req, res) => {
   const {id} = req.params;
   res.json({
     id: id,
     name: 'Producto 1',
       price: 1000
   });
 });

 router.post("/", (req, res)=> {
  const body = req.body;
  res.json(
    {
      message: 'created',
      data: body
    }
  );
 });

 //EL PATC ES MEJOR PARA ENVIAR SOLO UNA MODIFCIAON
 //A UN O VARIOS PARAMETROS, MIENTRAS EL PUSH ES PARA
 //ACTAULIZAR TODO PERO HAY QUE NEVIAR TODO EL CUERPO
 //ESTO SEGUN LA DOCUMENTACION COMPLETA
 router.patch("/:id", (req, res)=> {
  const { id } = req.params;
  const body = req.body;
  res.json(
    {
      message: 'update',
      data: body,
      id,
    }
  );
 });

 router.delete("/:id", (req, res)=> {
  const { id } = req.params;
  res.json(
    {
      message: 'deleted',
      id,
    }
  );
 });

 module.exports = router
