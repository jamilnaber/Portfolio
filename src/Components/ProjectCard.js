import React from 'react';
import githubLogo from '../Assets/github-logo.svg'

function ProjectCard(props){
    return(
        <div className="ProjectCard col-md-6 col-lg-3 my-2">
            <figure className="projectCard__wrapper">
                <a href = {props.project.deployed_url} target="_blank" rel="noopener noreferrer">
                    <img src={props.project.image} alt ={props.project.name} className="projectCard__image" />
                </a>
                <div className="projectCard__title">
                    <a href = {props.project.github_url} target="_blank" rel="noopener noreferrer">
                        <img src={githubLogo} alt ="github link" className="projectCard__icon" />
                    </a>
                    {props.project.name}
                </div>
            </figure>
        </div>  
    );
}

export default ProjectCard;