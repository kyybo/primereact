import { DocSection, DocTitle, DocCodeBlock } from "@/components/docs";

const importCode = 
`import { InputText } from 'primereact/inputtext';`;

const ImportDoc = ({ id }) => {
    return (
        <DocSection> 
            <DocTitle id={id}>
                Import
            </DocTitle>
            <DocCodeBlock code={importCode} mode="basic">
            </DocCodeBlock>
        </DocSection>
    );

};

export default ImportDoc;
