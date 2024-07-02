// PopUpContext.js
import React, { createContext, useContext, useRef } from 'react';

const PopUpContext = createContext();

export const PopUpProvider = ({ children }) => {
    const popUpRef = useRef(null);

    return (
        <PopUpContext.Provider value={popUpRef}>
            {children}
        </PopUpContext.Provider>
    );
};

export const usePopUp = () => {
    return useContext(PopUpContext);
};
