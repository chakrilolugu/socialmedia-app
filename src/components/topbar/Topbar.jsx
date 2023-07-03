import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
// import HomeIcon from '@mui/icons-material/Home';
// import {Search,Person} from "@mui/icons-material"
// import { Container } from './styles';

function topbar() {
  return(

   <div className="topbarContainer">


         <div className="topbarLeft">
           <span className="logo">Connect-More</span>
            <span className="logo1"><EmojiPeopleIcon/></span>
         </div>


         <div className="topbarCenter">
            <div className="searchbar">
               <SearchIcon className="searchIcon"/>
               <input placeholder="search for users or posts" className="searchInput" />
            </div>
         </div>


         <div className="topbarRight">


                  <div className="topbarLinks">
                     <span className="topbarLink">Homepage</span>
                     <span className="topbarLink">Timeline</span>

                  </div>


                   <div className="topbarIcons">

                      <div className="topbarIconItem">
                      <PersonIcon/>
                      <span className="topbarIconBadge">1</span>
                     </div>
                     <div className="topbarIconItem">
                      <ChatIcon/>
                      <span className="topbarIconBadge">4</span>
                      </div>
                      <div className="topbarIconItem">
                       <CircleNotificationsIcon/>
                      <span className="topbarIconBadge">3</span>

                  </div>

            </div>

            <img src="/assets/person/person-7.jpg" alt="" className="topbarImage" />


         </div>

   </div>
   
   );
}

export default topbar;