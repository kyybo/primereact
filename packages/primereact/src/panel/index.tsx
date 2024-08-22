'use client';
import * as CPanel from '@primereact/composite/panel';
import { Component } from '@primereact/core/component';
import * as React from 'react';

export const Panel = React.forwardRef((inProps: { header?: any; footer?: any; toggleable?: boolean; children: React.ReactNode }, ref) => {
    return (
        <CPanel.Root>
            <CPanel.Header>
                <CPanel.Header.Title>{inProps.header}</CPanel.Header.Title>
                <CPanel.Header.Actions>
                    <CPanel.ToggleButton />
                </CPanel.Header.Actions>
            </CPanel.Header>
            <Component>
                {({ state }: any) =>
                    !state.collapsed ? (
                        <CPanel.Content>
                            {inProps.children}
                            <CPanel.Footer>{inProps.footer}</CPanel.Footer>
                        </CPanel.Content>
                    ) : null
                }
            </Component>
        </CPanel.Root>
    );
});
