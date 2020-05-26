import React from 'react'
import { Grid} from '@material-ui/core'
import style from './VideoSideItem.module.css'
const VideoSideItem = ({video, onVideoSelect}) => {
    return(
        <Grid item className={style.VideoSideItemFull}>
            <div className={style.VideoSideItemContainer} onClick={()=> onVideoSelect(video)} >
                <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
               <div className={style.VideoSideItemDescription}>
               <p className={style.VideoSideTitle}> <b>{video.snippet.title}</b> </p>
           
                <p className={style.VideoSideChannelTitle}> {video.snippet.channelTitle} </p>

               </div>
                
    
            </div>

        </Grid>
    )
}

export default VideoSideItem