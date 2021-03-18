import React, { Component } from "react";
import axios from "axios";
import '../TaskList.css';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Submit"
    };   
  } 


  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }

  handleSubmit(event) {console.log("here got")
    event.preventDefault();  
    this.setState({ status: "Message Sent" });  
    axios({
      method: "POST",
      url: "http://localhost:3004/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        alert("Message Sent");
        this.setState({ name: "", email: "", message: "", status: "Submit" });
      } else if (response.data.status === "failed") {
        alert("Message Sent");console.log("got here")
      }
    });
  }

  render() {
    let buttonText = this.state.status;
    return (   
      <div className='input-container'>   
        <form  className="taskInput" onSubmit={this.handleSubmit.bind(this)} method="POST">
        <h3>Contact Us</h3>
            <div className="input-wrapper">
            <p className="input-name"> Name </p>  
            <input
             className="taskInputCell"
                type="text"
                id="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
                required
            />
            </div>
            <div className="input-wrapper">
            <p className="input-name"> Email </p>  
            <input
             className="taskInputCell"
                type="email"
                id="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                required
            />
            </div>
            <div className="input-wrapper">
            <p className="input-name"> Message </p>  
            <textarea
             className="taskInputCell"
                id="message"
                placeholder="Message"
                value={this.state.message}
                onChange={this.handleChange.bind(this)}
                required
            />
            </div>
            <br>
          </br>
            <button type="submit">{buttonText}</button>
        </form>  
        </div>    
    );
}
}

export default ContactForm;