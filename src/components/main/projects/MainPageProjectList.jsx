function MainPageProjectList(props) {
  const { projects } = props;
  return (
    <ul>
      {projects.map((project) => (
        <li key={Math.random()}>{project.fields.title}</li>
      ))}
    </ul>
  );
}

export default MainPageProjectList;
