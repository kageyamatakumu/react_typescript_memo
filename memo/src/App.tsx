import React, { ChangeEvent, useCallback, useState, useContext } from 'react';
import styled from "styled-components";
import './index.css';

import { MemoList } from './compornents/MemoList';
import { PastMemo } from './compornents/PastMemo';
import { MemoContentContext } from './compornents/providers/MemoProvider';
import axios from 'axios';
import { Todos } from './compornents/Todos';

import type { TypeTodos } from './types/TypeTodos';


export const App = () => {
  const [text, setText] = useState<string>("");
  const [pastMemos, setPastMemo] = useState<string[]>([]);
  const [todos, setTodos] = useState<Array<TypeTodos>>([])

  // グローバルなState管理 メモ一覧
  const { memos, setMemos } = useContext(MemoContentContext);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    // input エリアの値を取得するロジック
    setText(e.target.value)
  }

  const onclickAdd = (): void => {
    // メモを追加するロジック
    const newMemos = [...memos];
    newMemos.push(text);

    setMemos(newMemos);
    setText('');
  }

  const onClickDelete = useCallback((index: number): void => {
    // メモ欄から削除するロジック
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);

  // 過去のメモ欄に追加するロジック
  const newPastMemo = [...pastMemos, memos[index]]
    setPastMemo(newPastMemo);
  }, [memos])


  const onClickFetchTodos = () => {
    axios.get<Array<TypeTodos>>("https://jsonplaceholder.typicode.com/todos")
    .then((result) => { setTodos(result.data) })
  }

  // styled-components
  const SButton = styled.button`
    margin-left: 16px;
  `
  //

  return (
    <>
      <div>
        <h1>メモアプリ</h1>
        <input type="text" value={ text } onChange={ onChangeInput }/>
        <SButton disabled={ !text } onClick={ onclickAdd }>メモする</SButton>
      </div>
      <MemoList memos={ memos } onClickDelete={ onClickDelete }/>
      <PastMemo pastMemos={ pastMemos }/>

      <h1>外部API 情報取得</h1>
      <button onClick={onClickFetchTodos}>todo情報取得</button>
      {todos.length != 0 ?
        todos.map((todo) => (
          <Todos userId={ todo.userId } title={ todo.title } completed={ todo.completed } />
        ))
        :
        <p>何もとってない</p>}
    </>
  )

  // disabled 'text'に文字があれば true → false、文字がなければ false → true に変わる。 disabled は true ならボタンが押せなくなる。
}
