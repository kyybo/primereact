import { DocSection, DocTitle, DocCodeBlock, DocDescription, DocExample } from "@/components/docs";
import BasicExample from "../examples/basicExample";
import { readFile } from "@/utils/readFile";

const sourceCode = readFile('/src/app/docs/components/inputtext/examples/basicExample.jsx')

const basicCode = 
`<InputText value={value} onChange={(e) => setValue(e.target.value)} />`;

const BasicDoc = ({ id }) => {
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


export default BasicDoc;
