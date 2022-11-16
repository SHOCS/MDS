//Crear aplicación de express
const express = require('express');
const res = require('express/lib/response');
//Ejecutar aplicación de express
const app = express()
//Definicion del puerto, donde se manipulan las variables de ambiente
const port = process.env.PORT || 3000;

// Hola rama Hola3
app.get('/XDDDD',(req,res)=>{
    res.send('Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa soy JUAN DAVID RIVERA MARIN')
})

//cambios master
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})