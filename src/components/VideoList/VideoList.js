import React from 'react'
import {Grid} from '@material-ui/core'
import VideoItem from './VideoItem/VideoItem'
import style from './VideoList.module.css'
const VideoList = ({videos, onVideoSelect}) => {
    const listOfVideos = videos.slice(10, 30).map((video, id)=><VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)
        return(
            <Grid className={style.VideoListFull}>
                <div className={style.VideoListTitle}>
                <p style={{color:'#fff'}}>Recommendations </p>
                </div>
                <Grid container  className={style.VideolistContainer} >
                {listOfVideos}
            </Grid>
            </Grid>
            
        ) ;
}
 

export default VideoList