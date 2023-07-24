import React from "react";
import '../globals.css'; // Import the globals.css file
import Header from "../components/Header";
import HomeTabs from "../components/HomeTabs";

const Home = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <HomeTabs />
    </div>
  );
};

export default Home;
