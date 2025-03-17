import React, { useState } from 'react';


export const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"])
    const [users, setUsers] = useState(
        [
            {
                id: 1,
                name: "Jonas",
                age: 12
            },
            {
                id: 2,
                name: "Mathias",
                age: 34
            },
            {
                id: 3,
                name: "Marceline",
                age: 27
            }
        ]
    )
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    }

    return (
        <section>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user, id) => (
                    <li key={id}>{user.id} , {user.name} , {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random!</button>
        </section>
    );
};


export default ListRender;