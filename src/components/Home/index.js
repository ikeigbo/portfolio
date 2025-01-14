import './index.scss'; 
import Logo from './Logo';
import LogoTitle from '../../assets/images/logo-I.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';

const Home = () => {


    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['k', 'e', 'c', 'h', 'u', 'k', 'w', 'u'];
    const jobArray = ['D', 'e', 'v', 'O', 'p', 's', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);



    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    
                <img src={LogoTitle} alt="ik"/>
                <AnimatedLetters letterClass={letterClass} 
                    strArray={nameArray} 
                    idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} 
                    strArray={jobArray} 
                    idx={21}/>
        
                </h1>

                <h2>AWS / DevOps / Cloud</h2>
                <Link to="/contact" className="flat-button">Contact Me</Link>

            </div>

            <Logo />
        </div>
        <Loader type="pacman" />

        </>
    );
}

export default Home;