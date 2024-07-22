import { DocSection, DocTitle, DocCodeBlock, DocDescription, DocExample } from "@/components/docs";
import BasicExample from "../examples/basicExample";
import fileHandler from "@/api/fileHandler";
import { useEffect, useState } from "react";

const basicCode = 
`<InputText value={value} onChange={(e) => setValue(e.target.value)} />`;

const BasicSection = ({ id }) => {
    const [sourceCode, setSourceCode] = useState('');

    const fetchSourceCode = async () => {
        const filePath = '/src/app/docs/components/inputtext/features/examples/basicExample.jsx'; // Specify your file path here
        const code = await fileHandler(filePath);

        return code;
    };
    
    useEffect(() => {
        setSourceCode(fetchSourceCode());
    }, []);
    
    return (
        <DocSection> 
            <DocTitle id={id}>
                Basic
            </DocTitle>
            <DocDescription>
                InputText is used as a controlled input with <i>value</i> and <i>onChange</i> properties.
            </DocDescription>
            <DocExample>
                <BasicExample />
            </DocExample>
            <DocCodeBlock code={basicCode} mode="basic" />
            <DocCodeBlock code={sourceCode} mode="advanced" />

        </DocSection>
    );
};


export default BasicSection;
