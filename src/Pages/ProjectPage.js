import React, { useState } from 'react';
import data_projects from '../Components/Data/projectsData'
import ProjectCard from '../Components/ProjectCard'


function ProjectPage(props){
    const [projects,setProjects] = useState(data_projects)

    const handleFilterCat = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array);
    }


    return(
        <div className="container">
            <div className="projects__navbar">
                <div onClick={() => setProjects(data_projects)}>All</div>
                <div onClick={() => handleFilterCat('Android')}>Android</div>
                <div onClick={() => handleFilterCat('Java')}>Java</div>
                <div onClick={() => handleFilterCat('Java FX')}>Java FX</div>
                <div onClick={() => handleFilterCat('Maven')}>Maven</div>
                <div onClick={() => handleFilterCat('Sockets')}>Sockets</div>
                <div onClick={() => handleFilterCat('React')}>React</div>
            </div>
            <div className="row">
                {
                    projects.map(project => 
                        <ProjectCard key={project.name} project={project}/>)
                }
            </div>
        </div>  
    );
}

export default ProjectPage;