import React from 'react';
import netflixnchili from '../../assets/images/pg-hdg-title.png'
import dreamjournal from '../../assets/images/dreamjournal.png'
import codequiz from '../../assets/images/codequiz.png'
import employeetracker from '../../assets/images/Employee-Tracker.png'
import weathertracker from '../../assets/images/weather-background.png'
import passwordgen from '../../assets/images/pgsite.png'


const Project = () => {
    return (
        <div className="container">
                    <div className="card col-sm-6" >
                        <img src={dreamjournal} className="card-img-top"  alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Dream Journal</h5>
                            <p className="card-text">Handlebars/Bootstrap/Heroku</p>
                                <br></br>
                                <a href="https://frozen-atoll-87689.herokuapp.com/" title="Go to Dream Journal website" rel="noopener" target="_blank">
                                    Live Site
                                </a>
                                <br></br>
                                <a href="https://github.com/reinholz36/Dream-Journal" title="Go to Dream Journal github repository" rel="noopener" target="_blank">
                                    GitHub Repository
                                </a>
                        </div>
                    </div>

                    <div className="card col-sm-6">
                        <img src={netflixnchili} className="card-img-top"  alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Netflix'n Chili</h5>
                            <p className="card-text">HTML/CSS/JavaScript/Materialize</p>
                            <br></br>
                            <a href="https://reinholz36.github.io/NetflixnChili/" title="Go to NetflixnChili website" rel="noopener" target="_blank">
                                Live Site
                            </a>
                            <br></br>
                            <a href="https://github.com/reinholz36/NetflixnChili" title="Go to NetflixnChili github repository" rel="noopener" target="_blank">
                                GitHub Repository
                            </a>
                        </div>
                    </div>

                    <div className="card col-sm-6">
                        <img src={employeetracker} className="card-img-top"  alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Employee-Tracker</h5>
                            <p className="card-text">Employee-Tracker</p>
                            <br></br>
                            <a href="https://github.com/reinholz36/Employee-Tracker" title="Go to Employee-Tracker Repo" rel="noopener" target="_blank">
                                Live Site
                            </a>
                            <br></br>  
                            <a href="https://github.com/reinholz36/Employee-Tracker" title="Go to Employee-Tracker Repo" rel="noopener" target="_blank">
                                GitHub Repository
                            </a>                          
                        </div>
                    </div>

                    <div className="card col-sm-6">
                        <img src={codequiz} className="card-img-top"  alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Code-Quiz</h5>
                            <p className="card-text">HTML/CSS/JavaScript</p> 
                            <br></br>  
                            <a href="https://reinholz36.github.io/Code-Quiz/" title="Go to Code-Quiz website" rel="noopener" target="_blank">
                                Live Site
                            </a>
                            <br></br> 
                            <a href="https://github.com/reinholz36/Code-Quiz" title="Go to Code-Quiz github repository" rel="noopener" target="_blank">
                                GitHub Repository
                            </a>
                        </div>
                    </div>

                    <div className="card col-sm-6">
                        <img src={weathertracker} className="card-img-top"  alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Weather-Dashboard</h5>
                            <p className="card-text">HTML/CSS/JavaScript/Moment.js</p>
                            <br></br>
                            <a href="https://reinholz36.github.io/Weather-Dashboard/" title="Go to Weather-Dashboard website" rel="noopener" target="_blank">
                                Live Site
                            </a>
                            <br></br> 
                            <a href="https://github.com/reinholz36/Weather-Dashboard" title="Go to Weather-Dashboard github repository" rel="noopener" target="_blank">
                                GitHub Repository
                            </a>
                        </div>
                    </div>

                    <div className="card col-sm-6 centered">
                        <img src={passwordgen} className="card-img-top"  alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Password-Generator</h5>
                            <p className="card-text">JavaScript</p>
                            <br></br>
                            <a href="https://reinholz36.github.io/Password-Generator/" title="Go to Password-Generator website" rel="noopener" target="_blank">
                                Live Site
                            </a>
                            <br></br> 
                            <a href="https://github.com/reinholz36/Password-Generator" title="Go to Password-Generator github repository" rel="noopener" target="_blank">
                                GitHub Repository
                            </a>
                        </div>
                    </div>

            </div>
        

    );

};

export default Project;