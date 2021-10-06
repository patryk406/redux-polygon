import UsersListElement from "./UserListElement";

const UsersList = ({users}) => {
    return (
        <div>
            {users.map(user=>(
                <UsersListElement key={user.id}user={user}/>
            ))}
        </div>
    )
}

export default UsersList
