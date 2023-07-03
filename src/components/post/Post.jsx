import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

// import { Container } from './styles';

function post({post}) {
    console.log(post);
  return( 
  
  <div className='posts'>








<div className='post'>
        <div className="postWrapper">

            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/person-7.jpg" alt="" className="postUserProfile" />
                    <span className='postUserName'>Chakri</span>
                    
                </div>
                <div className="postTopRight">
                <span className='postDate'>{post.date}</span>
                   <MoreVertIcon/>

                </div>
            </div>


            <div className="postCenter">
                <span className='postCenterProfileText'>{post?.desc} </span>
                <img src={post.photo} alt="" className="postCenterProfile" />
            </div>

            
            <div className="postBottom">

                <div className="postBottomLeft">
                    {/* <img src="/assets/like.png" alt="" className="postLikeIcon" /> */}
                    <ThumbUpIcon htmlColor='blue' className='postLikeIcon'/>
                    <span className='postLikeCount'>Ram and {post.like} others liked</span>

                </div>
                
                <div className="postBottomRight">
                    <span className='postCommentsCount'>{post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>













    {/* <div className='post'>
        <div className="postWrapper">

            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/person-7.jpg" alt="" className="postUserProfile" />
                    <span className='postUserName'>Chakri</span>
                    
                </div>
                <div className="postTopRight">
                <span className='postDate'>3 days ago</span>
                   <MoreVertIcon/>

                </div>
            </div>


            <div className="postCenter">
                <span className='postCenterProfileText'> The Nature Vibe.... </span>
                <img src="/assets/loc-1.jpeg" alt="" className="postCenterProfile" />
            </div>

            
            <div className="postBottom">

                <div className="postBottomLeft">
                   
                    <ThumbUpIcon htmlColor='blue' className='postLikeIcon'/>
                    <span className='postLikeCount'>Sunder and 779 others liked</span>

                </div>
                
                <div className="postBottomRight">
                    <span className='postCommentsCount'>3 Comments</span>
                </div>
            </div>
        </div>
    </div> */}




  </div>
  
  );
}

export default post;