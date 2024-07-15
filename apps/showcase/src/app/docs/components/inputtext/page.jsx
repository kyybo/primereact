import doc from './doc';
import docSectionsRenderer from '@/components/docs/docSectionsRenderer';

const InputTextDocs = () => {
    return (
        <div>
            <h1>{doc.title}</h1>
            <p>{doc.description}</p>
            {docSectionsRenderer(doc.sections)}
        </div>
    );
};

export default InputTextDocs;
