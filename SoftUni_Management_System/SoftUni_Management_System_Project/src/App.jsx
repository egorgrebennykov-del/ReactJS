import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/UserList";
import UserDeleteModal from "./components/UserDeleteModal";
import UserSearch from "./components/UserSearch";
import Pagination from "./components/Pagination";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  console.log(users);
  useEffect(() => {
    fetch("https://tdyhrjbjvmtyyxgysxss.supabase.co/rest/v1/users", {
      headers: {
        apikey: "sb_publishable_tBbp2YcHXaaEzqY072-9Ng_q7ay_OVp",
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <>
      <>
        <Header />

        <main className="main">
          <section className="card users-container">
            <UserSearch />
            <UserList users={users} />
            <Pagination />
          </section>
        </main>

        <Footer />
      </>
    </>
  );
}

export default App;
