//** Recuerda escribir export para poderla usar fuera del archivo */
export interface CounterState { //** Defino la interface del estado inicial, osea le defino las variables */
    counter : number;
    previous : number;
    changes : number;
}