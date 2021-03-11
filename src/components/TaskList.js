import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';

//import './App.css';
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
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
    this.setState({
      tasks: response.data,
    });
  };
  taskOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createTask = async (e) => {
    e.preventDefault();
    //this.getTasks();
    const data = {
      eventId: this.state.eventId,
      desc: this.state.desc,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      image: this.state.image,
      completed: this.state.completed
    };
    console.log(data);
    const response = await axios.post('http://localhost:3004/task/createTask', data);
    console.log(response);
    this.getTasks();
  };

  deleteTask=  async (e) => {
    e.preventDefault();  
    const deleteTask = await axios.delete(`http://localhost:3004/task/${e.target.id}`);
    console.log(deleteTask)
    this.getTasks();
}
  render() { 
    // return(
    // )
    const tasks = this.state.tasks.map((task) => {
      return (
        <div>
          
        <div className="task-wrapper" key="firstName">
         
          <h3>Project Description: {task.desc} Also,  {task.firstName} {task.lastName}
          <br></br>Please Complete by:  {task.completed}</h3>
          <img className="taskImg" src={task.image} alt='No Picture added to this task' />
          <p>
            {/* some texts here */}
          </p>
            <div>
            <button className="taskLink" id={task.id} onClick={this.deleteTask}>Complete</button>
            <button className="delButton" id={task.id} onClick={this.deleteTask}>delete</button>
            <Link className="taskLink" to="/TaskForm">Add Tasks</Link></div>
          </div>
        </div>
      );
    });
    return (
      <div className='App'>
        
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
       <Link className="headerLink" to="/TaskList">Task List</Link>
        {tasks}
      </div>
    );
  }

}




export default TaskList;