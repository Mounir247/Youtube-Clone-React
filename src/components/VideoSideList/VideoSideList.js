import React from 'react'
import {Grid} from '@material-ui/core'
import VideoSideItem from './VideoSideItem/VideoSideItem'
import style from './VideoSideList.module.css'


const VideoSideList = ({ videos, onVideoSelect}) => {
    
    const listOfVideos = videos.slice(2,9).map((video, id)=><VideoSideItem onVideoSelect={onVideoSelect} key={id} video={video} />)
        return(
            <Grid container  className={style.VideoSideListFull}>
                <p className={style.SideListTitle}>Playlist</p>

                <Grid item className={style.VideoSideListContainer}>
                {listOfVideos}
                </Grid>
            </Grid>
        ) ;
}

 
export default VideoSideList