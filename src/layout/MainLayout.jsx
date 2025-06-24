import React from "react";

const MainLayout = ({ children }) => {
    return (
        <div className="flex h-screen w-screen bg-white">
            {/* Top Header Bar */}
            <div className="fixed top-0 left-0 right-0 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-between px-4 z-50">
                <div className="flex items-center space-x-4">
                    <span className="font-bold text-lg">Communicator</span>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                    <span>23/Jun/2025</span>
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center">
                            <span className="text-xs text-black">📧</span>
                        </div>
                        <span>Hi, Hardik Jagdishchandra Bhatt</span>
                        <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                            <span className="text-xs">✉</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="fixed top-12 left-0 right-0 h-10 bg-blue-500 flex items-center px-4 z-40">
                <div className="flex space-x-1">
                    <button className="px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-t">
                        Compose
                    </button>
                    <button className="px-4 py-1 bg-blue-400 hover:bg-blue-500 text-white text-sm rounded-t">
                        Inbox
                    </button>
                    <button className="px-4 py-1 bg-blue-400 hover:bg-blue-500 text-white text-sm rounded-t">
                        Draft
                    </button>
                    <button className="px-4 py-1 bg-blue-400 hover:bg-blue-500 text-white text-sm rounded-t">
                        Outbox
                    </button>
                    <button className="px-4 py-1 bg-blue-400 hover:bg-blue-500 text-white text-sm rounded-t">
                        Sent
                    </button>
                    <button className="px-4 py-1 bg-blue-400 hover:bg-blue-500 text-white text-sm rounded-t">
                        Junk
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col pt-22 bg-gray-50">
                <main className="flex-1 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;