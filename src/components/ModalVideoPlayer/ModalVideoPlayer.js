import { useEffect, useState } from "react"; 
import { useDispatch } from "react-redux";
import { showYoutubeVideoModal} from '../../actions';

import './ModalVideoPlayer.css';

const ModalVideoPlayer = (props) => {
    const dispatch = useDispatch()
    const [inWidth, setInWidth] = useState(560);
    const [inHight, setInHight] = useState(315);

    useEffect(()=>{
        console.log(window.innerWidth)
        if (window.innerWidth < inWidth) {
            setInWidth(window.innerWidth);
            setInHight(Math.round(window.innerWidth / 1.778))
        }
        if (window.innerHeight < inHight) {
            setInWidth(Math.round(window.innerHeight * 1.778));
            setInHight(inHight);
        }
        if (window.innerWidth > 1120) {
            setInWidth(Math.round(window.innerWidth/2));
            setInHight(Math.round(window.innerWidth / 2 / 1.778))
        }
    }, [])    

    const onCloseModal = (e)=> {
        
        if (e.target.className === "youtubeVideo__wrapper") {
            dispatch(showYoutubeVideoModal())
        }
    }


    return (
        <div onClick={(e)=>onCloseModal(e)}className="youtubeVideo__wrapper">
            <iframe width={inWidth} height={inHight} src={`https://www.youtube.com/embed/${props.videoLink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default ModalVideoPlayer;