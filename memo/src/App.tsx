import React, { ChangeEvent, useState, useContext } from 'react';
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import './index.css';

// コンポーネント
import { MemoList } from './compornents/MemoList';
import { PastMemo } from './compornents/PastMemo';
import { MemoContentContext } from './compornents/providers/MemoProvider';
import { Todos } from './compornents/Todos';

// カスタムフック
import { useFetchUsers } from './hooks/useFetchUsers'

export const App = () => {
  const [text, setText] = useState<string>("");
  const [pastMemos, setPastMemo] = useState<string[]>([]);

  // カスタムフック（Todoリストを取得）
  const { todos, onClickFetchTodos } = useFetchUsers();

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

  const onClickDelete = (index: number): void => {
    // メモ欄から削除するロジック
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);

  // 過去のメモ欄に追加するロジック
    const newPastMemo = [...pastMemos, memos[index]];
    setPastMemo(newPastMemo);
  }

  const onClickBuck = (index: number): void => {
    // 過去のメモ欄から削除するロジック
    const newPastMemo = [...pastMemos];
    newPastMemo.splice(index, 1);
    setPastMemo(newPastMemo);

    // メモ欄に戻すロジック
    const newMemos = [...memos, pastMemos[index]];
    setMemos(newMemos);
  }

  // TOPに移動する
  const onClickTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // Bottomに移動する
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollToMore = () => {
    scroll.scrollMore(100);
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
      <PastMemo pastMemos={ pastMemos } onClickBuck={ onClickBuck }/>

      <h1 id="question">外部API 情報取得</h1>
      <button onClick={ onClickFetchTodos }>todo情報取得</button>
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

  // disabled 'text'に文字があれば true → false、文字がなければ false → true に変わる。 disabled は true ならボタンが押せなくなる。
}
