'use client';

import { useState } from "react";
import CodeHighlight from "../misc/codeHighlight";

const DocCodeBlock = ({ code, lang, mode }) => {
    const [modeState, setModeState] = useState(mode || 'basic');
    const [langState, setLangState] = useState(lang || 'js');

    const toggleMode = () => {
        setModeState(modeState === 'basic' ? 'advanced' : 'basic');
    };

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText('magical code');
    }

    return (
        <div>  
            <div className="flex justify-end">
                <button onClick={() => toggleMode()}>toggle</button>
                <button onClick={copyToClipboard}>copy</button>
            </div>
            <CodeHighlight lang={langState}>
                {code?.[modeState] || code}
            </CodeHighlight>
        </div>
    )
};

export default DocCodeBlock
