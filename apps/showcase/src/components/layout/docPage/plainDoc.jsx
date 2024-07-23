import docSectionsRenderer from "@/components/doc/docSectionsRenderer";
import SectionNav from "../sectionNav";

const PlainDoc = ({ doc }) => {
    return (
        <div className='doc'>
            <div className="doc-main">
                <div className="doc-intro">
                    <h1>{doc.title}</h1>
                    <p>{doc.description}</p>
                    {docSectionsRenderer(doc.sections)}
                </div>
            </div>
            <SectionNav className='doc-section-nav' sections={doc.sections} />
        </div>
    )
};

export default PlainDoc
