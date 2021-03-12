import React from 'react';


const Home = (props) => {
    // const randomHorse = await axios.get("https://source.unsplash.com/1600x900/?horses");

    
  
  return (
    <div>
      
      <img src="https://source.unsplash.com/550x225/?horses&i=1" />
      
      <button onclick="Home()">Click for new Horse Pic</button>

    </div>
  )
}

export default Home;