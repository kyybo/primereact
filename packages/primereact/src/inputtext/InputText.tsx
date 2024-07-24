import * as React from 'react';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    ref?: React.RefObject<HTMLInputElement>;
}

export const InputText = (props: InputTextProps) => {
    return (
        <>
            <input {...props} />
        </>
    );
};
