import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';


//import './App.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      isActive: ''
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



//   componentDidMount = () => {
//     this.getProfile();
//   };
//   getProfile = async (e) => {
//     const response = await axios.get(`http://localhost:3004/user/${e.target.id}`);
//     this.setState({
//       posts: response.data,
//     });
//   };

  loginOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = async (e) => {
    e.preventDefault();
    
    const data = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      isActive: this.state.isActive
    };
    console.log(data);

    try{
    const response = await axios.post('http://localhost:3004/auth/login', data);
    console.log(response);
    console.log(response.data.user.username); 
    console.log(response.data.user.isActive);
    this.props.history.push("/Home")
      

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

    // if(this.state.isActive=== true) {
        // return (
       
    //     <div>
    //  <p>{this.state.username}</p>
    //     </div>
    //     )
    // }
    return (
      <div  className='input-container' >

       
        <form  className="taskInput" onSubmit={this.login}>
          <h3>Please Log In</h3>
          <div className="input-wrapper">
          <input
           className="taskInputCell"
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.loginOnChange}
          />
          <input
           className="taskInputCell"
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.loginOnChange}
          />
       </div>
          <Link className="taskLink" to="/Signup">Sign Up</Link>
          <input className="taskLink" type='submit'  value='Login' />
        </form>
        
         {/* <Link className="taskLink" to="/Home">Log In</Link> */}
     
        {/* {posts} */}
      </div>
    );
  }

}
export default Login;