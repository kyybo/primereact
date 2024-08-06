import * as React from 'react';

// @todo Move to correct group
export const useId = (initialValue?: string) => {
    return initialValue || `pr_id_${React.useId().replaceAll(':', '')}`;
};

export const useProps = (props1: any = {}, props2: any = {}) => {
    return Object.keys(props1).reduce(
        (acc, key) => {
            if (props2.hasOwnProperty(key)) {
                acc.props[key] = props1[key];
            } else {
                acc.attrs[key] = props1[key];
            }

            return acc;
        },
        { props: props2, attrs: {} as any }
    );
};
