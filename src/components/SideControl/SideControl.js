import React, {useRef} from "react";
import { Link } from "react-router-dom";

import './SideControl.css'

const SideControl = (props) => {

    const pageProps = useRef([
        {colored: false, url: "/thedifference"},
        {colored: false, url: "/explorethemodules"},
        {colored: false, url: "/letushelpyou"},
        {colored: true, url: "/howareyoushowingup"},
        {colored: false, url: "/shedule"},
        {colored: false, url: "/"}
      ])


    const pageNumber = props.page
    const {colored, url} = pageProps.current[pageNumber-1]

    const addZero = (value) => {
        if (value < 10) {
            return "0" + value;
        } else {
            return value
        }
    }
    

    return (
        <div className={`sidecontrol ${colored ? 'colored' : ''}`}>
            <Link to={"/"}>
                {colored ? 
                <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0371094 21.388L7.41866 2.12134C7.41866 2.12134 11.0514 1.16004 14.8913 0.592773C11.1097 8.48623 8.82759 15.8142 8.82759 16.9457C8.82759 18.0767 9.15378 20.1594 14.0216 20.1594C19.7984 20.1594 27.13 16.6202 27.13 11.2118C27.13 18.4392 19.4091 23.0112 10.905 23.0112C4.56389 23.0112 0.0371094 21.388 0.0371094 21.388Z" fill="#9EC73D"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.1304 11.212C27.1304 18.4393 19.4096 23.0114 10.9054 23.0114C4.56435 23.0114 0.108398 21.3882 0.108398 21.3882C0.108398 21.3882 3.92507 24.978 13.6608 24.978C23.3947 24.978 34.7983 18.9304 34.7983 10.1792C34.7983 -1.87078 17.4608 0.351842 17.4608 0.351842L14.8078 5.94232C14.8078 5.94232 17.2983 5.6566 19.3614 5.6566C22.2626 5.6566 27.1304 6.93577 27.1304 11.212Z" fill="#fff"></path>
                </svg>
                :
                <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.0371094 21.388L7.41866 2.12134C7.41866 2.12134 11.0514 1.16004 14.8913 0.592773C11.1097 8.48623 8.82759 15.8142 8.82759 16.9457C8.82759 18.0767 9.15378 20.1594 14.0216 20.1594C19.7984 20.1594 27.13 16.6202 27.13 11.2118C27.13 18.4392 19.4091 23.0112 10.905 23.0112C4.56389 23.0112 0.0371094 21.388 0.0371094 21.388Z" fill="#9EC73D"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M27.1304 11.212C27.1304 18.4393 19.4096 23.0114 10.9054 23.0114C4.56435 23.0114 0.108398 21.3882 0.108398 21.3882C0.108398 21.3882 3.92507 24.978 13.6608 24.978C23.3947 24.978 34.7983 18.9304 34.7983 10.1792C34.7983 -1.87078 17.4608 0.351842 17.4608 0.351842L14.8078 5.94232C14.8078 5.94232 17.2983 5.6566 19.3614 5.6566C22.2626 5.6566 27.1304 6.93577 27.1304 11.212Z" fill="#6D53AF"></path>
                </svg>
                }
                
            </Link>
            <div className="sidecontrol__controls">
                <Link className="next" to={url}>
                {colored ? 
                    <svg viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1" d="M19.4155 12.9143C19.3432 12.7329 19.1746 12.6145 18.9874 12.6145H13.9114V0.485189C13.9114 0.217373 13.7039 0 13.4482 0H6.03659C5.78089 0 5.57335 0.217373 5.57335 0.485189V12.6145H0.477884C0.290755 12.6145 0.122127 12.7329 0.0498639 12.9134C-0.0214873 13.0949 0.0174236 13.3035 0.14992 13.4423L9.39126 23.1535C9.47833 23.2447 9.59602 23.2962 9.71922 23.2962C9.84243 23.2962 9.96012 23.2447 10.0472 23.1545L19.3154 13.4432C19.4479 13.3044 19.4877 13.0958 19.4155 12.9143Z" fill="#fff"></path>
                    </svg>
                :
                    <svg viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1" d="M19.4155 12.9143C19.3432 12.7329 19.1746 12.6145 18.9874 12.6145H13.9114V0.485189C13.9114 0.217373 13.7039 0 13.4482 0H6.03659C5.78089 0 5.57335 0.217373 5.57335 0.485189V12.6145H0.477884C0.290755 12.6145 0.122127 12.7329 0.0498639 12.9134C-0.0214873 13.0949 0.0174236 13.3035 0.14992 13.4423L9.39126 23.1535C9.47833 23.2447 9.59602 23.2962 9.71922 23.2962C9.84243 23.2962 9.96012 23.2447 10.0472 23.1545L19.3154 13.4432C19.4479 13.3044 19.4877 13.0958 19.4155 12.9143Z" fill="#000"></path>
                    </svg>
                }
                </Link>
                <span className={`sidecontrol__controls-count ${colored ? 'white' : ''}`}>{addZero(pageNumber)}</span>
                <div className={`sidecontrol__controls-show ${colored ? 'white' : ''}`}>Bring It: Up</div>
            </div>
        </div>
    )
}

export default SideControl