export const dataFetching = () => {
    return {
        type: 'DATA_FETCHING'
    }
}

export const dataFetched = (data) => {
    return {
        type: 'DATA_FETCHED',
        payload: data
    }
}

export const dataFetchingError = () => {
    return {
        type: 'DATA_FETCHING_ERROR'
    }
}

export const showYoutubeVideoModal = (data) => {
    return {
        type: 'SHOW_YOUTUBE_VIDEO_MODAL',
        payload: data
    }
}


