const initialState = {
    items: [],
    loadingStatus: 'idle',
    showedYoutubeVideoModal: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_FETCHING':
            return {
                ...state,
                loadingStatus: 'loading'
            }
        case 'DATA_FETCHED':
            return {
                ...state,
                items: action.payload,
                loadingStatus: 'idle'
            }
        case 'DATA_FETCHING_ERROR':
            return {
                ...state,
                loadingStatus: 'error'
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