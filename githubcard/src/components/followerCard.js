import React from 'react';

class FollowerCard extends React.Component {
    

    render(){
        return(
            <div className='followerGroup'>
                {this.props.followers.map(follower => (
                    <Fc key={follower.id} follower={follower}/>
                ))}
            </div>
        )
    }

}


    function Fc({follower}) {
        const {avatar_url, login} = follower;
    return(
        <div className='card'>
            <div className='topInfo'>
                <img className='avatar' src={avatar_url} alt='user avatar'/>
            </div>
            <ul className='bottomInfo'>
                <li>Username: {login}</li>
            </ul>
        </div>
    )
}

export default FollowerCard;