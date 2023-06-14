const express = require("express")
const cors = require('cors');
const { dbConnection } = require("./database/config")
require('dotenv').config();

const rutasProductos = require("./routes/products.routes");

const app = express()

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API v1.0 con mongoose");
})

(async () => {
    await dbConnection();
    app.use(rutasProductos);
    app.listen(process.env.PORT, () => {
        console.log(`La aplicación está corriendo en el puerto: ${process.env.PORT}`);
    });
})();

console.log(process.env.PORT);