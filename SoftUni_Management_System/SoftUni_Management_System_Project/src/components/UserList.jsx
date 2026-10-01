import UserListItem from "./UserListItem";

export default function UserList({ users }) {
  return (
    <>
      <div className="table-wrapper">
        <table className="table">
          <thead></thead>
          <tbody>
            {users.map((user) => (
              <UserListItem key={user.id} {...user} />
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn-add btn">Add new user</button>
    </>
  );
}
