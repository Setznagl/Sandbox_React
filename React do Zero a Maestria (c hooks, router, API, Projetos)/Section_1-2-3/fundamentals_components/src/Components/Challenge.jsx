import React, { useState } from 'react'

const Challenge = () => {

    let [sum , setState] = useState(0);

    let numbers = {
        number1: 0,
        number2: 0
    }

    function sumRandomFuncion() {
        numbers.number1 = (Math.random() * 100).toFixed(2)
        numbers.number2 = (Math.random() * 100).toFixed(2)
        setState(sum = (numbers.number1 + numbers.number2))
        console.log(sum);
    }

    return (
        <div>
            <div>
                Challenge
            </div>
            <div>
                <button onClick={sumRandomFuncion}></button>
            </div>
            <div>
                Initial value is: 0 <br></br>
                End value is: {sum}
            </div>
        </div>
    )
}

export default Challenge