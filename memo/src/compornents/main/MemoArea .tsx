import React, { ChangeEvent, useState, useContext } from 'react';
import styled from "styled-components";

// コンポーネント
import { MemoList } from '../MemoList';
import { PastMemo } from '../PastMemo';
import { MemoContentContext } from '../providers/MemoProvider';


export const MemoArea  = () => {
    const [text, setText] = useState<string>("");
    const [pastMemos, setPastMemo] = useState<string[]>([]);

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
        </>
    )
}
