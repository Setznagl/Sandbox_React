import React from 'react';


export const StateLiftHandler = ({ handleMessage }) => {
    const messages = ["Hello!" , "You're welcome!"]

    return (
        <section>
            <button onClick={() => handleMessage(messages[0])}>1</button>
            <button onClick={() => handleMessage(messages[1])}>2</button>
        </section>
    );
};


export default StateLiftHandler;