import React, { useEffect, useState } from "react";

function App() {
  async function getData(setData) {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      return setData(await response.json());
    } catch (error) {
      console.log("Error:", error);
    }
  }
  const [data, setData] = useState(null);

  useEffect(() => {
    getData(setData);
  }, []);

  return (
    <>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}

export default App;
