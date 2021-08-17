import React from "react"

function ProjectsPage(props){
  return (
    <div>
      {props}
    </div>
  )
};

export default ProjectsPage;


export async function getStaticProps() {
    return {
        props: {
            projects: ""
        }
    }
}