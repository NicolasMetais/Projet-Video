import React, { Component } from 'react';
import './LessView.css'
import FindVideo from './FindVideo';

export default class LessView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
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

    render() {
        return (
            <div id="container">
                <FindVideo VideoGetValue={'videos.view'} pickOrder={' ASC'} flex={'column'} />
            </div>
        )
    }
}