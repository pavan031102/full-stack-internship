import React from "react";

function User(props) {
  return (
    <div style={{ margin: 10, backgroundColor: "seashell" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>username : {props.name}</p>
        <p>password : {props.pwd}</p>
      </div>
      <button onClick={() => props.deleteUser(props.name)}>delete</button>
      {/* <button onClick={() => props.deleteUser(props.name)}>update</button> */}
    </div>
  );
}

export default User;
