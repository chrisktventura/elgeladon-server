const route = require('express').Router();
const controllerPaletas = require('../controllers/paleta.controller');

// GET all paletas
route.get('/all-paletas', controllerPaletas.findAllPaletasController);
// GET chosen paleta
route.get('/paleta/:id', controllerPaletas.findByIdPaletasController);
// POST create paleta
route.post('/create-paleta', controllerPaletas.createPaletaController);
// PUT update paleta por id
route.put('/update-paleta/:id', controllerPaletas.updatePaletaController);
// DELETE paleta por id
route.delete('/delete-paleta/:id', controllerPaletas.deletePaletaController);

module.exports = route;
