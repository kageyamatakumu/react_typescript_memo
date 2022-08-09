import React, { createContext, ReactNode, useState } from "react";

export const MemoContentContext = createContext({} as {
    memos: string[];
    setMemos: React.Dispatch<React.SetStateAction<string[]>>
});

type Props = {
    children?: ReactNode;
}

export const MemoProvider = (props: Props) => {
    const { children } = props;

    const [memos, setMemos] = useState<string[]>([]);

    return(
        <MemoContentContext.Provider value={{memos, setMemos}}>
            { children }
        </MemoContentContext.Provider>
    )
}
