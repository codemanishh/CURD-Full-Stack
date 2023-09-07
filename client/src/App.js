import "./App.css";
import Form from "./components/Form";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="App">
      {/* Form Component */}
      <Form />
      {/* All users list */}
      <UsersList />
    </div>
  );
}

export default App;