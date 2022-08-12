import React from 'react'

type Todos = {
    userId: number;
    title: string;
    completed?: boolean;
}

export const Todos = (props: Todos ) => {
    const { userId, title, completed = false} = props;
    return (
        <div>
            <ul>
                <li>
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