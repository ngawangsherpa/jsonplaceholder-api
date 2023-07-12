import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        )
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            setUserData(json);
          });
      } catch {
        console.log("Error fetching userData");
      }
    };

    fetchId();
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      {userData && <pre>{JSON.stringify(userData, null, 2)}</pre>}
    </div>
  );
}

export default App;
