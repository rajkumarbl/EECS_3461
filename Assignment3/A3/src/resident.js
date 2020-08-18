import React, { Component } from 'react';
import _ from 'lodash';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list_res';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDGUOPsMya0Ednw0j80oAYIHxG6nR602nI';



class Resident extends Component {
    constructor(props) {
        super(props);
        this.state = {
                  videos: [], videos2: [], videos3: [],
                  selectedVideo: null
                };
    this.videoSearch('tigercubs');
    this.videoSearch2('positivity');
    this.videoSearch3('bbc');
    }

    videoSearch(term){
      if(this.term == "tigercubs"){
        YTSearch({key: API_KEY, term: "tigercubs"}, videos => {
          this.setState({
            videos: videos,
            selectedVideo: videos[0]
          });
        });}

        else if(this.term == "positivity"){
          YTSearch({key: API_KEY, term: "positivity"}, videos => {
            this.setState({
              videos: videos,
              selectedVideo: videos[0]
            });
          });}
        
        else if(this.term == "bbc"){
            YTSearch({key: API_KEY, term: "bbc"}, videos => {
              this.setState({
                videos: videos,
                selectedVideo: videos[0]
              });
            });}
        else{
          YTSearch({key: API_KEY, term: "tigercubs"}, videos => {
            this.setState({
              videos: videos,
              selectedVideo: videos[0]
            });
          });
          YTSearch({key: API_KEY, term: "positivity"}, (videos2) => {
            this.setState({videos2: videos2});
              this.setState({videos: this.state.videos.concat(this.state.videos2)});
        });
        YTSearch({key: API_KEY, term: "bbc"}, (videos2) => {
          this.setState({videos2: videos2});
            this.setState({videos: this.state.videos.concat(this.state.videos2)});
      });
        }
        
    }

    videoSearch2(term2) {
      if(this.term == "positivity"){
      YTSearch({key: API_KEY, term: term2}, (videos2) => {
          this.setState({videos2: videos2});
            this.setState({videos: this.state.videos.concat(this.state.videos2)});
      });
    }
     else{}}

    videoSearch3(term3) {
      if(this.term == "bbc"){
      YTSearch({key: API_KEY, term: term3}, (videos3) => {
          this.setState({videos3: videos3});
            this.setState({videos: this.state.videos.concat(this.state.videos3)});
      });
    } else{}}

    onClick1(){
      window.location.href="dummy.html";
  }

  onClick2(){
    window.location.href="home.html";
}

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 400);
        const videoSearch2 = _.debounce((term2) => { this.videoSearch2(term2)}, 400);
        const videoSearch3 = _.debounce((term3) => { this.videoSearch3(term3)}, 400);
        return (
          <div>
              <button id="home" type="button" onClick={this.onClick2}></button>
              <button id="help" type="button" onClick={this.onClick1}></button>
              <div id="sbar"><SearchBar onSearchTermChange={videoSearch}/></div>
              <div id="viddet"><VideoDetail video={this.state.selectedVideo}/></div>
              <div id="playlist"><VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} /></div> {/* passing props Playlist */}
            <div id="message"><marquee behavior="scroll" direction="left" scrollamount="7"><br></br>Message To Resdients Goes here . . .</marquee>
            </div>
          </div>
        );
      }
}

export default Resident;


