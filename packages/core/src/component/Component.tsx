import { resolve } from '@primeuix/utils';
import * as React from 'react';
import { ComponentContext } from './Component.context';

export const Component = React.forwardRef((inProps: any, ref: any) => {
    const { is = React.Fragment, render, children, ...rest } = inProps || {};
    const context = React.useContext(ComponentContext);

    return render ? resolve(render, context) : React.createElement(is, { ref, ...rest }, resolve(children, context));
});
