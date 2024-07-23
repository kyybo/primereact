import ImportSection from "@/docs/components/inputtext/features/import";
import BasicSection from '@/docs/components/inputtext/features/basic';

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

const passThroughContent = {
    title: 'InputText Pass Through',
    description: '',
    sections: []
};

const tabs = [
    {
        id: 'features',
        label: 'FEATURES',
        content: featuresContent
    },
    {
        id: 'api',
        label: 'API',
        content: apiContent
    },
    {
        id: 'theming',
        label: 'THEMING',
        content: themingContent
    },
    {
        id: 'pass-through',
        label: 'PASS THROUGH',
        content: passThroughContent
    }
];

const doc = {
    id: 'inputtext',
    tabs: tabs
};

export default doc;
