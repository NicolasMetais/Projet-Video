import React, { Component } from 'react';
import './MenuRight.css';
import getJwt from '../helper'


export default class MenuRight extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false,
            videos: []
        }
    }
    componentDidMount() {
        this.didUserIsHere()

    }


    didUserIsHere() {
        const jwt = getJwt();
        if (jwt) {
            this.setState({ user: true })
            fetch('/followMenu', {
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
    }

    render() {
        if (this.state.user === true) {
            return (
                <div id="MenuRight">
                    {this.state.videos.map(video =>
                        <div>
                            <img className="ProfilMenuPic" alt="" src={video.profilPic} />
                        </div>
                    )}

                </div>
            );
        } else return null;
    }
}
