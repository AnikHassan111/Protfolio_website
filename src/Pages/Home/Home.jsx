import Aboutme from "./About Me/Aboutme";
import MyProject from "./My Project/MyProject";
import MySkill from "./My Skill Set/MySkill";
import MyInformation from "./MyInformation/MyInformation";

const Home = () => {
  document.title = `Anik Hassan || Home`;
  return (
    <div className="max-w-7xl mx-auto mt-14">
      <MyInformation></MyInformation>
      <MySkill></MySkill>
      <MyProject></MyProject>
      <Aboutme></Aboutme>
    </div>
  );
};

export default Home;
