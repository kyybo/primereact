import { createElement } from 'react';

const docSectionsRenderer = (sections) => sections.map(section =>
    createElement(section.content, { id: section.id, key: section.id })
);

export default docSectionsRenderer;
