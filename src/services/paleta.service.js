const Paletas = require('../models/Paleta');

// Service for all paletas
const findAllPaletasService = async () => {
  const allPaletas = await Paletas.find();
  return allPaletas;
};

// Service for chosen paleta
const findByIdPaletasService = async (idParam) => {
  const paleta = await Paletas.findById(idParam);
  return paleta;
};

// Service for create paleta
const createPaletaService = async (newPaleta) => {
  const createdPaleta = await Paletas.create(newPaleta);
  return createdPaleta;
};

// Service for update paleta
const updatePaletaService = async (idParam, paletaEdited) => {
  const updatePaleta = await Paletas.findByIdAndUpdate(idParam, paletaEdited);
  return updatePaleta;
};

// Service for delete paleta
const deletePaletaService = async (idParam) => {
  return await Paletas.findByIdAndRemove(idParam);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletasService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
