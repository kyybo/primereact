import PlainDoc from "./plainDoc";
import TabbedDoc from "./tabbedDoc";

const DocPage = ({ doc, hasTabs }) => {
    const docHasTabs = hasTabs || doc.tabs && doc.tabs.length > 0;

    if (docHasTabs) {
        return <TabbedDoc doc={doc} />
    }

    return <PlainDoc doc={doc} />
};

export default DocPage; 
