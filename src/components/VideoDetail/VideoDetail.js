import React from 'react'
import {Grid} from '@material-ui/core'
import style from './VideoDetail.module.css'

const VideoDetail = ({video}) => {
    
    if(!video) return <div>Loading...</div>
    console.log(video)
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <Grid container className={style.VideoDetailFull}>
            <Grid item elevation={6}  className={style.VideoDetailContainer}>
            <iframe frameBorder="0" title="Video Player" src={videoSrc} />
            <div className={style.VideoDetailDescriptionFull} >
                <h1 className={style.VideoDetailTitle}>{video.snippet.title} </h1>
                <h2 className={style.VideoDetailSubTitle}> {video.snippet.channelTitle} </h2>
                <h4 className={style.VideoDetailDescriptionText}>{video.snippet.description} </h4>
            </div>
        </Grid>
        </Grid>
    )
}


export default VideoDetail