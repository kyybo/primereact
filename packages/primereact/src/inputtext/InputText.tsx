'use client';
import * as React from 'react';
import { combinedRefs } from '../utils/objectUtils';

interface InputTextProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value'> {
    ref?: React.RefObject<HTMLInputElement>;
    size?: number | string;
    invalid?: boolean;
    variant?: 'outlined' | 'filled';
    tooltip?: string;
    tooltipOptions?: object;
    validateOnly?: boolean;
    value?: string | null;
    unstyled?: boolean;
}

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>((props, ref) => {
    const elementRef = React.useRef(null);

    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        props?.onKeyDown?.(event);
    };

    const handleOnBeforeInput = (event: React.FormEvent<HTMLInputElement>) => {
        props?.onBeforeInput?.(event);
    };

    const handleOnInput = (event: React.FormEvent<HTMLInputElement>) => {
        props?.onInput?.(event);
    };

    const handleOnPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        props?.onPaste?.(event);
    };

    React.useEffect(() => {
        combinedRefs(elementRef, ref);
    }, [elementRef, ref]);

    const rootProps = {
        onKeyDown: handleOnKeyDown,
        onBeforeInput: handleOnBeforeInput,
        onInput: handleOnInput,
        onPaste: handleOnPaste
    };

    return (
        <>
            <input {...rootProps} ref={elementRef} />
        </>
    );
});
