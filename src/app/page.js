// src/app/page.js
import Contact from '@/components/Contact';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Sidebar from '@/components/Sidebar';

export default function HomePage() {
  return (
    <div className='main-container'>
      {/* <Navbar /> */}
      <Sidebar/>
     <div className='content'>
      <div id="home" className="parallax">
        <h1>Welcome to My Portfolio</h1>
      </div>
      
      <section id="about" style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>About Me</h2>
        <p>Highly motivated and diligent fresher seeking an opportunity to contribute in a challenging environment, leveraging
        my skills, knowledge, and intelligence to contribute to the growth of the organization.</p>
      </section>

      <div className='parallax'></div>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>Project Name</h3>
            <p>Description of the project with a brief overview of what it does.</p>
            <p><strong>Technologies:</strong> React, Node.js, MongoDB</p>
            <a href="https://github.com/yourusername/project" target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
          </div>
          <div className="project-card">
            <h3>Another Project</h3>
            <p>Brief description of the second project with relevant details.</p>
            <p><strong>Technologies:</strong> JavaScript, HTML, CSS</p>
            <a href="https://github.com/yourusername/another-project" target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>

      <div className='parallax'></div>

<Skills/>
      {/* <section id="skills" className="section">
        <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-chart">
          <canvas id="htmlChart"></canvas>
          <p>HTML</p>
        </div>
        <div className="skill-chart">
          <canvas id="cssChart"></canvas>
          <p>CSS</p>
        </div>
        <div className="skill-chart">
          <canvas id="jsChart"></canvas>
          <p>JavaScript</p>
        </div>
        <div className="skill-chart">
          <canvas id="reactChart"></canvas>
          <p>React</p>
        </div>
      </div>
    </section> */}

      
        
      <div className="parallax">
      </div>

      <Contact/>
      {/* <section id="contact" className="section">
        <h2>Contact Me</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" required />
          <label>Email:</label>
          <input type="email" name="email" required />
          <label>Message:</label>
          <textarea name="message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section> */}
      </div>
    </div>
  );
}
