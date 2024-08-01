import React, { createContext } from 'react';

export const ComponentContext = createContext<any>(undefined);

export const ComponentProvider = (options: any) => {
    const getProps = () => {
        return undefined;
    };

    const value = {
        getProps,
        ...options
    };

    return <ComponentContext.Provider value={value}>{options.children}</ComponentContext.Provider>;
};
