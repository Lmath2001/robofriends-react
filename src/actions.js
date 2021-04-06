import { SEARCH_FIELD,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_RESOLVED,
        REQUEST_ROBOTS_REJECTED
} from './constants';


export const setSearchField=(text)=>{
  return({
    type:SEARCH_FIELD,
    payload:text
  })
}

export const setRobotsRequest=()=>(dispatch)=>{
  dispatch({ type: REQUEST_ROBOTS_PENDING})
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>{
  return response.json()})
  .then((data)=>dispatch({type:REQUEST_ROBOTS_RESOLVED,payload:data}))
  .catch((error)=>dispatch({type:REQUEST_ROBOTS_REJECTED,payload:error}))
}