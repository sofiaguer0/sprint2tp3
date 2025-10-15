import express from 'express';

import { ObtenerSuperHeroePorIdController, obtenerTodosLosSuperHeroesController, buscarSuperHeroesPorAtributoController, obtenerSuperHeroesMayoresDe30Controller } from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperHeroesController);
router.get('/heroes/:id', ObtenerSuperHeroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperHeroesPorAtributoController);
router.get('/heroes/mayor/mayores-30', obtenerSuperHeroesMayoresDe30Controller);

export default router;