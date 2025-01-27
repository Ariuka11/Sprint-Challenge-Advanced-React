import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

function useDarkMode() {
        const [value, setValue] = useLocalStorage('isDarkMode');

        useEffect(() => {
            return value ? document.body.classList.add('dark-mode-button') : document.body.classList.remove('dark-mode-button')
        }, [value]);

        return [value, setValue]
    }

    export default useDarkMode;