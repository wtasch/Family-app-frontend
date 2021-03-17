import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../Home.css';

const Home = (props) => {
    // const randomHorse = await axios.get("https://source.unsplash.com/1600x900/?horses");

    
  
  return (
    <div className="home-back">
      <h1>Welcome to the Family App</h1>

      <div className="homeLink-wrapper">
      <Link className="homeLink" to="/TaskList">Task List</Link>
          {/* <Link className="homeLink" to="/profile">Kids Profile</Link> */}
          <Link className="homeLink" to="/KidsPage">Horse Pic</Link>
          <Link className="homeLink" to="/Parent">Family Post</Link>
          {/* <Link className="homeLink" to="/ParentForm">Add Post</Link> */}
          {/* <Link className="homeLink" to="/EventForm">Add Event</Link> */}
          <Link className="homeLink" to="/EventList">Event List</Link>
          <Link className="homeLink" to="/PartList">Part List</Link>
          <Link className="homeLink" to="/ShopList">Shopping List</Link>
          {/* <Link className="homeLink" to="/PartForm">Add Part</Link> */}
          {/* <Link className="homeLink" to="/users">Users</Link>
          <Link className="homeLink" to="/Login">LogIn</Link> */}
      </div>   
      {/* <img src="https://source.unsplash.com/550x225/?horses&i=1" /> */}
{/*       
      <button onClick="Home()">Click for new Horse Pic</button> */}

    </div>
  )
}

export default Home;