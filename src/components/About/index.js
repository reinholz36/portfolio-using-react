import React from "react";
import profilephoto from '../../assets/images/profilephoto.jpg'

function About() {
    return (
      <section>

          <div>
          <img src={profilephoto} alt="Dani Reinholz"/>
          </div>

          <div>
          <p>
          A student for life, I enjoy picking up and exploring new skills and technologies. The UNC Coding Camp has given me the opportunity to immerse myself in a wide variety of languages and applications such as HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, and Git. During my off time I like to make jewelry, garden, and help facilitate a community plant-share stand outside of my house.
          </p>
          </div>

      </section>
    );
  }
  
  export default About;