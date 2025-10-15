export function renderizarSuperHeroe(superheroe) {

    return {
       /*  id: superheroe.id, */
        Nombre: superheroe.nombreSuperHeroe,
        "Nombre Real": superheroe.nombreReal,
        "Nombre Sociedad": superheroe.nombreSociedad,
        Edad: superheroe.edad,
        "Planeta Origen": superheroe.planetaOrigen,
        Debilidad: superheroe.debilidad,
        Poderes: superheroe.poderes,
        "Habilidad Especial": superheroe.habilidadEspecial,
        Aliado: superheroe.aliado,
        Enemigo: superheroe.enemigo
    };
}

export function renderizarListaSuperHeroes(superheroes){
    return superheroes.map(superheroe => renderizarSuperHeroe(superheroe));
}