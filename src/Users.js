import {useEffect, useState} from "react";

function Users( { onSelectUser } ) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setUsers(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    return (
        <div>
            <h1 style={{color: "#ff0000"}}>Benutzer</h1>
            <table style={{width: "100%"}}>

                <tr>
                    <th>ID</th>
                    <th>Email</th>
                </tr>
                {users.map(user => (
                    <tr onClick={() => { onSelectUser(user)}}>
                        <td>
                            {user.id}
                        </td>
                        <td>
                            {user.email}
                        </td>
                    </tr>
                ))}


            </table>
        </div>
    );
}

export default Users;



