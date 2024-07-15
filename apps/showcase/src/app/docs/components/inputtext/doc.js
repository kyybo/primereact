import ImportDoc from "./docs/importDoc";
import BasicDoc from './docs/basicDoc';

const sections = [
    {
        id: 'import',
        label: 'Import',
        content: ImportDoc
    },
    {
        id: 'basic',
        label: 'Basic',
        content: BasicDoc
    }
];

const doc = {
    id: 'inputtext',
    title: 'InputText',
    description: 'InputText is an extension to standard input element with theming and keyfiltering.',
    sections: sections
};

export default doc;
