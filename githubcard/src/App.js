import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/userCard';
import FollowerCard from './components/followerCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gitUser: {},
      gitFollowers: [],
    };
  }

    componentDidMount() {
      axios
      .get('https://api.github.com/users/AWhitt14')
      .then(res => {
        this.setState({
          gitUser: res.data,
        })
        console.log(this.state.gitUser);
      })
      .catch(er => {console.log('error',er)});

      axios
      .get('https://api.github.com/users/AWhitt14/followers')
      .then(res => {
        this.setState({
          gitFollowers: res.data,
        })
        console.log(this.state.gitFollowers);
      })
      .catch(er => {console.log('error',er)});
      
    }

  render(){
    return (
      <div className="App">
        <div className='user'>
          <UserCard user={this.state.gitUser}/>
        </div>
        <div classname='followerGroup'>
          <FollowerCard followers={this.state.gitFollowers}/>
        </div>
      </div>
    );
  }
}
  

export default App;
