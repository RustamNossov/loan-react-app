const initialState = {
    sliderItems: [],
    sliderLoadingStatus: 'idle',
    showedYoutubeVideoModal: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SLIDER_FETCHING':
            return {
                ...state,
                sliderLoadingStatus: 'loading'
            }
        case 'SLIDER_FETCHED':
            return {
                ...state,
                sliderItems: action.payload,
                sliderLoadingStatus: 'idle'
            }
        case 'SLIDER_FETCHING_ERROR':
            return {
                ...state,
                sliderLoadingStatus: 'error'
            }
        case 'SHOW_YOUTUBE_VIDEO_MODAL':
            return {
                ...state,
                showedYoutubeVideoModal: !state.showedYoutubeVideoModal
            }
        
        default: return state
    }
}

export default reducer;