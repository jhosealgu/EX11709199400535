var express = require('express');
var router = express.Router();
//es para generar un identificador unico
var uuid = require('uuid/v4');
var objetoCollection = [];

var objetoStruct = {
id:'',
receta:'',
precio:'',
tipo:'',
observacion:'',
estado:''
}

objetoCollection.push(

	Object.assign(
		{},
		objetoStruct,
		{
			id:uuid(),
			receta:'Jarabe para la tos',
			precio:'',
			tipo:'oral',
            observacion:'tomar cada doce horas',
            estado:''
		}
	)
);

router.get('/', (req, res, next)=>{
	// Obtiene la coleccion de objetos
	res.status(200).json(objetoCollection);
});// get 

router.get('/:id', (req, res, next)=>{
	res.status(403).json({msg:"not implemented"});
});//get one by Id


router.post('/',(req, res, next)=>{
	res.status(403).json({msg:"not implemented"});
});// post //crear un nuevo


router.put('/:id', (req, res, next)=>{
	res.status(403).json({msg:"not implemented"});
});//put //modificar


module.exports = router;