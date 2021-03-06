
import "./OfficerCard.css"

const OfficerCard = ({elementsArray, title}) => {
    
    const elements = elementsArray ? elementsArray
                                        .map(({cardNumber, description}, i) => {
                                            return (
                                                <div className="officer__card-item animated fadeIn" >
                                                    <div className="card__counter">{cardNumber}</div>
                                                    <div className="card__descr">
                                                        {description}
                                                    </div>
                                                </div>
                                            )
                                        }) : null;
    
    return (
        <>
             <div className="officer__card-title">
                Education<br/>
                <span>{title}</span>
            </div>
            {elements}     
        </>
    )
}

const OfficerCardPlus = ({onPlusClick}) => {
    return (
        <div className="officer__card-item" >
            <div className="card__counter">
                <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.34" filter="url(#filter0_d)">
                    <path d="M4.824 11.6716V7.37561H6.048C8.12 7.37561 9.156 6.85161 9.156 5.80361C9.156 4.79561 8.128 4.28361 6.072 4.26761C5.44 4.26761 4.86 4.29961 4.332 4.36361L4.116 0.619608C4.9 0.515608 5.764 0.463608 6.708 0.463608C8.772 0.463608 10.384 0.907609 11.544 1.79561C12.712 2.68361 13.296 3.89161 13.296 5.41961C13.296 6.75561 12.88 7.85161 12.048 8.70761C11.216 9.55561 10.008 10.1316 8.424 10.4356L8.34 11.6716H4.824ZM6.576 12.9436C7.232 12.9436 7.804 13.1876 8.292 13.6756C8.788 14.1636 9.036 14.7396 9.036 15.4036C9.036 16.0756 8.788 16.6636 8.292 17.1676C7.804 17.6636 7.232 17.9116 6.576 17.9116C5.904 17.9116 5.32 17.6676 4.824 17.1796C4.336 16.6836 4.092 16.0956 4.092 15.4156C4.092 14.7516 4.336 14.1756 4.824 13.6876C5.32 13.1916 5.904 12.9436 6.576 12.9436Z" fill="#BEBEBE"></path>
                    </g>
                    <defs>
                    <filter id="filter0_d" x="0.0917969" y="0.463867" width="17.204" height="25.448" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                    </filter>
                    </defs>
                    </svg>
            </div>
            <div className="card__click">
                <div>Click to show </div>
                <div className="plus">
                    <div className="plus__content" onClick={()=>onPlusClick()}>
                        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.16699 1.00033C5.16699 0.540088 5.54009 0.166992 6.00033 0.166992C6.46056 0.166992 6.83366 0.540088 6.83366 1.00033V11.0003C6.83366 11.4606 6.46056 11.8337 6.00033 11.8337C5.54009 11.8337 5.16699 11.4606 5.16699 11.0003V1.00033Z" fill="white"></path>
                            <path d="M1.00033 6.83366C0.540088 6.83366 0.166992 6.46056 0.166992 6.00033C0.166992 5.54009 0.540088 5.16699 1.00033 5.16699H11.0003C11.4606 5.16699 11.8337 5.54009 11.8337 6.00033C11.8337 6.46056 11.4606 6.83366 11.0003 6.83366H1.00033Z" fill="white"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    )
}

export {OfficerCard, OfficerCardPlus};

