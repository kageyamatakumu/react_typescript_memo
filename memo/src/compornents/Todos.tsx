import React from 'react';

import type { TypeTodos } from '../types/TypeTodos';

export const Todos = (props: TypeTodos ) => {
    const { userId, title, completed = false } = props;
    return (
        <div>
            <ul>
                <li style={completed ? { background: "#ffe4e1" } : { background: "#c7fff9" } }>
                    {`ユーザーID：${userId}`}
                    <br/>
                    {`やること：${title}`}
                    <br />
                    {completed? "[完]" : "[未]"}
                </li>
            </ul>
        </div>
    )
}
