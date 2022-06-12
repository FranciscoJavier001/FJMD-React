
export interface Todo { //** Voy a exportar y defino con interface los tipos de lo que va a venir en el todo */
    id: string,
    desc: string,
    completed: boolean
}

export interface TodoState { //** Asi quiero que luzca la interface del TodoState y sus tipos */
    todoCount: number,
    todos: Todo[], //** Va a ser un arreglo de todos */
    completed: number,
    pending: number
}