import { ComponentProvider } from '@primereact/core/component';
import * as React from 'react';
import { IconProvider } from '../base/Icon.context';
import { useIcon } from '../base/useIcon';

export const BlankIcon = React.forwardRef((inProps: any, ref: any) => {
    const icon = useIcon(inProps, ref);

    return (
        <ComponentProvider value={icon}>
            <IconProvider value={icon}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...icon.pti()}>
                    <rect width="1" height="1" fill="currentColor" fill-opacity="0" />
                </svg>
            </IconProvider>
        </ComponentProvider>
    );
});
