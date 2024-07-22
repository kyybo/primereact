'use client';

import docSectionsRenderer from "@/components/docs/docSectionsRenderer";
import { useState } from "react";

const Tabs = ({ doc, children }) => {
    const [activeTab, setActiveTab] = useState(0);

    const createTabItems = () => {
        return doc.tabs.map((tab) => {
            return <div>{tab.label}</div>
        });
    }

    const createTabSections = (tabId) => {
        const tab = doc.tabs.find((tab) => tab.id === tabId);
        
        if (tab) {
            return docSectionsRenderer(tab.sections);
        }
    };

    return (
        <div className='doc-component'>
            <div className="doc-tabpanel">
                <div className="doc-main">
                    {createTabItems()}
                    {createTabSections('features')}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Tabs;
