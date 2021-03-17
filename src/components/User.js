import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';

//import './App.css';
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        signups: [],
        username: '',
        password: '',
        email: '',
        name: '',
        img: '',
        age: '',
        isActive: false,
      
    };
  }

  
  componentDidMount = () => {
    this.getUsers();
  };
  getUsers = async () => {
    const response = await axios.get('http://localhost:3004/user/all');
    this.setState({
        users: response.data,
    });
  };
  
  userOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createUser = async (e) => {
    e.preventDefault();
    //this.getUsers();
    const data = {
      eventId: this.state.eventId,
      desc: this.state.desc,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      image: this.state.image,
      completed: this.state.completed
    };
    console.log(data);
    const response = await axios.post('http://localhost:3004/user/createUser', data);
    console.log(response);
    this.getUsers();
  };

  deleteUser=  async (e) => {
    e.preventDefault();  
    const deleteUser = await axios.delete(`http://localhost:3004/user/${e.target.id}`);
    console.log(deleteUser)
    this.getUsers();
}
  render() { 
   
    <h2>User List</h2>
    const users = this.state.users.map((user) => {
      return (
        <div>
          
        <div className="task-wrapper" key="firstName">
            <div className="text-containter">
              <h3 className="showText">Project Description: {user.username}</h3>
              <h3 className="showText"> User Assigned To:   {user.password} </h3>
              <h3 className="showText"> Project Details:  {user.name}</h3>
              <h3 className="showText">Priority: {user.email} |  Please Complete by:  {user.age}</h3>
            </div>
             <img className="taskImg" src={user.image} alt='No Picture added to this user' />

            <div>
            <button className="taskLink" id={user.id} onClick={this.deleteUser}>Complete</button>
            <button className="delButton" id={user.id} onClick={this.deleteUser}>delete</button>
            <Link className="taskLink" to="/UserForm">Add Users</Link></div>
          </div>
        </div>
        
      );
    });
    return (
      <div className='App'>
        <h1>user List</h1>
        {/* <form className="taskInput" onSubmit={this.createTask}>
          <input
            name='eventId'
            className="taskInputCell"
            type='text'
            placeholder='enter eventId here'
            value={this.state.eventId}
            onChange={this.taskOnChange}
          />

<input
            name='desc'
            className="taskInputCell"
            type='text'
            placeholder='enter new task here'
            value={this.state.desc}
            onChange={this.taskOnChange}
          />

<input
            name='firstName'
            className="taskInputCell"
            type='text'
            placeholder='enter firstName here'
            value={this.state.firstName}
            onChange={this.taskOnChange}
          />
<p> Last Name </p>
<input      
            name='lastName'
            className="taskInputCell"
            type='text'
            placeholder='enter last name here'
            value={this.state.lastName}
            onChange={this.taskOnChange}
          />

<input
            name='image'
            className="taskInputCell"
            type='text'
            placeholder='enter pic link here'
            value={this.state.image}
            onChange={this.taskOnChange}
          />

<input
            name='completed'
            className="taskInputCell"
            type='text'
            placeholder='is this complete?'
            value={this.state.completed}
            onChange={this.taskOnChange}
          />

          <input type='submit' value='Add Task' />
        </form> */}
     
        {users}
      </div>
    
    );
  }

}




export default UserList;