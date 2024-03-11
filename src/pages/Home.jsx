import React from 'react';
import { Helmet } from "react-helmet";
import PageWrap from '../components/PageWrap';
import MainNavigation from '../components/MainNavigation';
import ContactForm from '../components/contactform/ContactForm';
import Intro from '../components/Intro';

function HomePage() {
    return (
        <>  
            <Intro />
            <PageWrap
                leftColumnContent={<div></div>}
                centerColumnContent={<div></div>}
                rightColumnContent={<div></div>}
            />
        </>

//         // <div className="bg-yellow-400 min-h-screen flex flex-col items-center justify-between">
//         //     <header className="w-full py-3 flex justify-between items-center px-10">
//         //         <div className="text-white font-bold text-lg">
//         //             SOURCE (0)
//         //         </div>
//         //         <div className="text-white font-bold text-lg">
//         //             Alexander <i className="fas fa-star"></i>
//         //         </div>
//         //         <div className="text-white font-bold text-lg">
//         //             <MainNavigation />
//         //         </div>
//         //     </header>
//         //     <main className="flex-grow flex flex-col items-center justify-center">
//         //         <div className="text-6xl text-black mb-4">
//         //             <i className="fas fa-eye"></i> <i className="fas fa-eye"></i>
//         //         </div>
//         //         <div className="w-full px-10">
//         //             <ContactForm />
//         //         </div>
//         //     </main>
//         //     <footer className="w-full py-5 bg-black">
//         //         <div className="flex justify-center">
//         //             {Array.from({ length: 5 }, (_, index) => (
//         //                 <div key={index} className="h-10 w-10 bg-gray-700 mx-1"></div>
//         //             ))}
//         //         </div>
//         //     </footer>
//         // </div>
    );
}

export default HomePage;
