import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';

//import './App.css';
class TaskEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: '',
      desc: '',
      firstName: '',
      lastName: '',
      image: '',
      completed: '',
      
    };
  }

  
  componentDidMount = () => {
    this.getTasks();
  };
  getTasks = async () => {
    const response = await axios.get('http://localhost:3004/task/all');
    const taskFiltered = response.data.filter(foundTask => {
    
    return     foundTask.id== this.props.match.params.id
    } ) 
    const task = taskFiltered[0]
    console.log(task)
    this.setState({
      eventId: task.eventId,
      desc: task.desc,
      firstName: task.firstName,
      lastName: task.lastName,
      image: task.image,
      completed: task.completed,
    //   username: task.
    });
  };
  
  taskOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  
  editTask = async (e) => {
    e.preventDefault();
    //this.getTasks();
    const data = {
      eventId: parseInt(this.state.eventId),
      desc: this.state.desc,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      image: this.state.image,
      completed: this.state.completed
    };
    console.log(data);
    const response = await axios.put(`http://localhost:3004/task/${this.props.match.params.id}`, data);
    console.log(response);
    // this.getTasks();
  };

  
  render() {

    return (
      <div className='input-container'>
        <form className="taskInput" onSubmit={this.editTask}>
        <h3>Edit Tasks</h3>
          <div className="input-wrapper">
            {/* <p className="input-name"> Priority: </p>          
              <input
                name='eventId'
                className="taskInputCell"
                type='text'
                placeholder='1=Urgent  4=can wait'
                value={this.state.eventId}
                onChange={this.taskOnChange}
              /> */}
<div>
<label for="Priority">Select Priority:</label>


<select name="eventId" id="Select1" onChange={this.taskOnChange}>
  <option value="1">1</option>
  <option value="3">2</option>
  <option value="5">3</option>
  <option value="4">4</option>
</select>
      </div>
          </div>

          <div className="input-wrapper">
            <p className="input-name"> Project Name: </p>
              <input
                name='desc'
                className="taskInputCell"
                type='text'
                placeholder='enter new Project here'
                value={this.state.desc}
                onChange={this.taskOnChange}
              />
          </div>

          <div className="input-wrapper">
            <p className="input-name"> Name: </p>
            <input
                name='firstName'
                className="taskInputCell"
                type='text'
                placeholder='enter Name here'
                value={this.state.firstName}
                onChange={this.taskOnChange}
            />
          </div>

          <div className="input-wrapper">
            <p className="input-name"> Notes:  </p>
            <input      
                name='lastName'
                className="taskInputCell"
                type='text'
                placeholder='Project Details'
                value={this.state.lastName}
                onChange={this.taskOnChange}
          />
          </div>
          <div className="input-wrapper">
            <p className="input-name"> Picture Link: </p>
<input
            name='image'
            className="taskInputCell"
            type='text'
            placeholder='enter pic link here'
            value={this.state.image}
            onChange={this.taskOnChange}
          />
          </div>

          <div className="input-wrapper">
            <p className="input-name"> Due Data:  </p>
<input
            name='completed'
            className="taskInputCell"
            type='text'
            placeholder='Complete By'
            value={this.state.completed}
            onChange={this.taskOnChange}
          />
          </div>

          <input className="taskLink" type='submit' value='Edit Task' />
          <Link className="taskLink" to="/TaskList">Back to Task List</Link>
        </form>
        <br></br>
        
        {/* {tasks} */}
      </div>
    );
  }

}



export default TaskEdit;
//   class PostContainer extends Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         posts: []
//       }
//     }
  
//     // GET all posts ==> List those posts
  
//     createPost = (e, post) => {
//       e.preventDefault();
  
//       const oldPosts = this.state.posts;
//       oldPosts.push(post);
  
//       this.setState({ posts: oldPosts });
//       this.props.history.push('/profile/post/list');
//     }
  
//     updatePost = (e, postId, revisedPost) => {
//       e.preventDefault();
//       const updatedPosts = this.state.posts.map((post, index) => (
//         parseInt(postId) === index ? revisedPost : post
//       ))
  
//       this.setState({
//         posts: updatedPosts
//       })
//       this.props.history.push('/profile/post/list');
//     }
  
//     render() {
//       return (
//         <div>
//           <Link to="/profile/post/new">Create a Post</Link>
//           <Link to="/profile/post/list">All Posts</Link>
//           <Route path="/profile/post/new" render={() => (
//             <CreatePostForm createPost={this.createPost} />
//           )} />
//           <Route path="/profile/post/list" render={() => (
//             <PostList posts={this.state.posts} />
//           )} />
//           <Route path="/profile/post/edit/:index" render={(routerProps) => (
//             <UpdatePostForm
//               posts={this.state.posts}
//               updatePost={this.updatePost}
//               postId={routerProps.match.params.index}
//             />
//           )} />
//         </div>
//       )
//     }
//   }
  
//   export default withRouter(PostContainer);