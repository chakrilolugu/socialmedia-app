import './leftbar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import SchoolIcon from '@mui/icons-material/School';
import CallIcon from '@mui/icons-material/Call';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import WorkIcon from '@mui/icons-material/Work';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// import { Container } from './styles';

function leftbar() {
  return (
  
  <div className='leftbar'>
      <div className='leftWrapper'>
        <ul className="leftbarList">

        <li className="leftbarListItem">
              <RssFeedIcon className='leftbarIcon'/>
              <span className='leftbarListItemText'>Feed</span>
          </li>

          <li className="leftbarListItem">
              <VideoCallIcon className='leftbarIcon'/>
              <span className='leftbarListItemText'>Video calls</span>
          </li>

          <li className="leftbarListItem">
              <GroupsIcon className='leftbarIcon'/>
              <span className='leftbarListItemText'>Groups</span>
          </li>

          <li className="leftbarListItem">
              <BookmarkIcon className='leftbarIcon'/>
              <span className='leftbarListItemText'>Bookmarks</span>
          </li>

          <li className="leftbarListItem">
              <HelpIcon className='leftbarIcon'/>
              <span className='leftbarListItemText'>Help</span>
          </li>

          <li className="leftbarListItem">
              <SchoolIcon className='leftbarIcon'/>
              <span className='leftbarListItemText'>Courses</span>
          </li>

          <li className="leftbarListItem">
              <CallIcon className='leftbarIcon'/>
              <span className='leftbarListItemText'>Calls</span>
          </li>

          <li className="leftbarListItem">
              <LocalTaxiIcon className='leftbarIcon'/>
              <span className='leftbarListItemText'>Travel booking</span>
          </li>

          <li className="leftbarListItem">
              <WorkIcon className='leftbarIcon'/>
              <span className='leftbarListItemText'>Jobs</span>
          </li>
        </ul>

        <button className='leftbarButton'>Show More</button>
        <hr className='leftbarHr'/>

        <ul className='leftbarFriendList'>

          <li className='sidebarFriend'>
            <img src="/assets/person/person-2.webp" alt="" className="sidebarFriendprofie" />
            <span className="sidebarFriendName">Sunder Pichei</span>
            <PersonAddIcon className='leftaddFriend'/>
          </li>

          <li className='sidebarFriend'>
            <img src="/assets/person/person-2.webp" alt="" className="sidebarFriendprofie" />
            <span className="sidebarFriendName">Sunder Pichei</span>
            <PersonAddIcon className='leftaddFriend'/>
          </li>

          <li className='sidebarFriend'>
            <img src="/assets/person/person-2.webp" alt="" className="sidebarFriendprofie" />
            <span className="sidebarFriendName">Sunder Pichei</span>
            <PersonAddIcon className='leftaddFriend'/>
          </li>

          <li className='sidebarFriend'>
            <img src="/assets/person/person-2.webp" alt="" className="sidebarFriendprofie" />
            <span className="sidebarFriendName">Sunder Pichei</span>
            <PersonAddIcon className='leftaddFriend'/>
          </li>

          <li className='sidebarFriend'>
            <img src="/assets/person/person-2.webp" alt="" className="sidebarFriendprofie" />
            <span className="sidebarFriendName">Sunder Pichei</span>
            <PersonAddIcon className='leftaddFriend'/>
          </li>

          <li className='sidebarFriend'>
            <img src="/assets/person/person-2.webp" alt="" className="sidebarFriendprofie" />
            <span className="sidebarFriendName">Sunder Pichei</span>
            <PersonAddIcon className='leftaddFriend'/>
          </li>

          <li className='sidebarFriend'>
            <img src="/assets/person/person-2.webp" alt="" className="sidebarFriendprofie" />
            <span className="sidebarFriendName">Sunder Pichei</span>
            <PersonAddIcon className='leftaddFriend'/>
          </li>

          <li className='sidebarFriend'>
            <img src="/assets/person/person-2.webp" alt="" className="sidebarFriendprofie" />
            <span className="sidebarFriendName">Sunder Pichei</span>
            <PersonAddIcon className='leftaddFriend'/>
          </li>

          <li className='sidebarFriend'>
            <img src="/assets/person/person-2.webp" alt="" className="sidebarFriendprofie" />
            <span className="sidebarFriendName">Sunder Pichei</span>
            <PersonAddIcon className='leftaddFriend'/>
          </li>

          <li className='sidebarFriend'>
            <img src="/assets/person/person-2.webp" alt="" className="sidebarFriendprofie" />
            <span className="sidebarFriendName">Sunder Pichei</span>
            <PersonAddIcon className='leftaddFriend'/>
          </li>

          <li className='sidebarFriend'>
            <img src="/assets/person/person-2.webp" alt="" className="sidebarFriendprofie" />
            <span className="sidebarFriendName">Sunder Pichei</span>
            <PersonAddIcon className='leftaddFriend'/>
          </li>

          <li className='sidebarFriend'>
            <img src="/assets/person/person-2.webp" alt="" className="sidebarFriendprofie" />
            <span className="sidebarFriendName">Sunder Pichei</span>
            <PersonAddIcon className='leftaddFriend'/>
          </li>

          <li className='sidebarFriend'>
            <img src="/assets/person/person-2.webp" alt="" className="sidebarFriendprofie" />
            <span className="sidebarFriendName">Sunder Pichei</span>
            <PersonAddIcon className='leftaddFriend'/>
          </li>

          <li className='sidebarFriend'>
            <img src="/assets/person/person-2.webp" alt="" className="sidebarFriendprofie" />
            <span className="sidebarFriendName">Sunder Pichei</span>
            <PersonAddIcon className='leftaddFriend'/>
          </li>
        </ul>
      </div>
  </div>

  )
}

export default leftbar;