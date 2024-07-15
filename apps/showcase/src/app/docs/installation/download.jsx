import { DocSection, DocTitle, DocCodeBlock, DocDescription } from "@/components/docs";

const downloadCode = `// with npm
npm install primereact

// with yarn
yarn add primereact
`;

const DownloadSection = ({ id }) => {
    return (
        <DocSection> 
            <DocTitle id={id}>
                Download
            </DocTitle>
            <DocDescription>
                PrimeReact is available for download at <a href="https://www.npmjs.com/package/primereact">npm</a>.
            </DocDescription>
            <DocCodeBlock code={downloadCode}/>
        </DocSection>
    );

};

export default DownloadSection;
