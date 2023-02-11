import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import UserInputForm from "./components/UserInputForm";
import { useState } from "react";

function App() {
  const dummy_users = [
    {
      id: "1a",
      name: "Sky",
      age: 22,
    },
    {
      id: "1b",
      name: "John",
      age: 35,
    },
    {
      id: "1c",
      name: "Ghost",
      age: 41,
    }
  ];

  const [users, setUsers] = useState([]);

  const onSubmitUserHandler = (newUser) => {
    setUsers((prevUsers) => {return [newUser, ...prevUsers]});
  };

  const onDeleteUserHandler = (idToDelete) => {
    setUsers((prevUsers) => { return prevUsers.filter(currentUser => currentUser.id !== idToDelete) });
  };

  return (
    <div className="App">
    <UserInputForm formSubmitHandler={onSubmitUserHandler} />
      {users.map((user) => (
        <User key={user.id} userToAdd={user} deleteUserById={onDeleteUserHandler}/>
      ))}
    </div>
  );
}

export default App;
