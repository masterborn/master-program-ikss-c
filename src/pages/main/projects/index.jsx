import axios from "axios";
import React from "react";
import PropTypes from 'prop-types';

function ProjectsPage(props){
  const {projects} = props;
  return (
   <ul>
       {projects.map(project => <li key={project.fields.title}>{project.fields.title}</li>)}
   </ul>
  )
};

ProjectsPage.propTypes = {
    projects: PropTypes.isRequired
}

export default ProjectsPage;


export async function getStaticProps() {
    let loadedProjects;
    try {        
        loadedProjects = await axios.get(`https://cdn.contentful.com/spaces/${process.env.SPACE}/environments/master/entries?access_token=${process.env.TOKEN}`);
    }
    catch {
        throw Error('something went wrong!')
    }
    const projects = loadedProjects.data.items.filter(item => item.sys.contentType.sys.id === 'projects');
    const showOnMainPage = projects.filter(p=>p.fields.showOnHomepage);
    return {
        props: {
            projects: showOnMainPage
        }
    }
}