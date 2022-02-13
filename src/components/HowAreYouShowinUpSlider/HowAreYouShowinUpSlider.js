import { showYoutubeVideoModal } from '../../actions';
import { useDispatch } from "react-redux";


//=====style=========
import "./HowAreYouShowinUpSlider.css"


const HowAreYouShowinUpSlider = ({data , urlImg, newClasses}) => {
    const dispatch = useDispatch();
    const {authorName, preview, profession, from, videoLink, timing, description} = data;

    return (
                 <div className={`feed__item ${newClasses}`}>
                    {/* { showedYoutubeVideoModal && <ModalVideoPlayer videoLink={videoLink}/>} */}

                    <div className="feed__item-info">
                        <div className="photo">
                            <img src={urlImg} alt={authorName}/>
                        </div>
                        <div className="author">
                            <div className="author__name">{authorName}</div>
                            <div className="author__preview">{preview[0]}<br/>
                                    {preview[1]}</div>
                            <div className="author__profession">{profession}</div>
                            <div className="author__from">posted from <span>{from}</span></div>
                        </div>
                    </div>
                    <hr/>
                    <div className="feed__item-play" onClick={()=>dispatch(showYoutubeVideoModal(videoLink))}>
                        <div className="playvideo">
                            <svg width="6" height="8" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="1" d="M9 5.5L0 11V0L9 5.5Z" fill="#6D53AF"></path>
                            </svg>
                        </div>
                        <div className="timing">
                            {`play video (${timing})`}
                        </div>
                    </div>
                    <hr/>
                    <div className="feed__item-descr">
                        {description}
                    </div>
                </div>
                
    )
}

export default HowAreYouShowinUpSlider;