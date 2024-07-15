import docSectionsRenderer from '@/components/docs/docSectionsRenderer';
import doc from './doc';

const InstallationDocs = () => {
    return (
        <div>
            <h1>{doc.title}</h1>
            <p>{doc.description}</p>
            {docSectionsRenderer(doc.sections)}
        </div>
    );
};

export default InstallationDocs;
