import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../Header.css';

//mport Search from './Search';

const Header = (props) => {
  return (  
<div>
    <header>
      
  
      <nav>
        <div className="headerNav">
          <div className="logoTitleHeader">
            <img className="logoNav" src="https://i.imgur.com/nzjlYmo.jpg"></img>
            <div className="navTitle">
              <h1 className="title1">Family </h1>
              <h1 className="title2">Fun App</h1>
            </div>
          </div>
          <div className="navBar">
          <Link className="headerLink" to="/Home">Home</Link> |
         
          
          {/* <Link className="headerLink" to="/users">Users</Link> */}
          
          {/* <Search /> */}
          {/* <Link className="headerLink" to="/TaskForm">Add Task</Link> */}
          <Link className="headerLink" to="/TaskList">Task List</Link> |
          {/* <Link className="headerLink" to="/profile">Kids Profile</Link> | */}
   
          <Link className="headerLink" to="/Parent">Family Posts </Link> |
          {/* <Link className="headerLink" to="/ParentForm">Add Post</Link> */}
          {/* <Link className="headerLink" to="/EventForm">Add Event</Link> */}
          <Link className="headerLink" to="/EventList">Event List</Link> |
          <Link className="headerLink" to="/PartList">Part List</Link> |
          <Link className="headerLink" to="/ShopList">Shopping List</Link> |
          {/* <Link className="headerLink" to="/ShopForm">Add Item to Shopping List</Link> */}
          {/* <Link className="headerLink" to="/PartForm">Add Part</Link> */}
           {/* <Link className="headerLink" to="/users">Users</Link> */}
          
          <Link className="headerLink" to="/KidsPage">Random Horse Pics</Link>  |
          <Link className="headerLink" to="/contactForm">Contact Us</Link>  |
          <Link className="headerLink" to="/">LogIn</Link>
        </div>
        </div>
        <div className="headerBottomBorder"></div>
      </nav>
    {/* <div>
      <img className="logo" src="https://i.imgur.com/zJg4M4I.png?1"></img>
    </div>
    <div>
      <div className="title">
        <h1 className="title1">Couch </h1>
        <h1 className="title2">Sloth</h1>
        <h1 className="title1"> Movie App</h1>
      </div>
    </div> */}
    
        
</header>
  </div>
  )
}

export default Header;



/*




  console.log(props.movieData);
  


    <div>
          
            {props.movieData.map(movieData => (
          <div className="headerPoster">
            
            <img className="headerPost" scr="{movieData.Poster}"></img>
            <h3>{movieData.Title}  </h3>
          </div>

          ))}
    </div>

    */