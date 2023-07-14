import React from "react";
import Header from "./components/Header";
import HomeTabs from "./components/HomeTabs";
import "./App.css";
import "./index.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message);
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <HomeTabs />
    </div>
  );
}

export default App;
