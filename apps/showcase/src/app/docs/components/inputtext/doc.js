import ImportSection from "./features/sections/import";
import BasicSection from './features/sections/basic';

const featuresSections = [
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

const tabs = [
    {
        id: 'features',
        label: 'Features',
        sections: featuresSections
    },
    {
        id: 'api',
        label: 'API',
        sections: []
    },
    {
        id: 'theming',
        label: 'Theming',
        sections: []
    },
    {
        id: 'pass-through',
        label: 'Pass Through',
        sections: []
    }
];

const doc = {
    id: 'inputtext',
    title: 'InputText',
    description: 'InputText is an extension to standard input element with theming and keyfiltering.',
    tabs: tabs
};

export default doc;
