import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Users } from "./users";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];

  

  // Multi-search effectively
  const search = (data) => {
    return data.filter((item) => (
      keys.some((key) => item[key].toLowerCase().includes(query))
    ))
  };

  //Not an efficient way to do multiSearch
  // const search = (data) => {
  //   return data.filter(
  //     (item) =>
  //       item.first_name.toLowerCase().includes(query) ||
  //       item.last_name.toLowerCase().includes(query) ||
  //       item.email.toLowerCase().includes(query)

  //   );
  // };

  return (
    <div className='app'>
      <input
        type='text'
        placeholder='Search...'
        className='search'
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(Users)} />
      {/* <ul className='list'>
        {Users.filter((user) => user.first_name.toLowerCase().includes(query)).map((user, index) => {
          return (
            <li className='listItem' key={index}>
              {user.first_name}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}

export default App;
