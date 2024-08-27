import { useComponent, withComponent } from '@primereact/core/component';
import { isEmpty } from '@primeuix/utils';

export const useIcon = withComponent((props: any, attrs: any, ref?: React.RefObject<any>) => {
    const { isUnstyled } = useComponent({ props }, ref);

    const pti = () => {
        const isLabelEmpty = isEmpty(props.label);

        return {
            ...(!isUnstyled && {
                className: [
                    'p-icon',
                    {
                        'p-icon-spin': props.spin
                    }
                ]
            }),
            role: !isLabelEmpty ? 'img' : undefined,
            'aria-label': !isLabelEmpty ? props.label : undefined,
            'aria-hidden': isLabelEmpty
        };
    };

    return {
        pti
    };
}, {});
