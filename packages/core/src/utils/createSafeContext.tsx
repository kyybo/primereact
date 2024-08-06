import { resolve } from '@primeuix/utils/object';
import * as React from 'react';

export function createSafeContext<ContextValue>(defaultValue: any = null) {
    const Context = React.createContext<ContextValue | null>(defaultValue);

    const useContext = () => React.useContext(Context);
    const Provider = ({ value, children }: { value: ContextValue; children: React.ReactNode }) => <Context.Provider value={value}>{resolve(children, value)}</Context.Provider>;

    return [Provider, useContext] as const;
}
