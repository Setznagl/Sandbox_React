import React from 'react';

//export const PropDestructuring = (props)
export const PropDestructuring = ({brand , km, color}) => {
  return (
    <section>
      <ul>
        <li>Brand: {brand}</li>
        <li>KM: {km}</li>
        <li>Color: {color}</li>
      </ul>
    </section>
  );
};


export default PropDestructuring;