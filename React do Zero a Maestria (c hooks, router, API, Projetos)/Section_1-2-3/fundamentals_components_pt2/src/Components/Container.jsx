import React from 'react';


export const Container = ( {children , functions} ) => {
  return (
    <section>
      <h2>This is a heading!</h2>
      {children} {/*//Special tag, consider everything attached into the Container tag */}
      <button onClick={functions}>Execute father function!</button>
    </section>
  );
};


export default Container;