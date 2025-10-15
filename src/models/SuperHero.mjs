import mongoose from 'mongoose';

const supeherorSchema = new mongoose.Schema({
    /* id: { type: Number }, */
    nombreSuperheroe: { type: String, require: true },
    nombreReal: { type: String, require: true },
    nombreSociedad: String,
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: "Desconocido" },
    debilidad: String,
    poderes: [String],
    habilidadEspecial: String,
    aliado: [String],
    enemigo: [String],
    creador: String,
    createdAt: { type: Date, default: Date.now }
    
  });

const superHero = mongoose.model('SuperHero', supeherorSchema, 'Grupo-19');
export default superHero;