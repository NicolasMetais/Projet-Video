import React, { Component } from 'react';
import './Home.css'
import Category from './Category';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            categories: []
        }
    }
    componentDidMount() {
        if (this.state.toggle === true) {
            document.getElementById('container').style.marginLeft = 16.5 + "%";
            document.getElementById('container').style.width = 79 + "%";
        } else {
            document.getElementById('container').style.marginLeft = 4 + "%";
            document.getElementById('container').style.width = 91.5 + "%";
        }
        fetch('/categories')
            .then(res => res.json())
            .then(categories => this.setState({ categories }));
    }
    componentWillMount() {
        this.state.toggle = this.props.toggle
    }

    render() {
        return (
            <div id="container">
                <div className="realContainer" id="realContainer style-1">
                    <div class="force-overflow">
                        <div className="CategoList">
                            <h2 className="CategoH2">Most View</h2>
                            <Category category={'view'} />
                        </div>
                        {this.state.categories.map(catego =>
                            <div key={catego.category_id} className="CategoList">
                                <h2 className="CategoH2">{catego.text_category}</h2>
                                <Category category={catego.text_category} toggle={this.state.toggle} />
                            </div>
                        )}
                    </div>
                </div>
            </div >
        )
    }

}