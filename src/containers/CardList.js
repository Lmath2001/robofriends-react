import React from 'react';
import Card from './Card';

const CardList=(props)=>{
  const {robots}=props;
  const cardLoop=robots.map((element,index)=>{
    return <Card key={index} id={element.id} name={robots[index].name} email={robots[index].email} /> 
  })
  return(
    <div>
      {cardLoop}
    </div>
  );
}

export default CardList;







