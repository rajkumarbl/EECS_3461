import React, {Component} from 'react'; // 'react' is literally the node_module name
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';


import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA9OtIm5rMTqf9WeeVUf99MjfbVGnTcuMs';
const nat='hello';
class Staff extends Component {
   constructor(props) {
    super(props);
    this.state = { videos: [],videos2: [],videos3: [],clbutton:false,rmbutton:true,
    selectedVideo: null,selectedVideo2: null };// videos --> Main Playlist,  videos2 --> Search Result
    this.videoSearch('surfboard');
    //this.videoSearch2('nature');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({videos: videos,
                     selectedVideo: videos[0]});
      

      // Some ES6 syntactic sugar = key and property
      // have the same name ---> this.setState({videos})
    });
  }

   /* videoSearch2(term2) {
    YTSearch({key: API_KEY, term: term2}, (videos2) => {
        this.setState({videos2: videos2,
          selectedVideo2: videos2[0]});
      //this.setState({ videos: this.state.videos.concat(videos2)})
      // Some ES6 syntactic sugar = key and property
      // have the same name ---> this.setState({videos})
    });
  }*/
  
  onAddArray1 = () => { YTSearch({key: API_KEY, term: nat}, (videos) => {
    this.setState({videos: videos,
                   selectedVideo: videos[0]}); });
  this.setState({ videos: this.state.videos.concat(videos2)});;
        
        //this.setState({ videos: this.state.videos.concat(videos2)})
        //this.setState({ videos3: this.state.videos3.concat(videos2)});
   };

   onAddArray = () => {
    this.setState({videos2: this.state.videos2.concat(this.state.videos)});
    if(this.state.videos.length != 0 && this.state.videos2 != this.state.videos){
    this.setState({clbutton:!this.state.clbutton});}
   };

  onRemoveArray = () => {
    var array = this.state.videos2;
    array.slice(this.state.videos2.length-3, this.state.videos2.length-1);
    this.setState({ videos2: []});
    //this.setState({rmbutton:!this.state.rmbutton});
  };
  
  
   onClearArray = () => {
     this.setState({ videos2: [] });
     this.setState({clbutton:!this.state.clbutton});
  };
  onClick1(){
    window.location.href="dummy.html";
}

onClick2(){
  window.location.href="home.html";
}

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
       // const videoSearch2 = _.debounce((term2) => { this.videoSearch2(term2) }, 300);
        return(
        <div id="wid"> 
        <button id="home" type="button" onClick={this.onClick2}></button>
        <button id="settings" type="button" onClick={this.onClick1}></button>
        <div id="sbar"><SearchBar onSearchTermChange={videoSearch}/></div>
        <div id="viddet"><VideoDetail video={this.state.selectedVideo}/></div>

        <div id="vidlist"className={this.state.rmbutton ? "rmbuttonTrue": "rmbuttonFalse"}><VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/></div>
        <button id="add" type="button" onClick={this.onAddArray}> Add </button>  
        
        <div id="playlist"className={this.state.clbutton ? "clbuttonTrue": "clbuttonFalse"}><VideoList onVideoSelect={selectedVideo2 => this.setState({selectedVideo2})} videos={this.state.videos2} /></div> {/* passing props Playlist */}
        <button id="clear" type="button" onClick={this.onClearArray}> Clear List </button>
        </div>
		);
    }
}

export default Staff;