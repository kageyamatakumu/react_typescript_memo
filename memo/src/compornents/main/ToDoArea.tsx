import React from 'react';
import { animateScroll as scroll } from "react-scroll";


import { Todos } from '../Todos';

// カスタムフック
import { useFetchUsers } from '../../hooks/useFetchUsers';

export const ToDoArea = () => {
    // カスタムフック（Todoリストを取得）
    const { todos, setTodos, onClickFetchTodos } = useFetchUsers();

    // Todoリストを削除
    const onClickDeleteTodos = (): void => {
        const newTodos = [...todos];
        newTodos.splice(0);
        setTodos(newTodos);
    }

    // TOPに移動する
    const onClickTop = (): void => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    }

    // ライブラリを使ったスクロール機能
    const scrollToTop = (): void => {
        scroll.scrollToTop();
    };

    // Bottomに移動する
    const scrollToBottom = (): void => {
        scroll.scrollToBottom();
    };

    const scrollToMore = (): void => {
        scroll.scrollMore(100);
    }

    return (
        <>
            <h1 id="question">外部API 情報取得</h1>
            { todos.length !== 0 ?
            <button onClick={ onClickDeleteTodos }>何もない</button> :
            <button onClick={ onClickFetchTodos }>todo情報取得</button>
            }
            <button onClick={ scrollToBottom }>一番下に</button>
            <button onClick={ scrollToMore }>少し下に</button>
            { todos.length !== 0 ?
            <div>
            {todos.map((todo) => (
                <Todos userId={ todo.userId } title={ todo.title } completed={ todo.completed } />
            ))}
            <button onClick = { onClickTop }>TOPに戻す</button>
            <button onClick = { scrollToTop }>TOPに戻す(ライブラリ使用)</button>
            </div>
            :
            <p>何もとってない</p>
            }
        </>
    )
}
