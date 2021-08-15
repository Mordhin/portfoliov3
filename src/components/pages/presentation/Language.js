import React from 'react';

export const Language = ({label}) => {
    return (
        <div className={`language ${label}`}>
            {label}
        </div>
    );
};