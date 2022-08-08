import React, { ChangeEvent, useState } from 'react';
import styled from "styled-components"
import './index.css';


export const App = () => {
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onclickAdd = (): void => {
    const newMemos = [...memos];
    newMemos.push(text);

    setMemos(newMemos);
    setText('');
  }

  const onCkickDelete = (index: number): void => {
    const newMemos = [...memos];
    newMemos.splice(index, 1)
    setMemos(newMemos);
  }

  const [text, setText] = useState<string>("");
  const [memos , setMemos] = useState<string[]>([]);

  // styled-components
  const SButton = styled.button`
    margin-left: 16px;
  `

  const SContainer = styled.div`
    border: solid 1px #ccc;
    padding: 16px;
    margin: 8px;
  `

  const SMemoWrapper = styled.div`
    display: flex;
    align-items: center;
  `
  //
  return (
    <>
      <div>
        <h1>メモアプリ</h1>
        <input type="text" value={text} onChange={onChangeInput}/>
        <SButton onClick={onclickAdd}>メモする</SButton>
      </div>
      <SContainer>
        <h2>メモ一覧</h2>
        <ul>
          {memos.map((memo: string, index: number) => (
            <li key={index}>
              <SMemoWrapper>
                <p>{memo}</p>
                <SButton onClick={() => onCkickDelete(index)}>削除</SButton>
              </SMemoWrapper>
            </li>
          ))}
        </ul>
      </SContainer>
    </>
  )
}
