import { DocSection, DocTitle, DocCodeBlock, DocDescription } from "@/components/doc";

const contextCode = `import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';`

const ContextSection = ({ id }) => {
    return (
        <DocSection> 
            <DocTitle id={id}>
                Context
            </DocTitle>
            <DocDescription>
                Configuration is managed by the PrimeReactProvider and PrimeReactContext imported from primereact/api.
            </DocDescription>
            <DocCodeBlock code={contextCode} />
        </DocSection>
    );

};

export default ContextSection;
