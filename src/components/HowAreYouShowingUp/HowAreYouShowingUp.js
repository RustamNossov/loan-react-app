import React from "react";

//=======components========
import SideControl from "../SideControl/SideControl";
import Menu from "../Menu/Menu";
import HowAreYouShowingUpSlider from "../HowAreYouShowinUpSlider/HowAreYouShowinUpSlider";

//========styles===========
import "./HowAreYouShowingUp.css";

const HowAreYouShowingUp = () => {
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
                <div className="feed__item feed__item-active">
                    <HowAreYouShowingUpSlider/>
                </div>
            </div>
            


        </div>

    )

}

export default HowAreYouShowingUp;