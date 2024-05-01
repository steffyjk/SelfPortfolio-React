import Header from "../home_comp/header";
import About from "../home_comp/about_us";
import Work from "../home_comp/work";
import Project_c from "../home_comp/project_c";
import Contact from "../home_comp/contact";
import Copy from "../home_comp/copyright";

function Home()
{
    return(
        <>
            <Header/>
            <About/>
            <Work/>
            <Project_c/>
            <Contact/>
            <Copy/>
        </>
    );
}

export default Home;