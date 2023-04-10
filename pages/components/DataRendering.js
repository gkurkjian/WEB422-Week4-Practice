import { useState, useEffect } from "react"

export default function DataRendering() {
    const [users, setUsers] = useState([
        { user: 'fred', active: false, age: 40 },
        { user: 'pebbles', active: false, age: 1 },
        { user: 'barney', active: true, age: 36 },
    ]);

    return (
        <>
            <h1>DataRendering component</h1> <br />

            {/* if statement */}
            <p>{users[2].user} is {users[2].active && <em>Active</em>}</p>

            {/* if / else statement */}
            <p>{users[0].user} is {users[0].active ? <em>Active</em> : <em>Inactive</em>}</p>

            <table className="borderOne">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Active</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.user}</td>
                                {/* We can use either in Active below */}
                                {/* <td>{user.active ? 'Active' : 'Inactive'}</td>  */}
                                <td>{user.active ? <strong>true</strong> : <strong>false</strong>}</td>
                                <td>{user.age}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
