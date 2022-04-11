import React from "react";
import profilephoto from '../../assets/images/profilephoto.jpg'

function About() {
    return (
      <section>
          <div className='container'>
            <div className='row'>
              <div className='col-6 text-left'>
                <img src={profilephoto} alt="Dani Reinholz" className="rounded"/>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='row'>
              <div className='col-6 text-left mt-4'>
              <p>
              A student for life, I enjoy picking up and exploring new skills and technologies. The UNC Coding Camp has given me the opportunity to immerse myself in a wide variety of languages and applications such as HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, and Git. During my off time I like to make jewelry, garden, and help facilitate a community plant-share stand outside of my house.
              </p>
              </div>
            </div>
          </div>

      </section>
    );
  }
  
  export default About;