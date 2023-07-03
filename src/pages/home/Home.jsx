

// import { Container } from './styles';

import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

import './home.css';

function home() {
  return (
    <>
    
    <Topbar />
    
    <div className="homeContainer">

          <Leftbar /><Feed /><Rightbar />

      </div>
      
      </>
  );
}

export default home;