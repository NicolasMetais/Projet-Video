import React, { Component } from 'react';
import './Follow.css';
import getJwt from '../helper';
import { Link } from 'react-router-dom';

export default class Follow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }

    componentDidMount() {
        const jwt = getJwt();
        fetch('/follow', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + jwt
            },
        }).then(res =>
            res.json()
        ).then(videos =>
            this.setState({ videos }),
        );
    }

    render() {
        return (

            <div id="container">
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
            </div>
        )
    }
}