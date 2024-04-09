import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(json => setUsers(json))
    }, []);
    return (
        <div>
            {users.map(user => {
                return (
                    <li key={user.id}>{user.name} - {user.email}</li>
                )
            })}
        </div>
    )
}

export default Users;