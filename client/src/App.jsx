import { useEffect, useState } from "react";
import User from "./User";
import axios from "axios";
function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const addUser = async () => {
    const user = {
      name: name,
      pwd: pwd,
    };
    const response = await axios.post("http://localhost:3001/user", user);
    console.log(response.data);
    setList([...list, user]);
    setName("");
    setPwd("");
  };

  const deleteUser = async (name) => {
    const response = await axios.delete(`http://localhost:3001/user/${name}`);
    console.log(response.data);
    setList(list.filter((user) => user.name !== name));
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:3001/users");
      setList(response.data);
    };
    fetchUsers();
  });

  return (
    <>
      <div>
        <div className="adduser">
          <input
            type="text"
            placeholder="Enter username : "
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          
          <input
            type="password"
            placeholder="Enter password : "
            onChange={(e) => {
              setPwd(e.target.value);
            }}
            value={pwd}
          />
          
          <button onClick={addUser}>Add User</button>
        </div>
        <div className="display">
          {list.map((user) => {
            return (
              <User name={user.name} pwd={user.pwd} deleteUser={deleteUser} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
