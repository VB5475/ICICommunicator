import React, { useState } from "react";
import MainLayout2 from "@/layouts/MainLayout2";
import ComposeMail2 from "./ComposeMail2";
import FeatureList from "@/components/FeatureList";
import EmailListPreview from "@/components/EmailListPreview";

function Page1() {
    const [showCompose, setShowCompose] = useState(false);

    const user = {
        name: "Deven Shah",
        role: "MD",
        avatar: "",
        email: "deven.shah@icidies.com",
        plan: "Pro plan"
    };

    return (
        <>
            <MainLayout2 onCompose={() => setShowCompose(true)} user={user}>
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
            {showCompose && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                        <div className="w-full h-full md:h-auto md:w-auto flex items-center justify-center">
                            <div className="w-full h-full max-w-full md:max-w-2xl lg:max-w-4xl bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden">
                                <ComposeMail2 open={showCompose} onClose={() => setShowCompose(false)} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Page1;