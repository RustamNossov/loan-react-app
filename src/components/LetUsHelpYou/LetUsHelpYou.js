import { useEffect } from "react";

//=======components========
import SideControl from "../SideControl/SideControl";
import Menu from "../Menu/Menu";
import LetUsHelpYouForm from "../LetUsHelpYouForm/LetUsHelpYouForm";
import setOpacity from '../../hooks/setOpacity';
//======style=======
import "./LetUsHelpYou.css"

const LetUsHelpYou = () => {

    useEffect(()=>setOpacity(".page", "1"),[])

    return (
        <div className="join page">
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