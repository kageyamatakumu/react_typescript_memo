import React, { ChangeEvent, useCallback, useState } from 'react';
import styled from "styled-components";
import './index.css';

import { MemoList } from './compornents/MemoList';
import { PastMemo } from './compornents/PastMemo';


export const App = () => {
  const [text, setText] = useState<string>("");
  const [memos , setMemos] = useState<string[]>([]);
  const [pastMemos, setPastMemo] = useState<string[]>([]);

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

  const onCkickDelete = useCallback((index: number): void => {
    // メモ欄から削除するロジック
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);

    // 過去のメモ欄に追加するロジック
    const newPastMemo = [...pastMemos, memos[index]]
    setPastMemo(newPastMemo);
  }, [memos])

  // styled-components
  const SButton = styled.button`
    margin-left: 16px;
  `
  //

  return (
    <>
      <div>
        <h1>メモアプリ</h1>
        <input type="text" value={text} onChange={onChangeInput}/>
        <SButton onClick={onclickAdd}>メモする</SButton>
      </div>
      <MemoList memos={memos} onCkickDelete={onCkickDelete}/>
      <PastMemo pastMemos={pastMemos}/>
    </>
  )
}
