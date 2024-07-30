export const combinedRefs = (innerRef: any, forwardRef: any) => {
    if (innerRef && forwardRef) {
        if (typeof forwardRef === 'function') {
            forwardRef(innerRef.current);
        } else {
            forwardRef.current = innerRef.current;
        }
    }
};
