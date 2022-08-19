import { useState } from 'react'
import axios from 'axios';

import type { TypeTodos } from '../types/TypeTodos';

export const useFetchUsers = () => {
    const [todos, setTodos] = useState<Array<TypeTodos>>([]);

    const onClickFetchTodos = () => {
        axios.get<Array<TypeTodos>>("https://jsonplaceholder.typicode.com/todos")
        .then((result) => { setTodos(result.data) })
    }

    return { todos, onClickFetchTodos };
}
