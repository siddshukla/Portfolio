import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { skills } from '../constants/index.js';

const Skills = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">Skills</p>

        <div className="work-container">
          {/* Canvas Section */}
          <div className="work-canvas">
            <Canvas>
              {/* Scene Lighting */}
              <ambientLight intensity={0.3} />
              <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={1} />
              <directionalLight position={[5, 5, 5]} intensity={0.5} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              {/* 3D Model with Fallback Loader */}
              <Suspense fallback={<CanvasLoader />}>
                <Developer position={[0, -3, 0]} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          {/* Skills Content */}
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {skills && skills.length > 0 ? (
                skills.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setAnimationName(item.animation.toLowerCase())}
                    onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                    onPointerOut={() => setAnimationName('idle')}
                    className="work-content_container group"
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img
                          className="w-full h-full"
                          src={item.icon}
                          alt={item.name || 'Skill Icon'}
                        />
                      </div>

                      <div className="work-content_bar" />
                    </div>

                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{item.name}</p>
                      <p className="group-hover:text-white transition-all ease-in-out duration-500">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-400">No skills data available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
