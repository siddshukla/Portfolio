import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';

import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';
import { Computer } from '../components/Computer.jsx';

const Hero = () => {
  // Media queries for responsive design
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Calculate dynamic sizes based on screen size
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // Animation variants for the tagline
  const letterAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1, // Delay for staggered animation
        duration: 1.9,
        ease: 'easeOut',
      },
    }),
  };

  const tagline = 'Software Developer & Open Source Contributor';

  return (
    <section
      className="min-h-screen w-full flex flex-col relative"
      id="home"
      aria-label="Hero Section"
    >
      {/* Greeting Section */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p
          className="sm:text-3xl text-xl font-bold text-white text-center"
          style={{ fontFamily: "'Poppins', sans-serif" }}
          aria-label="Introduction"
        >
          Hi, I am Siddharth <span className="waving-hand" aria-hidden="true">👋🏻</span>
        </p>

        {/* Responsive Tagline */}
        <motion.div
          className={`hero_tag text-gray_gradient ${
            isSmall ? 'text-center text-sm break-words leading-tight' : 'text-lg text-center'
          }`}
          aria-label="Hero Tagline"
        >
          {tagline.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mx-1">
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                  custom={wordIndex * 10 + charIndex} // Ensure unique delays per character
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>

      {/* 3D Canvas Section */}
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* Hide Leva controller UI */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
            <Computer
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0.1, -Math.PI, 0]}
            />
            </HeroCamera>
            

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Call-to-Action Button */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit" aria-label="Learn more about me">
          <Button
            name="Let's build something amazing"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
