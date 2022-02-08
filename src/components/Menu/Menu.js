import { Link } from "react-router-dom";

import './Menu.css';
const Menu = () => {


    return (
        <div className="menu">
            <div className="evolve">bring<span>it</span>up</div>
            <div className="menu__block">
                <Link  to="/shedule" className="btn menu__block-schedule">
                    Schedule an appointment
                </Link>
                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8.98242" y="8.98242" width="4" height="4" fill="#6D53AF"></rect>
                    <rect width="3.98828" height="3.98828" fill="#6D53AF"></rect>
                    <rect x="8.98242" y="17.9648" width="4" height="4" fill="#6D53AF"></rect>
                    <rect y="8.98242" width="3.98828" height="3.98828" fill="#6D53AF"></rect>
                    <rect y="17.9648" width="4" height="4" fill="#6D53AF"></rect>
                    <rect x="17.9648" width="3.98828" height="3.98828" fill="#6D53AF"></rect>
                    <rect x="8.98242" width="3.98828" height="3.98828" fill="#6D53AF"></rect>
                    <rect x="17.9648" y="8.98242" width="4" height="4" fill="#6D53AF"></rect>
                    <rect x="17.9648" y="17.9648" width="4" height="4" fill="#6D53AF"></rect>
                </svg>
            </div>
        </div>)
}

export default Menu;