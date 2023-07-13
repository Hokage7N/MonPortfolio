import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaJava, FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact, FaFigma, FaGitlab } from 'react-icons/fa';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { DiDotnet } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';
import mobile from './Images/mobileapp.png';
import Monprofil from './Images/profi.png';
import aboutus from './Images/about-us.png';
import styles from './Home.css';


function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={mobile} className="d-block w-100" alt="Slide 1" style={{ marginTop: '150px' }} />
        </div>
        <div className="col-md-6 d-flex align-items-center"style={{marginTop: '160px'}}>
          <div style={{ marginLeft: '20px' }}>
          <div style={{ fontSize: '24px', textAlign: 'left' }}>
            <h1>Hi all, I'm Cheikh</h1>
            <p  style={{ fontSize: '25px',marginTop: '30px'}}>
            Un développeur Full Stack passionné 🚀 ayant une expérience dans la création d'applications Web et Mobiles 
            avec JavaScript / Reactjs / Nodejs, ainsi que d'autres bibliothèques et frameworks intéressants.
          </p>
          <h5 style={{ fontSize: '50px', marginBottom: '10px',fontWeight:'bold',color:'#2c264e' }}>
          </h5>
          {/*<p style={{ marginTop: '10px' }}>Some representative placeholder content for the first slide</p>*/}
          </div>

          </div>
        </div>
      </div>
<div className="row shadow p-4" style={{ marginTop: '110px',  }}>
  <div className="col-md-6">
    <h2  style={{ marginTop: '180px',fontSize: '50px'  }}
    >A Propos</h2> <br/>
    <p  style={{fontSize: '20px'  }}>
      Un rêveur créatif qui a toujours aimé sortir des sentiers battus pour innover. Plus connu sous le pseudonyme
      Eaukage, je suis un Geek, depuis mon enfance, passionné par la Tech. Cette passion m'a permis d'être autonome et
      curieux et d'apprendre sans cesse en suivant des cours en ligne en parallèle de ma formation.
    </p>
   
  </div>
  <div className="col-md-6">
    <img src={Monprofil} className="d-block w-100" alt="Slide 1" />
  </div>
</div>
<div className={`container ${styles.skillsContainer}`}>
        <h1 className="mt-5">Compétences professionnelles</h1>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-3 mt-5">
            <div className={`card shadow ${styles.skillCard} zoom-effect`}>
              <div className="card-body text-center">
                <FaJava className="skill-icon" />
                <h5 className="card-title">Java</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <div className={`card shadow ${styles.skillCard} zoom-effect`}>
              <div className="card-body text-center">
                <DiDotnet className="skill-icon" />
                <h5 className="card-title">C#</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <div className={`card shadow ${styles.skillCard} zoom-effect`}>
              <div className="card-body text-center">
                <FaHtml5 className="skill-icon" />
                <h5 className="card-title">HTML CSS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <div className={`card shadow ${styles.skillCard} zoom-effect`}>
              <div className="card-body text-center">
                <FaJs className="skill-icon" />
                <h5 className="card-title">JavaScript</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <div className={`card shadow ${styles.skillCard} zoom-effect`}>
              <div className="card-body text-center">
                <FaNodeJs className="skill-icon" />
                <h5 className="card-title">Node.js</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <div className={`card shadow ${styles.skillCard} zoom-effect`}>
              <div className="card-body text-center">
                <FaReact className="skill-icon" />
                <h5 className="card-title">React</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <div className={`card shadow ${styles.skillCard} zoom-effect`}>
              <div className="card-body text-center">
                <FaFigma className="skill-icon" />
                <h5 className="card-title">Figma</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <div className={`card shadow ${styles.skillCard} zoom-effect`}>
              <div className="card-body text-center">
                <FaGitlab className="skill-icon" />
                <h5 className="card-title">GitLab</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Icônes de médias sociaux */}
        <div className="text-center" style={{ marginTop: '110px' }}>
  <h1>Retrouvez-moi sur</h1>
  <p> 
    N'hésitez pas à<span className="purple">communiquer</span> avec moi
  </p>  
  <div className="d-flex justify-content-center">
    <a
      href="https://github.com/Hokage7N"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons mx-3"
    >
      <AiFillGithub className="icon-size-lg" />
    </a>
    <a
      href="#"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons mx-3"
    >
      <AiOutlineTwitter className="icon-size-lg" />
    </a>
    <a
      href="https://www.linkedin.com/in/cheikh-oumar-lo-999195210/"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons mx-3"
    >
      <AiFillLinkedin className="icon-size-lg" />
    </a>
    <a
      href="#"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons mx-3"
    >
      <AiFillInstagram className="icon-size-lg" />
    </a>
  </div>
</div>

    </div>
  );
}

export default Home;
