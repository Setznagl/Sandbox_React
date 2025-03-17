import React, { useState } from 'react';


export const ConditionalRender = () => {
    const [x] = useState(true);

    return (
        <section>
            <h1>It will be on the screen?</h1>
            <div>
                {x && <p>conditional is true, yes!</p>}
            </div>
            <h1>Conditional is false?</h1>
            <div>
                {!x && <p>Yes, conditional is false!</p>}
            </div>
            <h1>How is conditional now? Ternary operator</h1>
            <div>
                {x === true ? <p>Its true!</p> : <p>Its false!</p>}
            </div>
        </section>
    );
};


export default ConditionalRender;