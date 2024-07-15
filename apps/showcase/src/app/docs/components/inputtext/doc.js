import ImportSection from "./sections/import";
import BasicSection from './sections/basic';

const sections = [
    {
        id: 'import',
        label: 'Import',
        content: ImportSection
    },
    {
        id: 'basic',
        label: 'Basic',
        content: BasicSection
    }
];

const doc = {
    id: 'inputtext',
    title: 'InputText',
    description: 'InputText is an extension to standard input element with theming and keyfiltering.',
    sections: sections
};

export default doc;
