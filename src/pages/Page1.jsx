import React, { useState } from "react";
import MainLayout2 from "@/layouts/MainLayout2";
import ComposeMail2 from "./ComposeMail2";
import FeatureList from "@/components/FeatureList";
import EmailListPreview from "@/components/EmailListPreview";

function Page1({ setShowHome }) {
    const [showCompose, setShowCompose] = useState(false);

    const user = {
        name: "Deven Shah",
        role: "MD",
        avatar: "",
        email: "deven.shah@icidies.com",
        plan: "Pro plan"
    };

    if (showCompose) {
    return (
            <ComposeMail2
                open={showCompose} // This will be true when rendered here
                onClose={() => setShowCompose(false)}
            />
    );
  }

    return (
        <div className="relative w-full h-screen">
            <MainLayout2 onCompose={() => setShowCompose(true)} user={user} setShowHome={setShowHome}>
                {(selectedNav) =>
                    selectedNav === "home" ? <FeatureList /> :
                        selectedNav === "inbox" ? <EmailListPreview /> :
                            <div className="flex items-center justify-center h-full bg-gray-50">
                                <div className="text-center">
                                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                                        Welcome to {selectedNav.charAt(0).toUpperCase() + selectedNav.slice(1)}
                                    </h1>
                                    <p className="text-gray-600">
                                        This section is under development.
                                    </p>
                                </div>
                            </div>
                }
            </MainLayout2>

                    <ComposeMail2
                        open={showCompose}
                        onClose={() => setShowCompose(false)}
                    />

          
            {showCompose && (

                <ComposeMail2/>
                
            )}
        </div>
    );
}

export default Page1;