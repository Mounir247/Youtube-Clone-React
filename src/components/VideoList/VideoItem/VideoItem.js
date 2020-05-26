import React from 'react'
import { Grid} from '@material-ui/core'
import style from './VideoItem.module.css'

const VideoItem = ({video, onVideoSelect}) => {
    return(
        <Grid item md={3} xs={12} className={style.VideoItemFull}>
            <div className={style.VideoItemContainer} onClick={()=> onVideoSelect(video)} >
                <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                <br/>
                <div className={style.VideoItemDescription}>
                <p  className={style.VideoItemTitle} > <b>{video.snippet.title}</b> </p>
                <p className={style.VideoItemChannelTitle}>{video.snippet.channelTitle}</p>
                </div>
    
            </div>

        </Grid>
    )
}
 
export default VideoItem