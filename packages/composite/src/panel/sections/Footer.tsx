'use client';
import { Component } from '@primereact/core/component';
import { resolve } from '@primeuix/utils/object';
import * as React from 'react';
import { usePanelContext } from '../context';

export const Footer = React.forwardRef((inProps: any, ref) => {
    const context = usePanelContext() as any;

    return inProps.asChild ? <Component is={'div'} {...context.$sections.footer}></Component> : resolve(inProps.children, context);
});
