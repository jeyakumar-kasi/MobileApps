import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const LoadingToRedirect = () => {
    const [count, setCount] = useState(10);
    let navigate = useNavigate();

    useEffect(() => {
        const interval = window.setInterval(() => {
            setCount((currectCount) => --currectCount);
        }, 1000);

        count === 0 && navigate("/");

        // Clear 
        return () => window.clearInterval(interval);
    }, [count]);

    return <>
        <b>Redirecting in {count} seconds.</b>
    </>

    
}

export default LoadingToRedirect;