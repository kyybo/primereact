'use client';

import { useEffect, useState } from 'react';
import doc from './doc';
import docSectionsRenderer from '@/components/docs/docSectionsRenderer';

const InputTextDocs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabItemsRenderer = () => {
        return doc.tabs.map((tab, key) => {
            return <div key={key} onClick={() => setActiveTab(key)}>{tab.label}</div>;
        });
    }
    
    const tabBodyRenderer = () => {
        if (doc.tabs[activeTab]) {
            return docSectionsRenderer(doc.tabs[activeTab].sections);
        }
    };
    
    return (
        <div>
            <h1>{doc.title}</h1>
            <p>{doc.description}</p>
            {tabItemsRenderer()}
            {tabBodyRenderer()}
        </div>
    );
};


export default InputTextDocs;
