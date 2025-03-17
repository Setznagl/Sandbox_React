import React, { useState } from 'react'

const ManageData = () => {

    let someData = 10;
    let [number , setNumber] = useState(15);

    return (
        <div>

            <div>
                 Valor: {someData}
            </div>
            <div>
                <button onClick={ () => { someData = 15 ; console.log(someData) } }>Mudar Variável</button>
            </div>
            <div>
                Valor: {number}
            </div>
            <div>
                <button onClick={() => setNumber(number += 5)}>Mudar o state</button>
            </div>

        </div>
    )
}

export default ManageData