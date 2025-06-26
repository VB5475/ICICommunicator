import React, { useState } from "react";
import MainLayout2 from "./layouts/MainLayout2";
import ComposeMail2 from "./pages/ComposeMail2";
import EmailListPreview from "./components/EmailListPreview";
import Page1 from "./pages/Page1";

function App() {
  const [showCompose, setShowCompose] = useState(false);

  return (
    <Page1 />
  );
}

export default App;