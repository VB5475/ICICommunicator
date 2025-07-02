import React, { useEffect, useState } from "react";
import MainLayout2 from "./layouts/MainLayout2";
import ComposeMail2 from "./pages/ComposeMail2";
import EmailListPreview from "./components/EmailListPreview";
import Page1 from "./pages/Page1";
import Loginpage from "./pages/Loginpage";
function App() {

  const [showHome, setShowHome] = useState(false)
  useEffect(() => {
    const loginObj = JSON.parse(localStorage.getItem("loginData")) || {}
    if (loginObj && loginObj?.id === "devenshah" && loginObj?.password === "d123456") {
      setShowHome(true)
    }

  }, [])
  return (<>
    {showHome ? <Page1 setShowHome={setShowHome} /> : <Loginpage setShowHome={setShowHome} />}
    {/* <Page1 /> */}
  </>

  );
}

export default App;