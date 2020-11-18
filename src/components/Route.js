import { useEffect, useState } from 'react';


function Route({ path, children }) {

    const [currentPath, setCurrentPath ] = useState(window.location.pathname);

    const onLocationChange = () => {
        setCurrentPath(window.location.pathname);
    };

    useEffect(() => {   
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return currentPath === path ?
    children: null;
}

export default Route;
