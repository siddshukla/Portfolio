import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('siddsanskshukla@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* About Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/card1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I’m Siddharth Shukla</p>
              <p className="grid-subtext">
                "As a Computer Science student, I have developed skills in both frontend and backend development,
                building dynamic and responsive web applications. Through projects like AuthMaster and my blog site,
                I have gained hands-on experience with technologies like Java, Object-Oriented Programming (OOP),
                Node.js, Express, MongoDB, EJS, and API testing using Postman."
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/card2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and
                scalable web applications.
              </p>
            </div>
          </div>
        </div>

        {/* Globe Section */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                enablePointerInteraction
                autoRotate={true}  // Ensure autoRotate is true
                autoRotateSpeed={0.7} // Speed of rotation
                labelsData={[
                  { lat: 40, lng: -100, text: 'Rijeka, Croatia', color: 'white', size: 15 },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                "I’m flexible with working hours and adept at collaborating with diverse teams across various time zones."
              </p>
              <p className="grid-subtext">
                I'm based in Bhubaneswar, India, and open to remote software development opportunities worldwide.
              </p>
              <a href="mailto:siddsanskshukla@gmail.com" className="w-full mt-10 inline-block">
                <Button name="Send Email" isBeam containerClass="w-full mt-10" />
              </a>
              <p className="grid-subtext mt-4">
                Or call me at <a href="tel:+918604494386">+918604494386</a>
              </p>
            </div>
          </div>
        </div>

        {/* Passion for Coding Section */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/card3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/copy.png"
              alt="grid-4"
              className="w-full h-auto max-h-[200px] object-contain"

            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                  alt={hasCopied ? 'Copied' : 'Copy'}
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  siddsanskshukla@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
