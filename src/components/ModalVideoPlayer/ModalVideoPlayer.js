import { useDispatch, useSelector } from "react-redux";
import { showYoutubeVideoModal} from '../../actions';

import './ModalVideoPlayer.css';

const ModalVideoPlayer = (props) => {
    const dispatch = useDispatch()

    //dispatch(showYoutubeVideoModal())

    const onCloseModal = (e)=> {
        
        if (e.target.className = "youtubeVideo__wrapper") {
            dispatch(showYoutubeVideoModal())
        }
    }


    return (
        <div onClick={(e)=>onCloseModal(e)}className="youtubeVideo__wrapper">
            <iframe width="560" height="315" src={props.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default ModalVideoPlayer;