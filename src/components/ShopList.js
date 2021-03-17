import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';

//import './App.css';
class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: [],
      eventId: '',
      desc: '',
      firstName: '',
      lastName: '',
      image: '',
      completed: '',
      
    };
  }

  
  componentDidMount = () => {
    this.getShops();
  };
  getShops = async () => {
    const response = await axios.get('http://localhost:3004/shop');
    this.setState({
        shops: response.data,
    });
  };
  shopOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createShop = async (e) => {
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
    const response = await axios.post('http://localhost:3004/shop/createShop', data);
    console.log(response);
    this.getShops();
  };

  deleteShop=  async (e) => {
    e.preventDefault();  
    const deleteShop = await axios.delete(`http://localhost:3004/shop/${e.target.id}`);
    console.log(deleteShop)
    this.getShops();
}
  render() { 
    // return(
    // )
    const shops = this.state.shops.map((shop) => {
      return (
        <div>
          
        <div className="task-wrapper" key="firstName">
         
          <h3 className="showText">Item Description: {shop.desc}  | Qty: {shop.eventId}</h3>
          <h3 className="showText">Purchase Item From: {shop.lastName}</h3>
          <h3 className="showText"> Part is used for:  {shop.firstName}</h3>
          {/* <img className="taskImg" src={shop.image} alt='No Picture added to this shop' /> */}
          <p>
            {/* some texts here */}
          </p>
            <div>
            <button className="taskLink" id={shop.id} onClick={this.deleteShop}>Complete</button>
            <button className="delButton" id={shop.id} onClick={this.deleteShop}>delete</button>
            <Link className="taskLink" to="/ShopForm">Add to Shopping List</Link></div>
          </div>
        </div>
      );
    });
    return (
      <div className='App'>
         <h1>Shopping List</h1>
        

       {/* <Link className="headerLink" to="/ShopList">Shopping List</Link> */}
        {shops}
      </div>
    );
  }

}




export default ShopList;