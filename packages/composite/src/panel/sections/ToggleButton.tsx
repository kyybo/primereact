'use client';
import * as React from 'react';
import { usePanelContext } from '../context';

export const ToggleButton = React.forwardRef((inProps: any, ref) => {
    const { id, props, state, $sections } = usePanelContext() as any;

    return props.toggleable ? <button {...$sections.toggleButton}>{state.collapsed ? '+' : '-'}</button> : null;
});
