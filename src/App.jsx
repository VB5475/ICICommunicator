import React, { useState } from "react";
import MainLayout2 from "./layouts/MainLayout2";
import ComposeMail2 from "./pages/ComposeMail2";
import EmailListPreview from "./components/EmailListPreview";
import MainLayout from "./layout/MainLayout";
import ComposeMail from "./pages/ComposeMail";

function App() {
  const [showCompose, setShowCompose] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-gray-50">
      <MainLayout2 onCompose={() => setShowCompose(true)} />
      <div className="flex-1 flex">
        <EmailListPreview />
      </div>
      {showCompose && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-full h-full sm:h-auto sm:w-auto flex items-center justify-center">
              <div className="w-full h-full max-w-full sm:max-w-md md:max-w-xl bg-white rounded-lg shadow-2xl flex flex-col">
                <ComposeMail2 open={showCompose} onClose={() => setShowCompose(false)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;