'use client';
/*import { Component, ComponentProvider } from '@primereact/core/component';
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

Panel.displayName = 'Panel';*/

/*import { usePanel } from '@primereact/base/usepanel';
import * as React from 'react';

const PanelContext = React.createContext(undefined);

const PanelProvider = (options: any) => {
    return <PanelContext.Provider value={options.value}>{options.children}</PanelContext.Provider>;
};

export const Root = React.forwardRef((inProps: any, ref) => {
    const value = usePanel({ props: inProps, ref });

    return (
        <PanelProvider value={value}>
            <div {...value.root}>{inProps.children}</div>
        </PanelProvider>
    );
});

export const Header = React.forwardRef((inProps: any, ref) => {
    const context = React.useContext(PanelContext) as any;

    return <div {...context.header}>{inProps.children}</div>;
});

export const Footer = React.forwardRef((inProps: any, ref) => {
    const context = React.useContext(PanelContext) as any;

    return <div {...context.footer}>{inProps.children}</div>;
});

export const Panel = React.forwardRef((inProps, ref) => {
    return (
        <Root>
            <Header>HEADER</Header>
            <Footer>FOOTER</Footer>
        </Root>
    );
}) as any;

Panel.Root = Root;
Panel.Header = Header;
Panel.Footer = Footer;*/

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
