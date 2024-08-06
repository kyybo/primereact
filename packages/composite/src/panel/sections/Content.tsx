'use client';
import * as React from 'react';
import { usePanelContext } from '../context';

export const Content = React.forwardRef((inProps: any, ref) => {
    const context = usePanelContext() as any;

    return (
        <div {...context.$sections.contentContainer}>
            <div {...context.$sections.content}>{inProps.children}</div>
        </div>
    );
});
