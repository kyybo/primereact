'use client';
import * as React from 'react';
import { PanelContext } from '../context';

export const Header = React.forwardRef((inProps: any, ref) => {
    const context = React.useContext(PanelContext) as any;

    return <div {...context.$sections.header}>{inProps.children}</div>;
}) as any;

export const HeaderTitle = React.forwardRef((inProps: any, ref) => {
    const context = React.useContext(PanelContext) as any;

    return <div {...context.$sections.title}>{inProps.children}</div>;
});

Header.Title = HeaderTitle;
