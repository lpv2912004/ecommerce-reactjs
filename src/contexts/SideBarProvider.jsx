import { createContext, useState } from 'react';

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');

    const value = { isOpen, setIsOpen, type, setType };
    return (
        <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
    );
};
