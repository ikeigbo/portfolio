import './index.scss'
import {
    faAws,
    faDocker,
    faGitAlt,
    faGolang,
    faLinux,
    faPython,
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';


const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)

      return () => {
        clearTimeout(timer)
      }

    }, [])


    return (
        <>
            <div className="conatiner about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am a full stack developer with a passion for creating innovative and user-friendly digital experiences.
                    </p>
                    <p>
                        I am a full stack developer with a passion for creating innovative and user-friendly digital experiences.
                    </p>
                    <p>
                        I am a full stack developer with a passion for creating innovative and user-friendly digital experiences.
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAws} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faLinux} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faPython} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faGolang} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faDocker} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>

                </div>
            </div>
            <Loader type="pacman" />

        </>
    )
}


export default About;