const express = require("express");
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/errorHandler');
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.get("/nueva-ruta", (req, res) =>{
  res.send("Nueva ruta");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () =>{
  console.log("My port: " + port);
});
