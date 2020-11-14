// import {heroes} from './data/heroes'
// import {heroes} from './data/heroes'
// import heroes, {owners} from '../data/heroes';
import heroes from '../data/heroes';

// console.log(owners);

export const getHeroeById = (id) => heroes.find((heroes) => heroes.id === id); 

// console.log(getHeroeById(2));

// find?, filter
export const getHeroeByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner); 

// console.log(getHeroeByOwner('Marvel'));