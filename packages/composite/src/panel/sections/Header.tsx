'use client';
import * as React from 'react';
import { usePanelContext } from '../context';

export const Header = React.forwardRef((inProps: any, ref) => {
    const context = usePanelContext() as any;

    return <div {...context.$sections.header}>{inProps.children}</div>;
}) as React.ForwardRefExoticComponent<any> & {
    Title: typeof HeaderTitle;
    Actions: typeof HeaderActions;
};

export const HeaderTitle = React.forwardRef((inProps: any, ref) => {
    const context = usePanelContext() as any;

    return <div {...context.$sections.title}>{inProps.children}</div>;
});

export const HeaderActions = React.forwardRef((inProps: any, ref) => {
    const context = usePanelContext() as any;

    return <div {...context.$sections.headerActions}>{inProps.children}</div>;
});

Header.Title = HeaderTitle;
Header.Actions = HeaderActions;
