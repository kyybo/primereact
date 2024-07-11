import React from 'react';
import ImportDoc from "./docs/importDoc";
import BasicDoc from './docs/basicDoc';

const InputTextDocs = () => {
    const sections = [
        {
            id: 'import',
            content: ImportDoc
        },
        {
            id: 'basic',
            content: BasicDoc
        }
       
    ];

    const renderSections = () => sections.map(section =>
        React.createElement(section.content, { id: section.id, key: section.id })
    );

    return (
        <div>
            <h1>InputText</h1>
            <p>InputText is an extension to standard input element with theming and keyfiltering.</p>
            {renderSections()}
        </div>
    );
};

InputTextDocs.getLayout = (page) => {
    return 'xd'
}

export default InputTextDocs;
