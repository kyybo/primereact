'use client';

import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

const BasicExample = () => {
    const [value, setValue] = useState('');

    return (
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
    );
};

export default BasicExample;
