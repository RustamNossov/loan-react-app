import { useEffect } from "react";
import  { useTouchSlide } from "../../hooks/onTouchSlide.hook";
import { useDispatch, useSelector } from "react-redux";
import { showYoutubeVideoModal } from '../../actions';
//=======components========
import SideControl from "../SideControl/SideControl";
import ShowupSlider from "../ShowupSlider/ShowupSlider"
import ModalVideoPlayer from "../ModalVideoPlayer/ModalVideoPlayer";
import withSlider from "../withSlider/withSlider";
import setOpacity from "../../hooks/setOpacity";

//=====styles========
import './MainSlide.css'



const MainSlide = ({onNextSlide, onPrevSlide, elements}) => {
   
    const dispatch = useDispatch();
    const {showedYoutubeVideoModal} = useSelector(state=>state);
   const {onTouchStart, onTouchMove, onTouchEnd} = useTouchSlide();
     
    useEffect(()=>setOpacity('.page', "1"), [])
    
    //=======show video ============    https://www.youtube.com/embed/vZ4Sne0wdxY
    const onShowVideo = () => {
        dispatch(showYoutubeVideoModal("vZ4Sne0wdxY"))
    }

   

    return (
        <div className="showup page" 
            // onTouchStart={(e)=>onTouchStart(e)}
            // onTouchMove={(e)=>onTouchMove(e)}
            // onTouchEnd={(e)=>onTouchEnd(e)}

            >
            { showedYoutubeVideoModal && <ModalVideoPlayer videoLink={showedYoutubeVideoModal}/> }
            
            <SideControl page={1}/>
            
            {/* <Menu logotype={true} btn={true}/> */}
            <div className="showup__wrapper">
           
                <div className="showup__intro">
                    <div className="showup__intro-left">
                        <div className="title">bring<span>it</span>up</div>
                        <div className="subtitle">We can give you an education that you need</div>
                    </div>
                    <button className="btn">Get free access</button>
                </div>
                <div className="showup__video">
                    <div className="showup__author">
                        <div className="showup__author-name">John Smith</div>
                        <div className="showup__author-position">CEO</div>
                    </div>
                    <div dataurl="vZ4Sne0wdxY" className="play">
                        <div onClick={()=>onShowVideo()} className="play__circle">
                            <svg viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 8L0 16V0L14 8Z" fill="#6D53AF"></path>
                            </svg>
                        </div>
                        <div className="play__text">why</div>
                    </div>
                </div>
            </div>

            <div class="showup__content">
                <div class="showup__content-title">Explore Educational Modules To Evolve Your Career<div>
                        <button type="button" onClick={()=>onPrevSlide()} class="showup__prev slick-prev">
                            <div class="play__content">
                                <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M0 5.5L9 11V0L0 5.5Z" fill="white"></path>
                                </svg>
                            </div>
                        </button>
                        <button type="button" onClick={()=>onNextSlide()} class="showup__next slick-next">
                            <div class="play__content">
                                <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M9 5.5L0 11V0L9 5.5Z" fill="white"></path>
                                </svg>
                            </div>            
                        </button>
                    </div>
                </div>
                <div className="showup__content-slider" 
                        onTouchStart={(e)=>onTouchStart(e)}
                        onTouchMove={(e)=>onTouchMove(e)}
                        onTouchEnd={()=>onTouchEnd(onNextSlide, onPrevSlide)}>
                    <div className="showup__content-slider-container">
                        {elements}  
                    </div>
                        
                    {/* <ShowupSlider/> */}
                
                </div>
            </div>
        </div>

            
       
    )
        
    

}

const MainSlideComponent = withSlider(MainSlide, ShowupSlider);

export default MainSlideComponent;