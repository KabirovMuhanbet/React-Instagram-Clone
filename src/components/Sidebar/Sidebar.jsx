import "../../styles/Sidebar.scss";
import Sticky from "react-sticky-el";
import Suggestions from "./Suggestions";
import Footer from "../Sidebar/Footer/Footer";
import image from "../../images/madara.jpg";
import SidebarProfile from "./SidebarProfile";
function Sidebar() {
   return (
      <Sticky topOffset={-80}>
         <div className="sidebar">
            <SidebarProfile 
            image={image}
            username="sugaruzi"
            iconSize="big"
            storyBorder={false}/>
            <Suggestions />
            <Footer />
         </div>
      </Sticky>
   )
}

export default Sidebar;