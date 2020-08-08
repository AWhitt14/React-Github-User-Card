import React from 'react';

class UserCard extends React.Component {
    

    render(){
        return(
            <div className='card'>
                <div className='topInfo'>
                    <img className='avatar' src={this.props.user.avatar_url} alt='user avatar'/>
                    <h1>{this.props.user.name}</h1>
                </div>
                <ul className='bottomInfo'>
                    <li>Username: {this.props.user.login}</li>
                    <li>Followers: {this.props.user.followers}</li>
                    <li>Following: {this.props.user.following}</li>
                    <li>Repos: {this.props.user.public_repos}</li>
                    <li>Location: {this.props.user.location}</li>
                </ul>
                

            </div>
        )
    }

}

export default UserCard;