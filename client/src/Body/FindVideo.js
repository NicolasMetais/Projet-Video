import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FindVideo.css';

export default class FindVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VideoGetValue: '',
            videoId: '',
            videos: [],
            pickOrder: false,
            flex: ''
        }
    }

    componentDidMount() {
        fetch('/VideosCatego', {
            method: 'POST',
            headers: { 'Content-Type': 'application/Json' },
            body: JSON.stringify(this.state)
        }).then(res =>
            res.json()
        ).then(videos =>
            this.setState({ videos })
        );
    }

    componentWillMount() {
        this.setState({
            toggle: this.props.toggle,
            VideoGetValue: this.props.VideoGetValue,
            pickOrder: this.props.pickOrder,
            flex: this.props.flex
        })
    }

    render() {
        if (this.state.flex === 'row') {
            return (
                <div id="CategoContainerRow">
                    {console.log(this.state.videos)}
                    {this.state.videos.map(video =>
                        <div key={video.video_id} id="VideoContainerRow">
                            <Link to={{ pathname: '/Video', state: { videoId: video.video_id } }}>
                                <img id="VideoRow" alt="Image Video" src={video.img} />
                            </Link>
                            <h3 id="TitleVideo">{video.title}</h3>
                            <h6 className="VideoH6">{video.pseudo} </h6>
                            <div id="VideoInfosRow">
                                <h6 className="VideoH6">{video.view} view</h6>
                                <h6 className="VideoH6"> created at 1995-03-15 </h6>
                            </div>
                            { /* {video.creation_date} */}
                        </div>
                    )}
                </div>
            )
        } else if (this.state.flex === 'column') {
            return (
                <div id="CategoContainerColumn">
                    {console.log(this.state.videos)}
                    {this.state.videos.map(video =>
                        <div key={video.video_id} id="VideoContainerColumn">
                            <div>
                                <div className="flexPseudo">
                                    <img className="ProfilPic" src={video.profilPic} alt="" />
                                    <h4 className="TitleVideoColumn">{video.pseudo} </h4>
                                </div>
                                <Link to={{
                                    pathname: '/Video',
                                    state: {
                                        videoId: video.video_id
                                    }
                                }}>
                                    <img id="VideoColumn" alt="Image Video" src={video.img}></img>
                                </Link>
                            </div>
                            <div id="VideoInfosColumn">
                                <h1 className="TitleVideoColumn">{video.title}</h1>
                                <div className="H6Column">
                                    <h5 className="VideoH6Column">{video.view} view</h5>
                                    <h5 className="VideoH6Column"> created at  1995-03-15 </h5>
                                </div>
                                <h3 id="VideoDescription"> {video.resume_video}</h3>
                                { /* {video.creation_date} */}
                            </div>
                        </div>
                    )}
                </div>
            )
        } else return (null)
    }
}

{/*                 <video controls src='Videos/Video.webm'></video> */ }