import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';

//import './App.css';
class PartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parts: [],
      eventId: '',
      desc: '',
      firstName: '',
      lastName: '',
      image: '',
      completed: '',
      
    };
  }

  
  componentDidMount = () => {
    this.getParts();
  };
  getParts = async () => {
    const response = await axios.get('http://localhost:3004/part');
    this.setState({
        parts: response.data,
    });
  };
  partOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createPart = async (e) => {
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
    const response = await axios.post('http://localhost:3004/part/createPart', data);
    console.log(response);
    this.getParts();
  };

  deletePart=  async (e) => {
    e.preventDefault();  
    const deletePart = await axios.delete(`http://localhost:3004/part/${e.target.id}`);
    console.log(deletePart)
    this.getParts();
}
  render() { 
    // return(
    // )
    const parts = this.state.parts.map((part) => {
      return (
        <div>
          
        <div className="task-wrapper" key="firstName">
         
          <h3 className="showText">Part Description: {part.desc}  | Qty: {part.eventId} </h3>
          <h3 className="showText">Location:    {part.firstName}    | 
          Part is used for: {part.lastName} </h3>
          <h3 className="showText">Part Number:  {part.completed}</h3>
          <img className="taskImg" src={part.image} alt='No Picture added to this part' />

            <div>
            <button className="taskLink" id={part.id} onClick={this.deletePart}>Complete</button>
            <button className="delButton" id={part.id} onClick={this.deletePart}>delete</button>
            <Link className="taskLink" to="/PartForm">Add Parts</Link></div>
          </div>
        </div>
      );
    });
    return (
      <div className='App'>
        
        <h1>Parts, Materials and Tools</h1>
      
        {parts}
      </div>
    );
  }

}




export default PartList;