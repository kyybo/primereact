'use client';
import { usePanel } from '@primereact/base/usepanel';
import * as React from 'react';
import { PanelProvider } from '../context';

export const Root = React.forwardRef((inProps: any, ref: any) => {
    const data = usePanel(inProps, ref);

    return (
        <PanelProvider value={data}>
            <div {...data.$sections.root}>{inProps.children}</div>
        </PanelProvider>
    );
});
