import React from 'react';

export const Language = ({label, children}) => {
    return (
        <div className={`language ${label}`}>
            {children}{label}
        </div>
    );
};