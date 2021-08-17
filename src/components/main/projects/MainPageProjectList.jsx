function MainPageProjectList(props) {
    const {projects}=props;
  return (
    <ul>
       {projects.map(project => <li key={project.fields.title}>{project.fields.title}</li>)}
   </ul>
  )
};

export default MainPageProjectList;
