import React, {useState, useEffect} from "react";

//=====style=========
import "./HowAreYouShowinUpSlider.css"

const HowAreYouShowinUpSlider = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [image, setImage] = useState([{fileName: 'feed_1.png', file: null},
                                        {fileName: 'feed_2.png', file: null},
                                        {fileName: 'feed_3.png', file: null},
                                        {fileName: 'feed_1.png', file: null},
                                        {fileName: 'feed_2.png', file: null},
                                        {fileName: 'feed_3.png', file: null}])
    


    const fetchImage = async (item) => {
        try {
            const response = await import(`../../assets/img/${item.fileName}`) // change relative path to suit your needs
            return await response.default
        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const newData = [...image];
        image.forEach((item, i) => {
            fetchImage(item)
            .then(result => { 
                newData[i] = {...item, file: result}; 
                setImage(newData);
            })
        })
    }, [])


    return (
                 <div className="feed__item feed__item-active">
                    <div className="feed__item-info">
                        <div className="photo">
                            <img src={image[0].file} alt="Andrew"/>
                        </div>
                        <div className="author">
                            <div className="author__name">Andrew Jackson</div>
                            <div className="author__preview">Preview text of the full<br/>
                                story by Andrew.</div>
                            <div className="author__profession">profession</div>
                            <div className="author__from">posted from <span>instagram</span></div>
                        </div>
                    </div>
                    <hr/>
                    <div className="feed__item-play">
                        <div className="playvideo">
                            <svg width="6" height="8" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="1" d="M9 5.5L0 11V0L9 5.5Z" fill="#6D53AF"></path>
                            </svg>
                        </div>
                        <div className="timing">
                            play video (3:20)
                        </div>
                    </div>
                    <hr/>
                    <div className="feed__item-descr">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                </div>
                
    )
}

export default HowAreYouShowinUpSlider;