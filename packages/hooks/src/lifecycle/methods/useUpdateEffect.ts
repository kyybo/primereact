import * as React from 'react';

export const useUpdateEffect = (fn: any, deps?: any[]) => {
    const mounted = React.useRef(false);
    return React.useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            return;
        }

        return fn && fn();
    }, deps);
};
