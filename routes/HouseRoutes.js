const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HouseController');
const uploadFile = require('../utils/fileUpload');


router.get('/home', homeController.getHouses);
router.get('/home/:code', homeController.getHouseByCode); 
router.post('/home', homeController.createHouse);
router.delete('/home/:code', homeController.deleteHouse);
router.patch('/home/:code', homeController.updateHouse);
router.patch('/upload/:code/home',uploadFile, homeController.uploadPhoto);


/* //Configuracion de la libreria multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){        
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {    
    if(file.mimetype.startsWith('image/')){
        cb(null, true)
    }else{
        cb(new Error('El archivo no es una imagen'))
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter})

// Servicio web para el almacenamiento de archivos
router.patch('/upload/:code/home', upload.single('file'), (req, res) => {
    var code = req.params.code;
    if (!req.file) {
        return res.status(400).send({ 'status': 'error', 'message': 'No se proporcionó ningún archivo' });
    }

    var updateHouse = {
        image: req.file.path
    };

    HouseSchema.findOneAndUpdate({ code: code }, updateHouse, { new: true }).then((result) => {
        if (!result) {
            return res.status(404).send({ 'status': 'error', 'message': 'No se encontró ninguna casa con este código' });
        }
        res.send({ "status": "success", "message": "Archivo subido correctamente" });
    }).catch((error) => {
        console.log(error);
        res.status(500).send({ "status": "error", "message": "Error actualizando el registro" });
    });
}); */


module.exports = router;

