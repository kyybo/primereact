'use client';
import * as CPanel from '@primereact/composite/panel';
import * as React from 'react';

export const Panel = React.forwardRef((inProps: { pt: any }, ref) => {
    return (
        <CPanel.Root {...inProps}>
            <CPanel.Header>
                <CPanel.HeaderTitle>HEADER</CPanel.HeaderTitle>
            </CPanel.Header>
            <CPanel.Footer>FOOTER</CPanel.Footer>
        </CPanel.Root>
    );
});
