import { useProps } from '@primereact/hooks';
import { globalProps } from './Component.props';

export const withComponent = (callback: any, defaultProps: any) => {
    return (inProps?: any, ref?: any) => {
        const { props, attrs } = useProps(inProps, { ...globalProps, ...defaultProps });
        return callback(props, attrs, ref);
    };
};
