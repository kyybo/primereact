import * as React from 'react';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.RefObject<HTMLDivElement>;
    header: any;
    headerTemplate: any;
    footer: any;
    footerTemplate: any;
    toggleable: any;
    style: any;
    className: any;
    collapsed: any;
    expandIcon: any;
    collapseIcon: any;
    icons: any;
    transitionOptions: any;
    onExpand: any;
    onCollapse: any;
    onToggle: any;
}
