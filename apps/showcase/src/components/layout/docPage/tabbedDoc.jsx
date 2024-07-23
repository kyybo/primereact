'use client';

import docSectionsRenderer from "@/components/doc/docSectionsRenderer";
import { useState } from "react";
import SectionNav from "../sectionNav";

const TabbedDoc = ({ doc }) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabItemsRenderer = () => {
        const tabs = doc.tabs.map((tab, key) => {
            return <li key={key} className={activeTab === key ? 'doc-tabmenu-active' : ''}>
                <button onClick={() => setActiveTab(key)}>{tab.label}</button>
            </li>;
        });

        return <ul className="doc-tabmenu">
            {tabs}
        </ul>
    }
    
    const tabBodyRenderer = () => {
        if (doc.tabs[activeTab]) {
            return docSectionsRenderer(doc.tabs[activeTab].content.sections);
        }
    };

    const tabHeaderRenderer = () => {
        const { title, description } = doc.tabs[activeTab].content;

        return <div className='doc-intro'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    }

    return  <div className='doc-component'>
        {tabItemsRenderer()}
        <div className="doc-tabpanels">
            <div className="doc-tabpanel">
                <div className="doc-main">
                    {tabHeaderRenderer()}
                    {tabBodyRenderer()}
                </div>
                <SectionNav className='doc-section-nav' sections={doc.tabs[activeTab].content.sections} />
            </div>
        </div>
    </div>
};

export default TabbedDoc;
