import React from "react";

//=======components========
import SideControl from "../SideControl/SideControl";
import Menu from "../Menu/Menu";
import SheduleForm from "../SheduleForm/SheduleForm";

//========style==============
import "./Shedule.css";

const Shedule = () => {

    return (
        <div className="schedule">
            <SideControl page={6}/>
            <Menu/>


            <div className="schedule__wrapper">
                <div className="schedule__info">
                    <div className="title">
                        Schedule <br/>
                        an appointment <br/>
                        with John
                    </div>
                    <div className="subtitle">Some explanation text</div>
                    <div className="colored">
                        <div className="contacts">
                            <div className="contacts__mail">example@gmail.com</div>
                            <div className="contacts__phone">+1 555 9513944</div>
                            <div className="contacts__links">
                                <a href="https://www.facebook.com/">
                                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M10.3955 0.00415094L7.8084 0C4.90191 0 3.02361 1.92708 3.02361 4.90974V7.17345H0.422417C0.197644 7.17345 0.015625 7.35568 0.015625 7.58045V10.8603C0.015625 11.0851 0.197851 11.2671 0.422417 11.2671H3.02361V19.5433C3.02361 19.768 3.20563 19.9501 3.4304 19.9501H6.82421C7.04898 19.9501 7.231 19.7678 7.231 19.5433V11.2671H10.2724C10.4972 11.2671 10.6792 11.0851 10.6792 10.8603L10.6804 7.58045C10.6804 7.47253 10.6375 7.36917 10.5613 7.29279C10.4851 7.21641 10.3814 7.17345 10.2734 7.17345H7.231V5.25447C7.231 4.33213 7.4508 3.86391 8.65229 3.86391L10.3951 3.86328C10.6196 3.86328 10.8016 3.68106 10.8016 3.45649V0.410943C10.8016 0.186585 10.6198 0.00456604 10.3955 0.00415094Z" fill="white"></path>
                                    </svg>
                                </a>
                                <a href="https://twitter.com">
                                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M20 1.92212C19.2639 2.2483 18.474 2.46951 17.6441 2.56827C18.4915 2.06085 19.1401 1.25601 19.4475 0.299935C18.6527 0.769837 17.7754 1.11105 16.8405 1.29601C16.0919 0.497418 15.0271 0 13.8461 0C11.5803 0 9.7431 1.83716 9.7431 4.10173C9.7431 4.42291 9.77935 4.7366 9.84935 5.03657C6.44 4.86533 3.41683 3.2319 1.39346 0.749837C1.03977 1.35474 0.838562 2.05958 0.838562 2.81196C0.838562 4.23546 1.56343 5.49147 2.66324 6.22631C1.99085 6.20382 1.35846 6.01886 0.804837 5.71141V5.76265C0.804837 7.74977 2.21958 9.4082 4.09546 9.78565C3.75176 9.87814 3.38935 9.92938 3.01441 9.92938C2.74948 9.92938 2.49327 9.90314 2.24206 9.85314C2.76444 11.4841 4.27918 12.6701 6.07386 12.7026C4.67036 13.8024 2.90069 14.456 0.978562 14.456C0.647386 14.456 0.321176 14.436 0 14.3998C1.81591 15.5659 3.97176 16.2457 6.28882 16.2457C13.8361 16.2457 17.9616 9.99438 17.9616 4.57291L17.9479 4.04176C18.754 3.46683 19.4513 2.74448 20 1.92212Z" fill="white"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="video">
                            <div className="play">
                                <div className="play__circle">
                                    <svg viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 8L0 16V0L14 8Z" fill="#6D53AF"></path>
                                    </svg>
                                </div>
                                <div className="play__text">play video</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="schedule__form">
                    <div className="schedule__form-title">Select the time</div>
                    <SheduleForm/>
                </div>
            </div>

        </div>
    )

}

export default Shedule;