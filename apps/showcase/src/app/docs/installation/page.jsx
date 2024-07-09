import React from 'react';
import DownloadSection from "./download";
import ContextSection from './context';

const InstallationDocs = () => {
    const sections = [
        {
            id: 'download',
            content: DownloadSection
        },
        {
            id: 'context',
            content: ContextSection
        }
    ];

    const renderSections = () => sections.map(section =>
        React.createElement(section.content, { id: section.id, key: section.id })
    );

    return (
        <div>
            <h1>Installation</h1>
            {renderSections()}
        </div>
    );
};

export default InstallationDocs;
