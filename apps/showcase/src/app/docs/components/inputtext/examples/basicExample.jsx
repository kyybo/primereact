'use client';

import React, { useState } from 'react';
import InputText from 'primereact/inputtext';

const BasicExample = () => {
    const [value, setValue] = useState('');

    return (
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
    );
};

export default BasicExample;
