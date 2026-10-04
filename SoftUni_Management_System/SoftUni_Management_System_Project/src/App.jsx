import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/UserList";
import UserDeleteModal from "./components/UserDeleteModal";
import UserSearch from "./components/UserSearch";
import Pagination from "./components/Pagination";
import { useEffect, useState } from "react";
import SaveUserModal from "./components/SaveUserModal";

const baseUrl = "https://tdyhrjbjvmtyyxgysxss.supabase.co/rest/v1/users";
const apiKey = "sb_publishable_tBbp2YcHXaaEzqY072-9Ng_q7ay_OVp";

function App() {
  const [users, setUsers] = useState([]);
  const [showSaveUserModal, setShowUserModal] = useState(false);

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

  return (
    <>
      <>
        <Header />

        <main className="main">
          <section className="card users-container">
            <UserSearch />
            <UserList users={users} addUserClickHandler={addUserClickHandler} />
            {showSaveUserModal && (
              <SaveUserModal
                addUserCloseHandler={addUserCloseHandler}
                onSubmit={submitUserHandler}
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
