import { DocSection, DocTitle, DocCodeBlock, DocDescription } from "@/components/docs";

const ContextSection = ({ id }) => {
    return (
        <DocSection> 
            <DocTitle id={id}>
                Context
            </DocTitle>
            <DocDescription>
                Configuration is managed by the PrimeReactProvider and PrimeReactContext imported from primereact/api.
            </DocDescription>
            <DocCodeBlock>
                {`import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';`}
            </DocCodeBlock>
        </DocSection>
    );

};

export default ContextSection;
