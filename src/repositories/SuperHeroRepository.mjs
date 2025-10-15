import superHero from "../models/SuperHero.mjs";
import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {

    async obtenerPorId(id) {
        return await SuperHero.findById(id);
        /* return await SuperHero.findOne({id}); */
    }

    async obtenerTodos() {
        return await SuperHero.find();
    }

    async buscarPorAtributo(atributo, valor){

        // Funcion para que detecte las mayusculas como las minusculas;
        // objeto vacio
        const query = {};
    
        // Detectar si es número y que no sea una cadena vacia
        if (!isNaN(valor) && valor !== '') {
            query[atributo] = Number(valor);
        } else {
            // Ignorar las mayusculas y minusculas
            query[atributo] = new RegExp(valor, "i");
        }
        
        return await SuperHero.find(query);

        
        /* return await SuperHero.find({ [atributo]: valor }); */
    }

    async obtenerMayoresDe30() {
        //operador $gte (greater than or equal) de MongoDB
        return await SuperHero.find({edad: {$gte: 30}, planetaOrigen:'Tierra', 'poderes.1':{$exists: true}});
    }

}

export default new SuperHeroRepository();