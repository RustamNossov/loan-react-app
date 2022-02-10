import React from "react";

//=======components========
import SideControl from "../SideControl/SideControl";
import Menu from "../Menu/Menu";
import HowAreYouShowingUpSlider from "../HowAreYouShowinUpSlider/HowAreYouShowinUpSlider";
import withSlider from "../withSlider/withSlider";

//========styles===========
import "./HowAreYouShowingUp.css";

const HowAreYouShowingUp = ({onNextSlide, onPrevSlide, elements}) => {
    return (
        <div className="feed">
            <SideControl page={5}/>
            <Menu/>

            <div className="title">
                How are you Showing Up<br/>
                &amp; Evolving
            </div>
            <div className="colored"></div>
            <div className="feed__slider">
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