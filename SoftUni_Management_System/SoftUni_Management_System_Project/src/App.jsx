import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/UserList";
import UserDeleteModal from "./components/UserDeleteModal";
import UserSearch from "./components/UserSearch";
import Pagination from "./components/Pagination";
import { useEffect, useState } from "react";
import SaveUserModal from "./components/SaveUserModal";
import UserDetails from "./components/UserDetails";

const baseUrl = "https://tdyhrjbjvmtyyxgysxss.supabase.co/rest/v1/users";
const apiKey = "sb_publishable_tBbp2YcHXaaEzqY072-9Ng_q7ay_OVp";

function App() {
  const [users, setUsers] = useState([]);
  const [showSaveUserModal, setShowUserModal] = useState(false);
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeleteUser, setShowDeleteUser] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const addUserClickHandler = () => {
    setShowUserModal(true);
  };

  const addUserCloseHandler = () => {
    setShowUserModal(false);
  };

  const submitUserHandler = async (user) => {
    try {
      const res = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: apiKey,
        },
        body: JSON.stringify(user),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const updatedUsers = await fetchUsers();

      setUsers(updatedUsers);
      setShowUserModal(false);
    } catch (error) {
      alert(`Error adding user: ${error.message}`);
    }
  };

  const userDetailsHandler = (userId) => {
    const user = users.find((u) => u.id === userId);

    setSelectedUser(user);
    setShowUserDetailsModal(true);
  };

  const userDetailsCloseHandler = () => {
    setShowUserDetailsModal(false);
  };

  const userDeleteHandler = (userId) => {
    const user = users.find((u) => u.id === userId);

    setSelectedUser(user);
    setShowDeleteUser(true);
  };

  const userDeleteCloseHandler = () => {
    setShowDeleteUser(false);
  };

  const editUserHandler = (userId) => {
    const user = users.find((u) => u.id === userId);

    setSelectedUser(user);
    setShowEditUser(true);
  };

  const editUserCloseHandler = () => {
    setShowEditUser(false);
  };

  const updateUserHandler = async (user) => {
    try {
      const res = await fetch(`${baseUrl}?id=eq.${selectedUser.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          apikey: apiKey,
        },
        body: JSON.stringify(user),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const updatedUsers = await fetchUsers();

      setUsers(updatedUsers);
      setShowEditUser(false);
    } catch (error) {
      alert(`Error updating user: ${error.message}`);
    }
  };

  const deleteUser = async () => {
    try {
      const res = await fetch(`${baseUrl}?id=eq.${selectedUser.id}`, {
        method: "DELETE",
        headers: {
          apikey: apiKey,
        },
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const updatedUsers = await fetchUsers();

      setUsers(updatedUsers);
      setShowDeleteUser(false);
    } catch (error) {
      alert(`Error deleting user: ${error.message}`);
    }
  };

  return (
    <>
      <>
        <Header />

        <main className="main">
          <section className="card users-container">
            <UserSearch />
            <UserList
              users={users}
              addUserClickHandler={addUserClickHandler}
              userDetailsHandler={userDetailsHandler}
              userDeleteHandler={userDeleteHandler}
              editUserHandler={editUserHandler}
            />
            {showUserDetailsModal && (
              <UserDetails
                userInfo={selectedUser}
                onClose={userDetailsCloseHandler}
              />
            )}
            {showSaveUserModal && (
              <SaveUserModal
                addUserCloseHandler={addUserCloseHandler}
                onSubmit={submitUserHandler}
              />
            )}
            {showDeleteUser && (
              <UserDeleteModal
                userDeleteCloseHandler={userDeleteCloseHandler}
                onDelete={deleteUser}
              />
            )}
            {showEditUser && (
              <SaveUserModal
                addUserCloseHandler={editUserCloseHandler}
                onSubmit={updateUserHandler}
                userInfo={selectedUser}
                edit
              />
            )}
            <Pagination />
          </section>
        </main>

        <Footer />
      </>
    </>
  );
}

async function fetchUsers() {
  const response = await fetch(baseUrl, {
    headers: {
      apikey: apiKey,
    },
  });

  const data = await response.json();

  return data;
}

export default App;
