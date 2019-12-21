import React from 'react';
import axios from 'axios';//npm install --saveaxios
import{Link} from 'react-router-dom';

class UserList extends React.Component {
    constructor() {
        super()
        this.state= {
            users: []
        }
    }
    componentDidMount(){
        axios.get('http://JSONplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(this)
            const users= response.data
            this.setState({users})
        })
        .catch(err =>{
            alert(err)
        })
    }

    render(){
        return(
            <div>
            <h2>Listing Users - {this.state.users.length}</h2>
                <ul className='list-group'>
                     {this.state.users.map((user)=>{
                         return <li key ={user.id} className='list-group-item'><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                     })}
                </ul>
            </div>
        )
    }
}

export default UserList