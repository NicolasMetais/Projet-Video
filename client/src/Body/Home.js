import React, { Component } from 'react';
import './Home.css'
import FindVideo from './FindVideo';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        fetch('/categories')
            .then(res => res.json())
            .then(categories => this.setState({ categories }));
    }

    render() {
        return (
            <div id="container">
                <div class="force-overflow">
                    <div className="CategoList">
                        <h2 className="CategoH2">Most View</h2>
                        <FindVideo VideoGetValue={'videos.view'} pickOrder={' DESC'} flex={'row'} />
                    </div>
                    {this.state.categories.map(catego =>
                        <div key={catego.category_id} className="CategoList">
                            <h2 className="CategoH2">{catego.text_category}</h2>
                            <FindVideo VideoGetValue={catego.category_id} flex={'row'} />
                        </div>
                    )}
                </div>
            </div>
        )
    }

}