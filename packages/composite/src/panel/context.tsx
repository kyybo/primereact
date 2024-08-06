'use client';
import * as React from 'react';

export const PanelContext = React.createContext(undefined);

export const PanelProvider = (options: any) => {
    return <PanelContext.Provider value={options.value}>{options.children}</PanelContext.Provider>;
};
