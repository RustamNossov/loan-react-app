import React from "react";

//=======components========
import SideControl from "../SideControl/SideControl";
import Menu from "../Menu/Menu";
import LetUsHelpYouForm from "../LetUsHelpYouForm/LetUsHelpYouForm";

//======style=======
import "./LetUsHelpYou.css"

const LetUsHelpYou = () => {
    return (
        <div className="join animated fadeIn">
            <SideControl page={4}/>
            <Menu/>

            <div className="join__wrapper">
                <div className="join__intro">
                </div>
                <div className="join__evolution">
                    <div className="title">Let us help you</div>
                    
                    <LetUsHelpYouForm/>

                </div>
            </div>

        </div>
    )
}

export default LetUsHelpYou;