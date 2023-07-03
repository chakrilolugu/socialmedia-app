import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';


// import { Container } from './styles';

function share() {
  return( 
  
  <div className='share'>
        <div className="shareWrapper">
              <div className="shareTop">
                    <img src="/assets/person/person-7.jpg" alt="" className="shareProfile" />
                    <input placeholder='whats is on your mind! Chakri' className="shareInput" />
              </div>

                <hr className="shareHr" />
              <div className="shareBottom">
                  <div className="shareOptins">

                        <div className="shareOption">
                        <PermMediaIcon htmlColor='tomato' className='shareMediaIcon'/>
                          <span className='shareOptionText'>Photo or Video</span>
                        </div>

                        <div className="shareOption">
                        <LabelIcon htmlColor='blue' className='shareMediaIcon'/>
                          <span className='shareOptionText'>Tag</span>
                        </div>

                        <div className="shareOption">
                        <LocationOnIcon htmlColor='green' className='shareMediaIcon'/>
                          <span className='shareOptionText'>Location</span>
                        </div>

                        <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor='goldenrod' className='shareMediaIcon'/>
                          <span className='shareOptionText'>Emojis</span>
                        </div>

                  </div>

                  <button className='shareButton'>Share</button>

              </div>
        </div>
    
  </div>
  
  
  );
}

export default share;