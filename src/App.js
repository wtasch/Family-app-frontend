import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

import Profile from './components/Profile';
import KidsPage from './components/KidsPage';
import Parent from './components/Parent';
import ParentForm from './components/ParentForm';
import Signup from './components/Signup';
import Login from './components/Login';
import TaskList from './components/TaskList';
import TaskEdit from './components/TaskEdit';
import TaskForm from './components/TaskForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import PartList from './components/PartList';
import PartForm from './components/PartForm';
import ShopList from './components/ShopList';
import ShopForm from './components/ShopForm';
import ContactForm from './components/ContactForm';
import User from './components/User';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "Brandi",
        username: "mom",
        image: "https://i.imgur.com/dShEQw5.jpg",
        kidList: [],
        tasks: [],
              },
      apiDataLoaded: false,
      potentialKids: [],
      horses: [],
    }
  }

  componentDidMount = async () => {
    const randomOne = await axios.get("https://randomuser.me/api/");
    const randomTwo = await axios.get("https://randomuser.me/api/");
    const randomThree = await axios.get("https://randomuser.me/api/");
    const randomFour = await axios.get("https://randomuser.me/api/");
    const randomFive = await axios.get("https://randomuser.me/api/");
    const response = await axios.get ('http://localhost:3004/post/all');
    const horsePic = await axios.get ('https://source.unsplash.com/550x225/?horses&i=0');
    const kids = [
      randomOne.data.results[0],
      randomTwo.data.results[0],
      randomThree.data.results[0],
      randomFour.data.results[0],
      randomFive.data.results[0]
    ];
    this.setState({
      potentialKids: kids,
      horses: horsePic,
      //
      apiDataLoaded: true
    })
   // console.log(response)
   // console.log("horse pic" + horsePic)
  }
  

  addKid = (newKid) => {
    const currentKids = this.state.user;
    currentKids.kidList.push(newKid);

    const potentialKids = this.state.potentialKids;
    const newPotentialKids= potentialKids.filter(kid => {
      return newKid.login.uuid !== kid.login.uuid
    })
  
    // reset = (newKid) => {
    //   const currentKids = this.state.user;
    //   currentKids.kidList.push(newKid);
  
    //   const potentialKids = this.state.potentialKids;
    //   const newPotentialKids= potentialKids.filter(kid => {
    //     return newKid.login.uuid !== kid.login.uuid
    //   })

  this.setState({ 
    user: currentKids,
    potentialKids: newPotentialKids
  })
}
  render() {

  
    return (

      <div className="App">
        <Header />
        
        <div>
          {/* <ShopList /> */}
          {/* <PartList /> */}
         {/* <EventList /> */}
          {/* <TaskList /> */}
          {/* <Signup /> */}
          {/* <Parent />  */}
          {/* <ContactForm/> */}
          
          
        </div>
        {/* <nav>
            <Link to="/profile">Kids Profile</Link>
            <Link to="/users">Users</Link>
        </nav>
          <h1>Family App</h1> */}
          {/* <Switch> */}

          <Route exact path="/Home" render={() => (
            <Home />
          )} />


          <Route exact path="/" render={(routerProps) => (
          <Login  {...routerProps}   />
         )} /> 



          <Route path="/Signup" render={(routerProps) => (
          <Signup  {...routerProps}   />
         )} /> 

          <Route path="/User" render={() => (
          <User     />
         )} /> 
  


          <Route path="/contactform" render={() => (
            <ContactForm />
          )} />


          <Route path="/profile" render={() => (
            <Profile user={this.state.user} />
          )} />

          <Route path="/EventList" render={() => (
            <EventList />
          )} />

          <Route path="/EventForm" render={() => (
          <EventForm
  
          />
         )} /> 


          <Route path="/TaskList" render={() => (
          <TaskList

          />
         )} /> 

        <Route path="/TaskForm" render={() => (
          <TaskForm

          />
         )} /> 

        <Route path="/TaskEdit/:id" render={(routerProps) => (
          <TaskEdit {...routerProps}

          />
         )} /> 


        <Route path="/ShopList" render={() => (
          <ShopList

          />
         )} /> 

        <Route path="/ShopForm" render={() => (
          <ShopForm

          />
         )} /> 


        <Route path="/PartList" render={() => (
          <PartList
 
          />
         )} /> 

          <Route path="/PartForm" render={() => (
          <PartForm

          />
         )} /> 
        
           <Route path="/Parent" render={() => (
          <Parent

           />
        )} />

          <Route path="/ParentForm" render={() => (
          <ParentForm

          />
         )} /> 

          <Route path="/KidsPage" render={() => (
          <KidsPage
           potentialKids={this.state.potentialKids}
           addKid={this.addKid} />
        )} />
      {/* </Switch> */}

      </div>
    );
  }
}
export default App;







