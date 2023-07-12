import React, { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        )
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            setUserData(json);
          });
      } catch {
        console.log("Error");
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      {userData && <pre>{JSON.stringify(userData, null, 2)}</pre>}
    </div>
  );
}
export default App;
