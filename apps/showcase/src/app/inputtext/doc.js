import ImportSection from "@/doc/components/inputtext/features/import";
import BasicSection from '@/doc/components/inputtext/features/basic';

const featuresContent = {
    title: 'InputText',
    description: 'InputText is an extension to standard input element with theming and keyfiltering.',
    sections: [
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
    ]
}

const apiContent = {
    title: 'InputText API',
    description: 'API defines helper props, events and others for the PrimeReact InputText module.',
    sections: []
};

const themingContent = {
    title: 'InputText Theming',
    description: '',
    sections: []
};

const tabs = [
    {
        id: 'features',
        label: 'Features',
        content: featuresContent
    },
    {
        id: 'api',
        label: 'API',
        content: apiContent
    },
    {
        id: 'theming',
        label: 'Theming',
        content: themingContent
    },
    {
        id: 'pass-through',
        label: 'Pass Through',
        content: []
    }
];

const doc = {
    id: 'inputtext',
    tabs: tabs
};

export default doc;
