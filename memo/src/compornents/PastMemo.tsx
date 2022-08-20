import React, { memo } from 'react';
import styled from "styled-components";

// props の型定義
type Props = {
    pastMemos: string[];
    onClickBuck: (index: number) => void;
}
//

export const PastMemo = memo((props: Props) => {
    const { pastMemos, onClickBuck } = props;

    // styled-components
    const SContainer = styled.div`
        border: solid 1px #ccc;
        padding: 16px;
        margin: 8px;
    `
    //
    return(
        <>
            <SContainer>
                <h1>過去のメモ</h1>
                { pastMemos.map((memo: string, index: number) => (
                    <li key={ index }>
                        { memo }
                        <button onClick={ () => onClickBuck(index)}>戻す</button>
                    </li>
                )) }
            </SContainer>
        </>
    )
})