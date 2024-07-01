import React from 'react';

export function showPopUp(popUpRef) {
    if (popUpRef.current) {
        popUpRef.current.style.opacity = '1';
        setTimeout(() => {
            popUpRef.current.style.opacity = '0';
        }, 1000); // Tempo em milissegundos para esconder o popup (1 segundo no exemplo)
    }
}

