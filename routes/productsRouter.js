const express = require("express");
const ProductsServices = require('./../services/productsServices');

const router = express.Router();
const service = new ProductsServices;

router.get("/", async (req, res) =>{
  const products = await service.find()
  res.json(products);
 });

 router.get("/:id", async (req, res, next) => {
  try {
    const {id} = req.params;
    const products = await service.findOne(id);
    res.json(products);
  } catch (error) {
    next(error);
  }
 });

 router.post("/", async (req, res)=> {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
 });

 //EL PATC ES MEJOR PARA ENVIAR SOLO UNA MODIFCIAON
 //A UN O VARIOS PARAMETROS, MIENTRAS EL PUSH ES PARA
 //ACTAULIZAR TODO PERO HAY QUE NEVIAR TODO EL CUERPO
 //ESTO SEGUN LA DOCUMENTACION COMPLETA
 router.patch("/:id", async (req, res, next)=> {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
 });

 router.delete("/:id", async (req, res)=> {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
 });

 module.exports = router
