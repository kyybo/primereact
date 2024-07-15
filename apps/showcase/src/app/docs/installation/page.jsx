import React from 'react';
import doc from './doc';

const InputTextDocs = () => {
    const renderDocSections = () => doc.sections.map(section =>
        React.createElement(section.content, { id: section.id, key: section.id })
    );

    return (
        <div>
            <h1>{doc.title}</h1>
            <p>{doc.description}</p>
            {renderDocSections()}
        </div>
    );
};

export default InputTextDocs;
