import { Component, ComponentProvider } from '@primereact/core/component';
import * as React from 'react';
import { usePanel } from './Panel.base';

export const Panel = React.forwardRef((inProps, ref) => {
    const { props, $sections } = usePanel({ props: inProps, ref });

    return (
        <ComponentProvider instance={ref} props={props}>
            <Component is="div" {...$sections.ROOT}>
                <span {...$sections.HEADER}>{props.header}</span>
                {props.children}
            </Component>
        </ComponentProvider>
    );
});

Panel.displayName = 'Panel';
