import {useState, useEffect} from "react";
import  { useTouchSlide } from "../../hooks/onTouchSlide.hook";

//=======components========
import SideControl from "../SideControl/SideControl";
import ExploreSlide from "../ExploreSlide/ExploreSlide";
import withSlider from "../withSlider/withSlider";
import setOpacity from "../../hooks/setOpacity";

//======style=========
import "./ExploreModules.css"


const ExploreModules = ({onNextSlide, onPrevSlide, elements}) => {
    const [modalHidden, setModalHidden] = useState(true)
    const {onTouchStart, onTouchMove, onTouchEnd} = useTouchSlide();

    setTimeout(()=>setModalHidden(false), 5000)

    useEffect(()=>setOpacity('.page', "1"), [])

    const onCloseModal = () => {
        document.querySelector('.hanson').classList="hanson animate__animated animate__fadeOutDown"
    }
    
    return (
        <div className="modules page">
            <SideControl page={3}/>

            <div className="modules__wrapper">
                <div className="modules__info">
                    <div className="evolve opaci">bring<span>it:</span>up</div>
                    <div className="title">Explore the Modules</div>
                    <div className="subtitle">Fifth step with some text and explanation</div>
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
                                        <button className="close-btn" onClick={()=>onCloseModal()}>
                                            <svg width="20px" height="20px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <title>3. To close</title>
                                                <desc>Created with Sketch.</desc>
                                                <defs></defs>
                                                <g id="3.-To-close" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                                    <g transform="translate(2.000000, 2.000000)" stroke="#999999" stroke-width="4">
                                                        <circle id="Layer-1" cx="48" cy="48" r="48"></circle>
                                                        <path d="M47.806834,19.6743435 L47.806834,77.2743435" id="Layer-2" transform="translate(47.806834, 48.474344) rotate(45.000000) translate(-47.806834, -48.474344) "></path>
                                                        <path d="M76.6237986,48.48 L19.0237986,48.48" id="Layer-2" transform="translate(47.823799, 48.480000) rotate(45.000000) translate(-47.823799, -48.480000) "></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </button>
                                        
                                    </div> : null}
                    
                </div>
                <div className="modules__slider">
                    <div className="modules__content-slider"
                        onTouchStart={(e)=>onTouchStart(e)}
                        onTouchMove={(e)=>onTouchMove(e)}
                        onTouchEnd={()=>onTouchEnd(onNextSlide, onPrevSlide)}
                        >
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