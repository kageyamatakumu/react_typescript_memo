import React, { memo } from 'react';
import styled from "styled-components";

// props の型定義
type Props = {
    pastMemos: string[];
}
//

export const PastMemo = memo((props: Props) => {
    const { pastMemos } = props;

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
                    </li>
                )) }
            </SContainer>
        </>
    )
})