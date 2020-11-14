// import {heroes} from './data/heroes'
// import {heroes} from './data/heroes'
// import heroes, {owners} from '../data/heroes';
import heroes from '../data/heroes';

export const getHeroeById = (id) => heroes.find((heroes) => heroes.id === id); 

// find?, filter
export const getHeroeByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner); 

