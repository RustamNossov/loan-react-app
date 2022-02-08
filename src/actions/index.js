export const sliderFetching = () => {
    return {
        type: 'SLIDER_FETCHING'
    }
}

export const sliderFetched = (sliderItems) => {
    return {
        type: 'SLIDER_FETCHED',
        payload: sliderItems
    }
}

export const sliderFetchingError = () => {
    return {
        type: 'SLIDER_FETCHING_ERROR'
    }
}

export const showYoutubeVideoModal = () => {
    return {
        type: 'SHOW_YOUTUBE_VIDEO_MODAL'
    }
}


