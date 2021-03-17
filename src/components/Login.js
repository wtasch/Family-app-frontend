import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
let loggedIn = 0;

//import './App.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      isActive: '',
      loggedIn: '',
    };
  }

  
//   componentDidMount = () => {
//     this.getPosts();
//   };
//   getPosts = async () => {
//     const response = await axios.get('http://localhost:3004/post/all');
//     this.setState({
//       posts: response.data,
//     });
//   };
//   loginOnChange = (e) => {
//     e.preventDefault();
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   login = async (e) => {
//     e.preventDefault();
//     const data = {
//       username: this.state.username,
//       password: this.state.password,
//     };
//     console.log(data);
//     const response = await axios.post('http://localhost:3004/auth/login', data);
//     console.log(response);
//   };

  loginOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  login = async (e) => {
    e.preventDefault();
    loggedIn=1;
    const data = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      isActive: this.state.isActive
    };
    console.log(data);
    // loggedIn=1;
    console.log(loggedIn)
    try{
    const response = await axios.post('http://localhost:3004/auth/login', data);
    console.log(response);
    console.log(response.data.user.username);  
    // loggedIn=1;
      

    }
    catch{
        alert("Wrong password, pls try again");
    }
 
  };





  
// login = async (e) => {
//     event.preventDefault();  
//     const data = {
//               username: this.state.username,
//               password: this.state.password,
//             };
//     // this.setState({ status: "Sending" });  
//     axios({
//       method: "POST",
//       url: "http://localhost:3004/auth/login",
//       data,
//     })
//     .then((response) => {
//       if (response.data.status === "username") {
//         alert("Message Sent");
//         this.setState({ name: "" });
//       } else if (response.data.status === "failed") {
//         alert("Message wrong password, pls try again");
//         console.log(response)
//       }
//     });
//   }


  render() {
    // const posts = this.state.posts.map((post) => {
    //   return (
    //     <div>
    //         
    //     </div>
    //   );
    // });
    return (
      <div className='App'>
        <form onSubmit={this.login}>
          <p>Please Log In</p>
          <input
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.loginOnChange}
          />
          <input
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.loginOnChange}
          />
    <p> Welcome:  {this.state.username}</p>
          <input type='submit' value='login' />
        </form>
        {this.state.isActive}
        {this.state.username}
        <Link className="taskLink" to="/Home">Log In</Link>
        <Link className="taskLink" to="/Signup">Sign Up</Link>
        {/* {posts} */}
      </div>
    );
  }

}
export default Login;