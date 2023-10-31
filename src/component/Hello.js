import { useState } from "react";
import UserName from "./UserName";

export default function Hello(props) {
  const [name, setName] = useState("Mike");
  const [age, setAge] = useState(props.age);

  // function changeName() {
  //   setName(name === "Mike" ? "Jane" : "Mike");
  // }

  return (
    <div>
      <h1>state</h1>
      <h2>
        {name}({age})
      </h2>
      <UserName name={name} />
      {/* <button onClick={changeName}>Change</button> */}
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
          setAge(age + 1);
        }}
      >
        Change
      </button>
    </div>
  );
}
