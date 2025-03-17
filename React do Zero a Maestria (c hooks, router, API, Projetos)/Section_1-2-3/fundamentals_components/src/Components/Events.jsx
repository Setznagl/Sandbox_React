import React from 'react'

const Events = () => {

  const HandleClick = (e) => {
    alert("Ativou o evento")
    console.log(e);
  }

  return (
    <div>
        <div>
            <button onClick={HandleClick}>Clique aqui!</button>
        </div>
    </div>
  )

};

export default Events