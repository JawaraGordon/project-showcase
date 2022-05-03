import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import projects from "./ProjectData"

function App() {
  console.log(projects)
  return (
    <div>
      <Header />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  )
}

export default App;
