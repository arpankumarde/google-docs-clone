import React, { useEffect, useState } from 'react'

function getStorageValue(key, defaultValue) {
    //getting stored key & value
    const saved = JSON.parse(localStorage.getItem(key));
    return saved || defaultValue;
}

export const uselocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        //storing key and value
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};
