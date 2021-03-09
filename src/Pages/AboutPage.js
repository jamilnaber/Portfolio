import React from 'react';
import Hero from '../Components/Hero';
import Bar from '../Components/Bar';

import icoPython from '../Assets/icons/python.svg';
import icoCPlus from '../Assets/icons/c++.svg';
import icoJava from '../Assets/icons/java.svg';
import icoC from '../Assets/icons/C.svg';
import icoPower from '../Assets/icons/powershell.svg';
import icoMySQL from '../Assets/icons/mysql.svg';
import icoJUnit from '../Assets/icons/junit5.png';
import icoCSharp from '../Assets/icons/cSharp.svg';
import icoFSharp from '../Assets/icons/fSharp.svg';
import icoReact from '../Assets/icons/logo.svg';
import icoAndriod from '../Assets/icons/androidStudio.svg';
import icoLinux from '../Assets/icons/linux.svg';
import icoIntellij from '../Assets/icons/intelliJ.svg';
import icoTrello from '../Assets/icons/trello.svg';
import icoGit from '../Assets/icons/git.svg';
import icoScrum from '../Assets/icons/scrum.svg';
import icoPandas from '../Assets/icons/pandas.svg';
import icoSkLearn from '../Assets/icons/sklearn.svg';
import icoSoup from '../Assets/icons/soup.svg';
import icoTomcat from '../Assets/icons/tomcat.svg';
import icoAsp from '../Assets/icons/asp.svg';


const languages = [
    {
        icon: icoCPlus,
        name: 'C++',
        level: '100'
    },
    {
        icon: icoC,
        name: 'C',
        level: '100'
    },
    {
        icon: icoJava,
        name: 'Java',
        level: '100'
    },
    {
        icon: icoPower,
        name: 'Powershell',
        level: '80'
    },
    {
        icon: icoMySQL,
        name: 'mySQL',
        level: '80'
    },
    {
        icon: icoJUnit,
        name: 'Junit',
        level: '80'
    },
    {
        icon: icoPython,
        name: 'Python',
        level: '80'
    },
    {
        icon: icoCSharp,
        name: 'C#',
        level: '80'
    },
    {
        icon: icoFSharp,
        name: 'F#',
        level: '60'
    },
    {
        icon: icoReact,
        name: 'ReactJS',
        level: '60'
    }
]


const technologys =[
    {
        icon: icoAndriod,
        name: 'Android Studio',
        level: '100'
    },
    {
        icon: icoLinux,
        name: 'Linux',
        level: '80'
    },
    {
        icon: icoIntellij,
        name: 'Intellij ',
        level: '80'
    },
    {
        icon: icoTrello,
        name: 'Trello',
        level: '80'
    },
    {
        icon: icoGit,
        name: 'Git',
        level: '80'
    },
    {
        icon: icoScrum,
        name: 'Scrum',
        level: '80'
    },
    {
        icon: icoPandas,
        name: 'Pandas',
        level: '80'
    },
    {
        icon: icoSkLearn,
        name: 'Scikit',
        level: '80'
    },
    {
        icon: icoSoup,
        name: 'Soup',
        level: '80'
    },
    {
        icon: icoTomcat,
        name: 'Tomcat 5',
        level: '60'
    },
    {
        icon: icoAsp,
        name: 'ASP.NET',
        level: '60'
    }
]


function AboutPage(props) {
    
    return(
        <div >
            <Hero title={props.title} />
            <div className="resume container">
                <div className="row">
                    <div className="col-lg-6 resume-card">
                        <h4 className="resume-card__heading">
                            Education 
                        </h4>
                        <div className="resume-card__body">
                            <h5 className="resume-card__title">
                                B.S Computer Science
                            </h5>
                            <p className="resume-card__name">
                                University of Illinois at Chicago
                            </p>
                            <p className="resume-card__details">
                                <ul>
                                    <li>May 2018 – Dec 2020</li>
                                    <li>GPA: 3.68 / 4.00</li>
                                    <li>Concentration in Software Engineering</li>
                                    <li>Graduated with honors, Cum laude</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 resume-card">
                        <h4 className="resume-card__heading">
                            Experience 
                        </h4>
                        <div className="resume-card__body">
                            <h5 className="resume-card__title">
                                Harper College
                            </h5>
                            <p className="resume-card__name">
                                Information Technology Assistant Intern
                            </p>
                            <p className="resume-card__details">
                                <ul>
                                    <li>May 2018 – Mar 2020</li>
                                    <li>Keep all 770+ server’s information and statuses updated on a daily occurrence</li>
                                    <li>Unitize VMware, HP Insight, and Networker</li>
                                    <li>Adopted PowerShell for automation</li>
                                    <li>Created a database in Access to present information in a user-friendly way</li>
                                </ul>
                            </p>
                            <h5 className="resume-card__title">
                                Harper College
                            </h5>
                            <p className="resume-card__name">
                                Information Technology Assistant Intern
                            </p>
                            <p className="resume-card__details">
                                <ul>
                                    <li>Aug 2019 – Dec 2020</li>
                                    <li>Focused on C/C++, Android, data structures and SQL development</li>
                                    <li>Facilitate lab instructions weekly</li>
                                    <li>Host office hours for students that require one-on-one attention related to software engineering</li>
                                    <li>Grade students work in a timely manner</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 resume-languages">
                        <h5 className="resume-language__heading">
                            Languages
                        </h5>
                        <div className="resume-language__body mt-3">
                            {
                                languages.map(language => 
                                    <Bar value={language}/>
                                    )
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 resume-languages">
                        <h5 className="resume-language__heading">
                            Tools and Software
                        </h5>
                        <div className="resume-language__body mt-3">
                            {
                                technologys.map(technology =>
                                    <Bar value={technology}/>
                                        )
                            }
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default AboutPage;