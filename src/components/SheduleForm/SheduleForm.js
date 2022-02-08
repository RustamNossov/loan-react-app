import React from "react";

//========style==========
import "./SheduleForm.css";

const SheduleForm = () =>{
    return (
        <form className="form">
                        <div className="form__item">
                            <label htmlFor="name">My name is</label>
                            <input name="name" type="text" placeholder="Your name"/>
                            <svg className="icon" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                <path d="M17 19V17C17 14.7909 15.2091 13 13 13H5C2.79086 13 1 14.7909 1 17V19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                        </div>
    
                        <div className="form__item">
                            <label htmlFor="name">You can contact me here</label>
                            <input name="email" type="email" placeholder="Your email"/>
                            <svg className="icon" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M21 3L11 10L1 3" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                        </div>
    
                        <div className="form__item">
                            <label htmlFor="name">I want to meet you on</label>
                            <input name="date" type="date" placeholder="When?"/>
                            <svg className="icon" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                <rect x="1" y="3" width="18" height="18" rx="2" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect>
                                <path d="M14 1V5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M6 1V5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M1 9H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                        </div>
                        <button className="btn">Schedule</button>
                    </form>
    )
}

export default SheduleForm;