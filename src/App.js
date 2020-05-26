import React from 'react';
import style from './App.module.css'
import {Grid} from '@material-ui/core';
import {SearchBar, VideoDetail,VideoSideList, VideoList} from './components';
import youtube from './api/youtube';


class App extends React.Component{
    state={
        videos:[],
        selectedVideo:null,
        
    }
    componentDidMount(){
        this.handleSubmit('chill trap 2020')
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }
    handleSubmit= async (searchTerm) =>{
        const response = await youtube.get('search', {
            params: {
        
                part: 'snippet',
                maxResults:30,
                key: 'AIzaSyCtijxFozcsGY88mvBl08j7N_pYBqcxiL0',
                q: searchTerm,
        
            }
        });
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }
    render(){
        const {selectedVideo, videos} = this.state;
               return(
           <Grid 
           justify="center"
           container
           spacing={0}>
               <Grid container>
               <Grid item md={12} xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit}/>

                </Grid>
               </Grid>

                   <Grid container className={style.VideoPrimaryFull} >
                       <Grid item md={8} >
                           <VideoDetail video={selectedVideo} />
                       </Grid>

                       <Grid item md={4}  className={style.VideoSideListFull}>
                       <VideoSideList videos={videos} onVideoSelect={this.onVideoSelect}/>
                       </Grid>

                   </Grid>




                   <Grid container>
                       <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                       </Grid>
               </Grid>

        
        )
    }
};


export default App