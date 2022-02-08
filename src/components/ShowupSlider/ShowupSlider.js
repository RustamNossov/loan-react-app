import React, {useState,useEffect} from "react";

import "./ShowupSlider.css";

const ShowupSlider = ({data, urlImg, newClasses}) => {
    const {slideNumer, title1, title2} = data

    let newSlideNumber = slideNumer;
    if (slideNumer < 10) {
        newSlideNumber = '0'+slideNumer;
    } 
   
    return (
            <a href="#" className="card" style={{"backgroundImage" : `url(${urlImg})`}}>
                <div className="card__controls">
                    <div className="card__controls-count">{newSlideNumber}</div>
                    <div className={`card__controls-arrow ${newClasses}`}>
                        <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="1" d="M12.9846 0.965391C12.8032 1.03765 12.6848 1.20628 12.6848 1.39341L12.6848 6.46942H0.555501C0.287685 6.46942 0.0703125 6.67696 0.0703125 6.93266L0.0703125 14.3443C0.0703125 14.6 0.287685 14.8075 0.555501 14.8075H12.6849V19.903C12.6849 20.0901 12.8033 20.2587 12.9837 20.331C13.1652 20.4023 13.3738 20.3634 13.5126 20.2309L23.2238 10.9896C23.315 10.9025 23.3665 10.7848 23.3665 10.6616C23.3665 10.5384 23.315 10.4207 23.2248 10.3337L13.5135 1.06545C13.3747 0.932949 13.1661 0.893127 12.9846 0.965391Z" fill="#fff"></path>
                        </svg>
                    </div>
                </div>
                <div className={`card__title ${newClasses}`}>{title1} <br/> {title2 ? title2 : null}</div>
            </a>
    )
}

export default ShowupSlider;