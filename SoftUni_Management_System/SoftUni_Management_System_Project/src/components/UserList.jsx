import UserListItem from "./UserListItem";

export default function UserList({
  users,
  addUserClickHandler,
  userDetailsHandler,
  userDeleteHandler,
  editUserHandler,
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
                userDeleteHandler={userDeleteHandler}
                editUserHandler={editUserHandler}
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
