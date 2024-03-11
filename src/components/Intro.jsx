import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

function Intro() {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        console.log('Scroll event triggered'); // Simplified log to ensure this runs
        const scrollY = window.scrollY;
        setOffsetY(scrollY);
    };

    useEffect(() => {
        console.log('Adding scroll event listener'); // Confirm this runs
        window.addEventListener('scroll', handleScroll);
        return () => {
            console.log('Removing scroll event listener'); // Confirm this runs on cleanup
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [{ y }, set] = useSpring(() => ({ y: 0 }));


    const backgroundStyle = {
        transform: y.to(y => `translateY(${y}vh)`),
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><g fill="none" stroke="%23000" stroke-width="4"><path d="M0 40h30M50 40h30M40 0v30M40 50v30" stroke-linecap="square"/><circle cx="40" cy="40" r="10"/><path d="M20 20l20 20M20 60l20-20M60 20l-20 20M60 60l-20-20" stroke-linecap="butt" stroke-dasharray="1,9.5"/></g></svg>')`,
        backgroundSize: '80px 80px',
        backgroundColor: '#e4e4e4',
        minHeight: '100vh',
        minWidth: '100vw',
        position: 'fixed',
        width: '100%',
        top: '0',
        left: '0',
        zIndex: 10,
    };

    return <animated.div style={backgroundStyle}></animated.div>;
}

export default Intro;