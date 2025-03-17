import React from 'react';
import { useState } from 'react';


export const MyForm = ( {user} ) => {
    const [nameState, setName] = useState(user ? user.name : '')
    const [emailState, setEmail] = useState(user ? user.email : '')
    const [roleState, setRole] = useState(user ? user.role : '0')

    const handleName = (e) => {
        setName(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nameState , emailState , roleState)
        setName("")
        setEmail("")
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome: </label>
                <input
                    type="text"
                    name="name"
                    placeholder='Text a name!'
                    onChange={handleName}
                    value={nameState}
                />
                <label htmlFor="email">E-mail: </label>
                <input
                    type="text"
                    name="email"
                    placeholder='Text an email!'
                    onChange={(e)=>{setEmail(e.target.value)}}
                    value={emailState}
                />
                <label>
                    <select name="role" required onChange={(e) => setRole(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </section>
    );
};


export default MyForm;