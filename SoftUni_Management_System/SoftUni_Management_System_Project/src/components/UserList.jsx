import UserListItem from "./UserListItem";

export default function UserList({
  users,
  addUserClickHandler,
  userDetailsHandler,
}) {
  return (
    <>
      <div className="table-wrapper">
        <table className="table">
          <thead></thead>
          <tbody>
            {users.map((user) => (
              <UserListItem
                key={user.id}
                userDetailsHandler={userDetailsHandler}
                {...user}
              />
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn-add btn" onClick={addUserClickHandler}>
        Add new user
      </button>
    </>
  );
}
