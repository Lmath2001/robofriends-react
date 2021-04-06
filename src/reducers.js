import { SEARCH_FIELD,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_RESOLVED,
        REQUEST_ROBOTS_REJECTED
} from './constants';

const initialStateSearch={
  searchField:''
}

export const searchRobots=(state=initialStateSearch,action={})=>{
  switch(action.type){
    case SEARCH_FIELD :
      return Object.assign({},state,{searchField:action.payload});
    default:
      return state;
  }
}

const initialStateRobots={
  isPending:false,
  robots:[],
  error:''
}

export const requestRobots=(state=initialStateRobots,action={})=>{
  switch(action.type){
    case REQUEST_ROBOTS_PENDING :
      return Object.assign({},state,{isPending:true});
    case REQUEST_ROBOTS_RESOLVED :
      return Object.assign({},state,{isPending:false,robots:action.payload});
    case REQUEST_ROBOTS_REJECTED :
      return Object.assign({},state,{isPending:false,error:action.payload})
    default:
      return state;
  }
}