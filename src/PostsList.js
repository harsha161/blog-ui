import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class PostsList extends React.Component {
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get('http://JSONplaceholder.typicode.com/posts')
        .then((response)=>{
            const posts = response.data
            this.setState({posts:posts})
        
        })
        .catch(err =>{
            alert(err)
        })
    }
    render(){
        return(
            <div>
            <br/>
            <h2  className="btn btn-info">listing posts-{this.state.posts.length}</h2>
            {this.state.posts.map((post)=>
            {return(
                <div key ={post.id}> 
                <h2 className='text-primary'><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
                <p class="btn btn-light">{post.body}</p>
                <hr/>
                
                </div>
            )
            })
            }
                    
            </div>
        )
    }
}

export default PostsList