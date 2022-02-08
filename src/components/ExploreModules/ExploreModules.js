import {useState} from "react";

//=======components========
import SideControl from "../SideControl/SideControl";
import Menu from "../Menu/Menu";
import ExploreSlide from "../ExploreSlide/ExploreSlide";
import withSlider from "../withSlider/withSlider";

//======style=========
import "./ExploreModules.css"


const ExploreModules = ({onNextSlide, onPrevSlide, elements}) => {
    const [modalHidden, setModalHidden] = useState(true)
    setTimeout(()=>setModalHidden(false), 5000)
    return (
        <div className="modules animated fadeIn">
            <SideControl page={3}/>

            <div className="modules__wrapper">
                <div className="modules__info">
                    <div className="evolve opaci">bring<span>it:</span>up</div>
                    <div className="title">Explore<br/>
                        the Modules</div>
                    <div className="subtitle">Fifth step with some text<br/>
                            and explanation</div>
                    <button className="btn">Get access</button>
                    <div className="modules__info-btns">
                            <button type="button" onClick={()=>onPrevSlide()} className="slick-prev">
                                <div className="play__content">
                                    <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="1" d="M0 5.5L9 11V0L0 5.5Z" fill="#EAEAEA"></path>
                                    </svg>
                                </div>
                            </button>
                            <button type="button" onClick={()=>onNextSlide()} className="slick-next">
                                <div className="play__content">
                                    <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="1" d="M9 5.5L0 11V0L9 5.5Z" fill="#EAEAEA"></path>
                                    </svg>
                                </div>            
                            </button>
                    </div>
                    { !modalHidden ? <div className="hanson animate__animated animate__fadeInUp">
                                        <div className="hanson__title">John Smith</div>
                                        <div className="hanson__teacher">your teacher</div>
                                        <div className="hanson__descr">
                                                «We have 8 modules, you <br/>
                                                can see what are they about»
                                        </div>
                                    </div> : null}
                    
                </div>
                <div className="modules__slider">
                    <div className="modules__content-slider">
                        <div className="modules__content-slider-container">

                            {elements}

                        </div>
                    </div>
                </div>      
            </div>

        </div>

    )
}

const ExploreModulesComponent = withSlider(ExploreModules, ExploreSlide);

export default ExploreModulesComponent;