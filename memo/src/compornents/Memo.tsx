import React, { memo, useState } from 'react';
import styled from "styled-components";

// props の型定義
type Props = {
    memo: string;
    index: number;
    onClickDelete: (index: number) => void;
}
//

export const Memo = memo((props: Props) => {
    const { memo, index, onClickDelete } = props;

    const [isClick, setIsClick] = useState<boolean>(false);
    const [text, setText] = useState<string>(memo)
    const [editMemo, setEditMemo] = useState<string>('')

    const handleClick = ():void => {
        setIsClick(true);
    }

    const onChangeInput = (e: any) => {
        // input エリアの値を取得するロジック
        setText(e.target.value);
    }

    const onClickEdit = (index: number) => {
        setEditMemo(text);
        setIsClick(false);
    }

    // styled-components
    const SButton = styled.button`
        margin-left: 16px;
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
                <p onClick={handleClick}>{ editMemo ? editMemo : memo }</p>
                <SButton onClick={ () => onClickDelete(index) }>削除</SButton>
            </div>
            }
        </>
    )
})