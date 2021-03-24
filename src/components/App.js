import React from 'react';
import CardList from '../containers/CardList';
import SearchBox from '../containers/SearchBox';
import Scroll from '../containers/Scroll';
// import { robots } from './robots.js';
//Using API instead of robots.js
import './App.css';
class App extends React.Component{

  constructor(){
    super();
    this.state={
      robots:[],
      searchField:'',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      return response.json()})
    .then(users=>{
      return this.setState({robots:users});
    })
  }

  onSearchInput=(event)=>{
    this.setState({searchField:event.target.value})
  }


  render(){
     const filteredRobots=this.state.robots.filter((robot)=>{
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    // console.log(filteredRobots)
    if(this.state.robots.length===0){
      return <h1>Loading...</h1>
    }
    else{
     return(
      <div className="body-main">
        <h1>RoboFriends</h1>
        <SearchBox searchInput={this.onSearchInput}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
  );
     }

  }
}
 


export default App;



