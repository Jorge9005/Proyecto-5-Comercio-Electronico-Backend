const express = require('express');
const cors = require('cors');
const { dbConnection } = require("./database/config");
require('dotenv').config();

const rutasProductos = require("./routes/productos.routes");
const rutasUsuarios = require("./routes/usuarios.routes");


const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("API v1.0 con mongoose");
});


( async ()=>{
    // Carga las rutas
    await dbConnection();
    app.use(rutasProductos);
    app.use(rutasUsuarios);
    app.listen(process.env.PORT, ()=>{
        console.log(`La aplicacion esta corriendo en el puerto: ${process.env.PORT}`);
    });

} )();