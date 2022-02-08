import {useState} from "react";

//=======components========
import SideControl from "../SideControl/SideControl";
import Menu from "../Menu/Menu";
import { OfficerCard, OfficerCardPlus } from "../OfficerCard/OfficerCard";

//=======style========
import './TheDefference.css';


const TheDefference = () => {
    const [oldCards, setOldCards] = useState([
                                {cardNumber: "01", description: 'First step with some text and explanation'},
                                {cardNumber: "02", description: 'Second step with some text and explanation'},
                                {cardNumber: "03", description: 'Third step with some text and explanation'}
                            ]);
    const [oldCardNumber, setOldCardNumber] = useState(0);

    const [nowCards, setNowCards] = useState([
                                {cardNumber: "01", description: 'First step with some text and explanation'},
                                {cardNumber: "02", description: 'Second step with some text and explanation'},
                                {cardNumber: "03", description: 'Third step with some text and explanation'}
                            ]);
    const [nowCardNumber, setNowCardNumber] = useState(0);

    const oldElements = oldCardNumber ? oldCards.slice(0, oldCardNumber) : null;
    const nowElements = nowCardNumber ? nowCards.slice(0, nowCardNumber) : null;  
    
    const onPlusClick = (trigger) => {
        switch (trigger) {
            case "old": setOldCardNumber(old=>++old); break;
            case "now": setNowCardNumber(value => ++value); break;
            default: break; 

        }
    }

    return (
        <div className="difference animated fadeIn">
            <SideControl page={2}/>
            <Menu/>

            <div className="difference__wrapper">
                <div className="difference__info">
                    <div className="title">The difference</div>
                    <div className="subtitle">Between education 10 years ago and today</div>
                    <div className="difference__info-cards">
                        <div className="officerold">
                            <OfficerCard 
                                    elementsArray={oldElements} 
                                    title={"10 years ago"}/>
                            {oldCardNumber < oldCards.length ? <OfficerCardPlus onPlusClick={()=>onPlusClick("old")}/> : null}
                        </div>
                        <div className="officernew">
                            <OfficerCard 
                                    elementsArray={nowElements} 
                                    title={"today"}/>
                            {nowCardNumber < nowCards.length ? <OfficerCardPlus onPlusClick={()=>onPlusClick("now")}/> : null}
                           
                        </div>
                    </div>
                </div>
                <div className="difference__photo"></div>
            </div>

        </div>
    )

}



export default TheDefference;
