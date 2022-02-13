import {useEffect} from "react";
import  { useTouchSlide } from "../../hooks/onTouchSlide.hook";
import ModalVideoPlayer from "../ModalVideoPlayer/ModalVideoPlayer";
import { showYoutubeVideoModal } from '../../actions';
import { useDispatch, useSelector } from "react-redux";


//=======components========
import SideControl from "../SideControl/SideControl";
import Menu from "../Menu/Menu";
import HowAreYouShowingUpSlider from "../HowAreYouShowinUpSlider/HowAreYouShowinUpSlider";
import withSlider from "../withSlider/withSlider";
import setOpacity from '../../hooks/setOpacity';
//========styles===========
import "./HowAreYouShowingUp.css";

const HowAreYouShowingUp = ({onNextSlide, onPrevSlide, elements}) => {
    const {onTouchStart, onTouchMove, onTouchEnd} = useTouchSlide();
    const {showedYoutubeVideoModal} = useSelector(state=>state);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(showYoutubeVideoModal(''));
        setOpacity('.page', "1");
    }, [])

    return (
        <div className="feed page">
            { showedYoutubeVideoModal && <ModalVideoPlayer videoLink={showedYoutubeVideoModal}/>} 

            <SideControl page={5}/>
            <Menu/>

            <div className="title">
                How are you Showing Up<br/>
                &amp; Evolving
            </div>
            <div className="colored"></div>
            <div className="feed__slider"
                        onTouchStart={(e)=>onTouchStart(e)}
                        onTouchMove={(e)=>onTouchMove(e)}
                        onTouchEnd={()=>onTouchEnd(onNextSlide, onPrevSlide)}
                        >
                    <div className="feed__slider-container">
                            {elements}
                    </div>
           
                <div className="buttons-container">
                    <button type="button" onClick={()=>onPrevSlide()} class="slick-prev">
                            <div class="play__content">
                                <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="1" d="M0 5.5L9 11V0L0 5.5Z" fill="#EAEAEA"></path>
                                </svg>
                            </div>
                        </button>
                        <button type="button" onClick={()=>onNextSlide()} class="slick-next">
                            <div class="play__content">
                                <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="1" d="M9 5.5L0 11V0L9 5.5Z" fill="#EAEAEA"></path>
                                </svg>
                            </div>            
                    </button>
                </div>
                    

            </div>
        </div>

    )

}

const HowAreYouShowingUpComponent = withSlider(HowAreYouShowingUp, HowAreYouShowingUpSlider);

export default HowAreYouShowingUpComponent;