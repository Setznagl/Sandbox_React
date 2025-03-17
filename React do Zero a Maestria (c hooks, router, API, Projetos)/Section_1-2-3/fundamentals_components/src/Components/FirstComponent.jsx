import React from 'react';
import MyComponent from './MyComponent';

const FirstComponent = () => {

  const name = "FirstComponent!";

  const object = {
    name: "Oester",
    age: 23
  }

  return (
    <div> 
    I'm the {name}, developed by {object.name} who is {object.age} years old.
    <MyComponent/>
    </div>
  )
}

export default FirstComponent