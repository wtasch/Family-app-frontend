
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
// import Home from './components/Home';

//import './App.css';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: ''
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

  signupOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  signup = async (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
    };
    console.log(data);

    try{
    const response = await axios.post('http://localhost:3004/auth/signup', data);
    console.log(response);
    console.log(response.data.user.username);      
    this.props.history.push("/Home") 



    }
    catch{
        alert("User Name Already Taken, Pls Try Again");
    }
 
  };

  // UserGreeting(props) {
  //   return <h1>Welcome back!</h1>;
  // }
  
  // GuestGreeting(props) {
  //   return <h1>Please sign up.</h1>;
  // }

 


  
// signup = async (e) => {
//     event.preventDefault();  
//     const data = {
//               username: this.state.username,
//               password: this.state.password,
//             };
//     // this.setState({ status: "Sending" });  
//     axios({
//       method: "POST",
//       url: "http://localhost:3004/auth/signup",
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
      <div  className='input-container' >
        
        <form  className="taskInput" onSubmit={this.signup}>
          <h3>Please Sign up</h3>
          
          <input
          className="taskInputCell"
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.signupOnChange}
          />
          <input
          className="taskInputCell"
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.signupOnChange}
          />
            <input
            className="taskInputCell"
            name='name'
            type='text'
            placeholder='name'
            value={this.state.name}
            onChange={this.signupOnChange}
          />
    <p> Welcome:  {this.state.name}</p>
          <input type='submit' value='sign up' />
          {/* <Link className="headerLink" to="/Home">Sign Up</Link> */}
        </form>
        <Link className="taskLink" to="/Home">Sign up</Link>
 
        {/* {posts} */}
      </div>
    );
  }

}
export default Signup;














// import React, { Component } from 'react';
// import { Route, Link, Switch } from 'react-router-dom';
// import axios from 'axios';
// import '../TaskList.css';

// //import './App.css';
// class SignupForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       signups: [],
//       username: '',
//       password: '',
//       email: '',
//       name: '',
//       img: '',
//       age: '',
//       isActive: false,
      
//     };
//   }

  
//   componentDidMount = () => {
//     this.getSignups();
//   };
//   getSignups = async () => {
//     const response = await axios.get('http://localhost:3004/user');
//     this.setState({
//       signups: response.data,
//     });
//   };
  
//   signupOnChange = (e) => {
//     e.preventDefault();
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   createSignup = async (e) => {
//     e.preventDefault();
//     //this.getsignups();
//     const data = {
//       username: this.state.username,
//       desc: this.state.desc,
//       firstName: this.state.firstName,
//       lastName: this.state.lastName,
//       image: this.state.image,
//       completed: this.state.completed
//     };
//     console.log(data);
//     const response = await axios.post('http://localhost:3004/signup/createUser', data);
//     console.log(response);
//     this.getSignups();
//   };

//   deleteSignup=  async (e) => {
//     e.preventDefault();  
//     const deleteSignup = await axios.delete(`http://localhost:3004/user/${e.target.id}`);
//     console.log(deleteSignup)
//     this.getSignups();
// }
//   render() {

//     return (
//       <div className='input-container'>
//         <form className="taskInput" onSubmit={this.createSignup}>
//         <h3>Add To Signup List</h3>
//           <div className="input-wrapper">
//             <p className="input-name">Quantity </p>          
//               <input
//                 name='eventId'
//                 className="taskInputCell"
//                 type='text'
//                 placeholder='How Many are Needed?'
//                 value={this.state.eventId}
//                 onChange={this.signupOnChange}
//               />
//           </div>

//           <div className="input-wrapper">
//             <p className="input-name"> Item Name </p>
//               <input
//                 name='desc'
//                 className="taskInputCell"
//                 type='text'
//                 placeholder='What do you Need?'
//                 value={this.state.desc}
//                 onChange={this.signupOnChange}
//               />
//           </div>

//           <div className="input-wrapper">
//             <p className="input-name"> Used on: </p>
//             <input
//                 name='firstName'
//                 className="taskInputCell"
//                 type='text'
//                 placeholder='Whats this used for?'
//                 value={this.state.firstName}
//                 onChange={this.signupOnChange}
//             />
//           </div>

//           <div className="input-wrapper">
//             <p className="input-name"> Purchase this form:   </p>
//             <input      
//                 name='lastName'
//                 className="taskInputCell"
//                 type='text'
//                 placeholder='Where to buy this?'
//                 value={this.state.lastName}
//                 onChange={this.signupOnChange}
//           />
//           </div>
//           <div className="input-wrapper">
//             <p className="input-name"> Picture </p>
// <input
//             name='image'
//             className="taskInputCell"
//             type='text'
//             placeholder='enter pic link here'
//             value={this.state.image}
//             onChange={this.signupOnChange}
//           />
//           </div>

//           <div className="input-wrapper">
//             <p className="input-name"> Complete? </p>
// <input
//             name='completed'
//             className="taskInputCell"
//             type='text'
//             placeholder='is this complete?'
//             value={this.state.completed}
//             onChange={this.signupOnChange}
//           />
//           </div>

//           <input className="taskLink" type='submit' value='Add to Signupping List' />
//           <Link className="taskLink" to="/SignupList">Back to Shop List</Link>
//         </form>
//         <br></br>
        
//         {/* {shops} */}
//       </div>
//     );
//   }

// }



// export default SignupForm;