import React, { memo } from 'react';
import styled from "styled-components";

import { Memo } from './Memo';


// props の型定義
type Props = {
    memos: string[];
    onClickDelete: (index: number) => void;
}
//

export const MemoList= memo((props: Props) => {

    const { memos, onClickDelete } = props;


    // styled-components
    const SMemoWrapper = styled.div`
        display: flex;
        align-items: center;
    `
    const SButton = styled.button`
    margin-left: 16px;
    `

    const SContainer = styled.div`
    border: solid 1px #ccc;
    padding: 16px;
    margin: 8px;
    `
    //

    return(
        <>
            <SContainer>
                <h2>メモ一覧</h2>
                <ul>
                    { memos.map((memo: string, index: number) => (
                        <li key={ index }>
                        <SMemoWrapper>
                            <Memo memo={ memo } index={ index } onClickDelete={ onClickDelete } />
                        </SMemoWrapper>
                        </li>
                    )) }
                </ul>
            </SContainer>
        </>
    )
})