import { useState, useEffect } from "react";
import DataRendering from "./DataRendering";

export default function DataRenderingPractice() {
    const [users, setUsers] = useState([
        { user: 'George', active: false, age: 34 },
        { user: 'Hagop', active: true, age: 36 },
        { user: 'Elizabeth', active: true, age: 40 }
    ]);

    return (
        <>
            <h1>DataRenderingPractice component</h1>
            <h3>This is the user object that we're dealing with</h3>
            <p>{`{ user: 'George', active: false, age: 34 },`}</p>
            <p>{`{ user: 'Hagop', active: true, age: 36 },`}</p>
            <p>{`{ user: 'Elizabeth', active: true, age: 40 }`}</p>
            <br />

            <h4>If statement</h4>
            <p>{users[2].user} is {users[2].active && <em>Active</em>}</p>

            <h4>If / Else Statement using Ternary Operation</h4>
            <p>{users[0].user} is {users[0].active ? <em>Active</em> : <em>Inactive</em>}</p>

            <h4>{`Array.map() (Iteration)`}</h4>
            <table className="borderOne">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Active</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((theUser, index) => {
                            return(
                                <tr key={index}>
                                    <td>{theUser?.user}</td>
                                    {/* <td>{theUser?.active ? 'Active' : 'Inactive'}</td> */}
                                    <td>{theUser?.active ? <strong>True</strong> : <strong>False</strong>}</td>
                                    <td>{theUser?.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}