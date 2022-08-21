// import Header from "./components/Header";
// import ContentSlot1 from "./components/ContentSlot1";
// import ContentSlot2 from "./components/ContentSlot2";
// import ContentSlot3 from "./components/ContentSlot3";
// import ContentSlot4 from "./components/ContentSlot4";
// import ContentSlot5 from "./components/ContentSlot5";
// import ScrollUp from "./components/ScrollUp";
// import Footer from "./components/Footer";
import db from "./firebase.config";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = db.collection("product-data");
    const dataResponse = await response.get();
    dataResponse.docs.forEach((item) => {
      setData([...data, item.data()]);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <Header />   */}
      <main className="main">
        {/* <ContentSlot1 />
        <ContentSlot2 />
        <ContentSlot3 />
        <ContentSlot4 />
        <ContentSlot5 /> */}
      </main>
      {/* <Footer />
      <ScrollUp /> */}
    </>
  );
}

export default App;
