import React, { createElement } from 'react';

export const Component = React.forwardRef((inProps: any, ref: any) => {
    const { is, children, ...rest } = inProps || {};

    return createElement(is, { ref, ...rest }, children);
});
