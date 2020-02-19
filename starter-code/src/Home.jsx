import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <h1>Welcome to WikiWorld!</h1>
                <p>A fun way to explore our world's different countries. Start by selecting a country and go down an exploration path!</p>
                <br/>
                <img alt='World' src='https://images.unsplash.com/photo-1535402803947-a950d5f7ae4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2627&q=80'/>
            </div>
        );
    }
}

export default Home;