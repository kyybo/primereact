import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    ref?: React.RefObject<HTMLInputElement>;
}

const InputText: React.FC<InputProps> = (props) => {
    return <>
        <input {...props}/>
    </>

};

export default InputText;
