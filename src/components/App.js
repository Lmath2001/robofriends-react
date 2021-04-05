import React, {useState, useEffect} from 'react';
import CardList from '../containers/CardList';
import SearchBox from '../containers/SearchBox';
import Scroll from '../containers/Scroll';
// import { robots } from './robots.js';
//Using API instead of robots.js
import './App.css';
const App=()=>{

  const [robots, setRobots]=useState([]);
  const [searchField, setSearchField]=useState('');

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      return response.json()})
    .then(users=>{
      return setRobots(users);
    })
  },[])
    
  const onSearchInput=(event)=>{
    setSearchField(event.target.value);
  }


    const filteredRobots=robots.filter((robot)=>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    // console.log(filteredRobots)
    if(robots.length===0){
      return <h1>Loading...</h1>
    }
    else{
     return(
      <div className="body-main">
        <h1>RoboFriends</h1>
        <SearchBox searchInput={onSearchInput}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
  );
} }

 


export default App;



