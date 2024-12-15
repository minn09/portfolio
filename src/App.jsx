import NavBar from "./components/Navbar/NavBar.jsx";
import ProjectCard from "./components/ProjectCard/ProjectCard.jsx";
import HomePage from "./pages/HomePage.jsx";
import Technologies from "./components/Technologies/Technologies.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./global.css";
function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <ProjectCard />
      <Technologies />
      <Footer />
    </>
  );
}

export default App;
