'use client';

import { useState } from "react";
import CodeHighlight from "../misc/codeHighlight";

const DocCodeBlock = ({ code, lang, mode }) => {
    const [modeState, setModeState] = useState(mode || 'basic');
    const [langState, setLangState] = useState(lang || 'js');

    const toggleMode = () => {
        setModeState(mode === 'basic' ? 'advanced' : 'basic');
    };

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code[lang]);
    }

    return (
        <CodeHighlight lang={langState}>
            {code?.[modeState] || code}
        </CodeHighlight>
    )
};

export default DocCodeBlock
