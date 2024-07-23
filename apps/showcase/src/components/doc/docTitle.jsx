'use client';

import { createElement } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DocTitle = ({id, level = 2, children}) => {
    const pathname = usePathname();

    const content = (
        <>
            {children}
            <Link href={ pathname + '#' + id} target="_self">
                #
            </Link>
        </>
    );

    const Title = (titleProps) => {
        return createElement(`h${level}`, { className: 'doc-section-label' }, titleProps.children);
    };

    return <Title>{content}</Title>
};

export default DocTitle;
