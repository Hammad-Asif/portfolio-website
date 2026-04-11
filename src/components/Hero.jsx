import React from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaJs } from 'react-icons/fa';
import {
    SiMongodb,
    SiFlask,
    SiFastapi,
    SiOpenai,
    SiRedis,
    SiPostgresql,
    SiGit,
    SiLinux,
    SiNginx,
    SiPostman,
    SiPandas,
    SiNumpy,
    SiMysql,
    SiSpacy,
} from 'react-icons/si';
import portFolioImage from '../img/profile pic.jpg'
const Hero = () => {
    const techStack = [
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <FaPython />, name: "Python" },
        { icon: <SiFlask />, name: "Flask" },
        { icon: <SiFastapi />, name: "FastAPI" },
        { icon: <FaAws />, name: "AWS" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiOpenai />, name: "OpenAI" },
        { icon: <SiRedis />, name: "Redis" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiGit />, name: "Git" },
        { icon: <SiLinux />, name: "Linux" },
        { icon: <SiNginx />, name: "Nginx" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiPandas />, name: "Pandas" },
        { icon: <SiNumpy />, name: "NumPy" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiSpacy />, name: "NLP" },
    ];

    // Inner ring skills
    const innerSkills = [
        { icon: <FaReact />, name: "React" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <FaPython />, name: "Python" },
        { icon: <SiFlask />, name: "Flask" },
        { icon: <SiFastapi />, name: "FastAPI" },
        { icon: <FaAws />, name: "AWS" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <SiOpenai />, name: "OpenAI" },
        { icon: <SiGit />, name: "Git" },
    ];

    // Outer ring skills
    const outerSkills = [
    
        { icon: <SiNginx />, name: "Nginx" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiPandas />, name: "Pandas" },
        { icon: <SiNumpy />, name: "NumPy" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiSpacy />, name: "NLP" },
    ];
    // Position icons evenly around the ring
    const getPosition = (index, total, radius) => {
        const angle = (index / total) * (2 * Math.PI) - Math.PI / 2;
        const x = Math.cos(angle) * radius + 50; // % from center
        const y = Math.sin(angle) * radius + 50;
        return { left: `${x}%`, top: `${y}%` };
    };

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">


                    <h1 className="hero-title">
                        I'm <span className="gradient-text"><TypeAnimation
                            sequence={[
                                'Muhammad Hammad Asif', 1000,
                                'Full-Stack Developer', 1000,
                                'AI Engineer', 1000,
                                'MERN Stack Expert', 1000,
                                'Python Developer', 1000,
                                'LLM Integration Expert', 1000,
                            ]}
                            wrapper="span"
                            speed={70}
                            deletingSpeed={70}
                            repeat={Infinity}
                        /></span>

                    </h1>

                    <p className="hero-description">
                        I build scalable MERN stack, Python & AI-powered solutions that turn complex business challenges into elegant digital products.
                    </p>

                    <div className="hero-buttons">
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="btn btn-primary btn-large"
                        >
                            Let's Work Together
                        </Link>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="btn btn-secondary btn-large"
                        >
                            View My Work
                        </Link>
                    </div>


                </div>
                <div className="avatar-container">

                    {/* Inner rotating ring */}
                    <div className="orbit-ring">
                        {innerSkills.map((skill, i) => (
                            <div
                                key={i}
                                className="orbit-icon"
                                style={getPosition(i, innerSkills.length, 47)}
                            >
                                {skill.icon}
                                <span className="tooltip">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Outer reverse rotating ring */}
                    <div className="orbit-ring-reverse">
                        {outerSkills.map((skill, i) => (
                            <div
                                key={i}
                                className="orbit-icon"
                                style={getPosition(i, outerSkills.length, 47)}
                            >
                                {skill.icon}
                                <span className="tooltip">{skill.name}</span>
                            </div>
                        ))}
                    </div>


                    <div className="hero-image">
                        <div className="hero-image-wrapper">
                            <img
                                //   src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hammad&backgroundColor=6366f1" 
                                src={portFolioImage}
                                alt="Full-Stack & AI Engineer"
                                className="avatar-image"
                            />
                        </div>
                    </div>
                </div>


            </div>
            <div className="hero-tech-stack">
                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {[...techStack, ...techStack].map((skill, index) => (
                            <div className="marquee-item" key={index}>
                                <span className="marquee-icon">{skill.icon}</span>
                                <span className="marquee-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;