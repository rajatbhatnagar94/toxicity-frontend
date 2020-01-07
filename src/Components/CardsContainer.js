import React from 'react'
import axios from 'axios';
import config from '../config'
import { Card } from 'semantic-ui-react'
import Cards from "./Cards"
import CardLoader from "./CardLoader"

class CardsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.fetchComments = this.fetchComments.bind(this);
        this.onToxicClick = this.onToxicClick.bind(this);
        this.onNonToxicClick = this.onNonToxicClick.bind(this);
        this.filter = this.filter.bind(this);
        this.state = {
            data: [],
            loading: true
        };
        this.loaderContent = [];
        let max = 5;
        for (let i = 0; i < max; i++) {
            this.loaderContent.push(i);
        }
    }
    componentDidMount() {
        let params = {
            'subreddit': this.props.subreddit_name,
            'limit': 100
        };
        this.fetchComments(params);
    }
    filter(comment_id) {
        let data = this.state.data.filter(item => {
            console.log(item.reddit_identifier);
            return item.reddit_identifier !== comment_id
        });
        this.setState({
            data
        })
        if (data.length == 0) {
            // 'explainlikeimfive'
            let params = {
                'subreddit': this.props.subreddit_name,
                'limit': 100
            };
            this.fetchComments(params);
        }
    }
    onToxicClick(comment_id, url) {
        let url_update = `${config.webserver_url}/update/action`;
        let params = {
            user_action: 'toxic',
            id: comment_id
        }
        axios
        .post(url_update, params)
        .then(response => {
            this.filter(comment_id);
            window.open(url, "_blank");
        })
    }
    onNonToxicClick(comment_id) {
        let url = `${config.webserver_url}/update/action`;
        let params = {
            user_action: 'non_toxic',
            id: comment_id
        }
        axios.post(url, params)
        .then(response => {
            this.filter(comment_id);
        })
    }
    fetchComments({ subreddit, limit }) {
        let url = `${config.webserver_url}/getcomments/${subreddit}/${limit}`;
        axios
            .get(url)
            .then(response => {
                this.setState({
                    loading: false,
                    data: response.data.data
                })    
            });
    }
    render() {
        if (this.state.loading) {
            return (
            <Card.Group>{
                this.loaderContent.map(item => <CardLoader key={item} />)
            }
            </Card.Group>
            )
        } else {
            return (
            <Card.Group>
            {
                this.state.data.map((item) => <Cards
                onNonToxicClick={this.onNonToxicClick}
                onToxicClick={this.onToxicClick}
                key={item.reddit_identifier}
                {...item} />)
            }
            </Card.Group>);
        }
    }
};

export default CardsContainer