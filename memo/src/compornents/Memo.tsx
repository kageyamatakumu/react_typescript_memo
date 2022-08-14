import React, { memo, useState, useContext, ChangeEvent } from 'react';
import styled from "styled-components";

import { MemoContentContext } from './providers/MemoProvider';

// props の型定義
type Props = {
    memo: string;
    index: number;
    onClickDelete: (index: number) => void;
}
//

export const Memo = memo((props: Props) => {
    const { memo, index, onClickDelete } = props;

    // グローバルなState管理 メモ一覧
    const { memos, setMemos } = useContext(MemoContentContext);

    // inputエリアを編集モードの ON/OFF
    const [isClick, setIsClick] = useState<boolean>(false);

    const [text, setText] = useState<string>(memos[index]);

    const handleClick = ():void => {
        // 編集モードにする
        setIsClick(true);
    }

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        // input エリアの値を取得するロジック
        setText(e.target.value);
    }

    const onClickEdit = (index: number) => {
        // メモ一覧を取得し、変数に代入
        const BeforeEditMemo = [...memos];
        // メモ一覧から"index"番目のメモを"text"編集した内容のメモと置き換える
        BeforeEditMemo.splice(index, 1, text);
        // 置き換えたメモは入ったメモ一覧を"setMemos"に渡す
        setMemos(BeforeEditMemo);
        // 編集モードを解除
        setIsClick(false);
    }

    // styled-components
    const SButton = styled.button`
        margin-left: 16px;
    `

    const Sp = styled.p`
        cursor: pointer;
    `
    //
    return(
        <>
            { isClick?
            <div>
                <input type="text" value={text} onChange={onChangeInput}></input>
                <SButton onClick={ () => onClickEdit(index) } >編集する</SButton>
            </div>
            :
            <div>
                <Sp onClick={handleClick}>{ memo }</Sp>
                <SButton onClick={ () => onClickDelete(index) }>削除</SButton>
            </div>
            }
        </>
    )
})