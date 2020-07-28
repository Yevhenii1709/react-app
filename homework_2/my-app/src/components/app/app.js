import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn react', important: true, id: 'khdv'},
                {label: 'That is so good', important: false, id: 'jnvkj'},
                {label: 'I need a break...', important: false, id: 'jnfkef'}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            data.splice(index, 1);
            return {
                data: data
            }
        });
    }

    render () {
        return (
            <div className="app">
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete = {id => console.log(id)}/>
                <PostAddForm/>
            </div>
        )
    }
}