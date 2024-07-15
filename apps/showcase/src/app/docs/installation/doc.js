import ContextSection from "./context";
import DownloadSection from "./download";

const sections = [
    {
        id: 'download',
        label: 'Download',
        content: DownloadSection
    },
    {
        id: 'context',
        label: 'Context',
        content: ContextSection
    }
];

const doc = {
    id: 'installation',
    title: 'Installation',
    description: 'PrimeReact is a rich set of open source UI components for React.',
    sections: sections
};

export default doc;
