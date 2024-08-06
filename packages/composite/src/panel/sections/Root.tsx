'use client';
import { usePanel } from '@primereact/base/usepanel';
import { Component, ComponentProvider } from '@primereact/core/component';
import { resolve } from '@primeuix/utils';
import * as React from 'react';
import { PanelProvider } from '../context';

export const Root = React.forwardRef((inProps: any, ref: any) => {
    const panel = usePanel(inProps, ref);

    return (
        <ComponentProvider value={panel}>
            <PanelProvider value={panel}>
                <Component is="div" {...panel.$sections.root}>
                    {resolve(inProps.children, panel)}
                </Component>
            </PanelProvider>
        </ComponentProvider>
    );
});
