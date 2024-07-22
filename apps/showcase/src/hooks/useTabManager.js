'use client'

import { useState } from 'react';

const useTabManager = () => {
    const [activeTab, setActiveTab] = useState(0);

    const changeTab = (tab) => {
        setActiveTab(tab);
    };

    return { activeTab, changeTab };
}

export default useTabManager;
