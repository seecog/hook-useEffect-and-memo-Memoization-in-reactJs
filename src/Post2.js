import React from 'react';
import axios from 'axios';
class Post2 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }

    componentDidMount(){


        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            console.log('The response is ',res.data);
            this.setState({
                posts : res.data
            })
            })
            .catch((err)=>{
            console.log('The error is ',err);
            })
            

    }


render(){
    return (
        <div>
        <h2>List of posts</h2>
        <table>
            <th>Title</th><th>Body</th>
        {
            this.state.posts.map((post,i)=>{
                return (
        <tr key={i}>
        <td>{post.title}</td>
        <td>{post.body}</td>
        </tr>
                )
            })
        }
        </table>
            </div>
    )
}

}

export default Post2;