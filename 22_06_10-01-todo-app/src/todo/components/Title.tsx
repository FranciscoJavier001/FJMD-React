import React from 'react';
import { useTodos } from '../hooks/useTodos';

export const Title = () => {

    const { pendingTodos }  = useTodos(); //** De useTodos voy a extraerlos */

  return (
    <h1>
        Todo: { pendingTodos } 
    </h1>
  )
}
