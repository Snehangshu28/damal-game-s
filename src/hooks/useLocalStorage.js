import { useEffect, useState } from 'react';

const useLocalStorage = () => {
    const [val, setVal] = useState(() => {
        return localStorage.getItem('USER') ? JSON.parse(localStorage.getItem('USER')) : null;
    });
    
    useEffect(() => {
        localStorage.setItem('USER', JSON.stringify(val))
    }, [val])

    return [val, setVal];
}

export { useLocalStorage }