require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB conectado");
})
.catch(err => {
    console.log("Error MongoDB:", err);
});

app.get("/", (req,res)=>{
    res.json({
        mensaje: "API Sistema Experto funcionando"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en puerto ${PORT}`);
});
