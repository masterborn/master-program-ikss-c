
import axios from "axios";
import MainPageProjectList from "@root/components/main/projects/MainPageProjectList";


function HomePage(props){
    const {projects, boardMembers, basicContent, partnerLogo}=props;
  return (
    <>
        <MainPageProjectList projects={projects}/>
    </>
  )
};

export default HomePage;


export async function getStaticProps() {
    let allEntries;
    try {        
        allEntries = await axios.get(`https://cdn.contentful.com/spaces/${process.env.SPACE}/environments/master/entries?access_token=${process.env.TOKEN}`);
    }
    catch (error) {
        throw Error('something went wrong! ')
    }
    const projects = allEntries.data.items.filter(item => item.sys.contentType.sys.id === 'projects');
    const boardMembers = allEntries.data.items.filter(item => item.sys.contentType.sys.id === 'boardMembers');
    const basicContent = allEntries.data.items.filter(item => item.sys.contentType.sys.id === 'basicContent');
    const partnerLogo = allEntries.data.items.filter(item => item.sys.contentType.sys.id === 'partnerLogos');
    const showOnMainPage = projects.filter(p=>p.fields.showOnHomepage);
    return {
        props: {
            projects: showOnMainPage,
            boardMembers,
            basicContent,
            partnerLogo
        }
    }
}