/* eslint-disable react/jsx-no-undef */
import './feed.css';

// import Share from '../../components/share/Share';
import Share from '../share/Share';
import Post from '../post/Post'
import {Posts} from '../../dummyData'
// import { Container } from './styles';

function feed() {
  return (

    <div className='feed'>
        <div className="feedwrapper">
            <Share/>

            {/* <Post/> */}
            
            {Posts.map(
              
              (p) => (<Post key={p.id} post={p}/> )
              
              )}
       </div>
  </div>

);
}

export default feed;