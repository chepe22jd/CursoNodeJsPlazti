const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res)=> {
  res.send("Hola mundo2");
});

app.get("/nueva-ruta", (req, res)=> {
  res.send("Hi, I am a new Route");
});

app.get("/productos", (req, res)=> {
  res.json(
    {
      name: "Proycto 1",
      price: 1000
    }
  );
});



app.listen(port, ()=>{
 console.log('My port: ' + port);
});
