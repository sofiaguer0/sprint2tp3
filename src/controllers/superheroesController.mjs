import { obtenerSuperHeroePorId, obtenerTodosLosSuperHeroes, buscarSuperHeroesPorAtributo, obtenerSuperHeroesMayoresDe30 } from "../services/superheroesService.mjs";
import { renderizarSuperHeroe, renderizarListaSuperHeroes } from '../views/responseView.mjs';

export async function ObtenerSuperHeroePorIdController(req, res) {
    try{

        const {id} = req.params;
        const superheroe = await obtenerSuperHeroePorId(id);
        console.log(superheroe);
        if(!superheroe) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado, capo!' });
        }

        const superheroeFormateado = renderizarSuperHeroe(superheroe);
        res.status(200).json(superheroeFormateado);

    } catch (error) {
        
        res.status(500).send({ mensaje: 'Error al obtener el superhéroe por ID', error: error.menssage });

    }
}

export async function obtenerTodosLosSuperHeroesController(req, res) {
    
    try{

        const superheroes = await obtenerTodosLosSuperHeroes();
        const superoheroesFormateados = renderizarListaSuperHeroes(superheroes);

        res.status(200).json(superoheroesFormateados);

    } catch (error) {

        res.status(500).send({ mensaje: 'Error al obtener los superhéroes.', error: error.menssage });

    }

}

export async function buscarSuperHeroesPorAtributoController(req, res) {
    
    try {

        const {atributo, valor} = req.params;
        const superheroes = await buscarSuperHeroesPorAtributo(atributo, valor);

        if(superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes con ese atributo' });
        }

        const superheroeFormateado = renderizarListaSuperHeroes(superheroes);
        res.status(200).json(superheroeFormateado);


    } catch(error) {

        res.status(500).send({ mensaje: 'Error al buscar los superhéroes por atributo.', error: error.menssage });

    }

}


export async function obtenerSuperHeroesMayoresDe30Controller(req, res) {
    
    try {

        const superheroes = await obtenerSuperHeroesMayoresDe30();
        console.log(superheroes);
        if(superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes mayores de 30 años' });
        }

        const superheroeFormateado = renderizarListaSuperHeroes(superheroes);
        res.status(200).json(superheroeFormateado);


    } catch(error){
        res.status(500).send({ mensaje: 'Error al obtener los superhéroes mayores de 30.', error: error.menssage });
    }

}