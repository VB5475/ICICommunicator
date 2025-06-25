import React, { useState } from "react";
import { CircleUserRound } from "lucide-react";

const navItems = [
    { label: "Inbox", icon: "📥", active: true },
    { label: "Failed", icon: "❌" },
    { label: "Outbox", icon: "➡️" },
    { label: "Junk", icon: "🗑️" },
    { label: "Sent", icon: "📤" },
    { label: "Drafts", icon: "📝" },
    // { label: "More", icon: "⋯" },
];

const worklistItems = [
    { label: "New Task", icon: "➕" },
    { label: "Pending", icon: "⏳" },
    { label: "In Process", icon: "⚙️" },
];

const followupItems = [
    { label: "New Followup", icon: "➕" },
    { label: "Pending", icon: "⏳" },
];

// const labels = [
//     { label: "Personal", color: "bg-blue-500" },
//     { label: "Work", color: "bg-green-500" },
//     { label: "Travel", color: "bg-yellow-500" },
// ];

const MainLayout2 = ({ onCompose, children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen overflow-hidden">
            {/* Hamburger for mobile */}
            <button
                className="md:block lg:hidden fixed top-4 left-4 md:top-0 md:left-0 z-50 bg-blue-600 text-white rounded-full p-2 shadow-lg"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
            >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            </button>
            {/* Sidebar overlay for mobile */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 bg-black/40 lg:block" onClick={() => setSidebarOpen(false)} />
            )}
            <aside
                className={`
                    bg-white border-r border-gray-200 flex flex-col py-4 px-2
                    w-64 md:relative md:translate-x-0 md:z-10
                    fixed top-0 left-0 z-50 h-screen transition-transform duration-300
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                    md:translate-x-0 md:hidden lg:block
                    overflow-y-auto
                `}
                style={{ maxWidth: '100vw' }}
            >
                {/* Close button for mobile */}
                <button
                    className="md:hidden absolute top-4 right-4 text-gray-400 hover:text-red-500 text-4xl font-bold"
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Close sidebar"
                >×</button>
                {/* Compose Button */}
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 py-2 mb-2 shadow flex items-center justify-center mx-auto text-base"
                    onClick={() => { setSidebarOpen(false); onCompose && onCompose(); }}
                >
                    <span className="mr-2 text-lg">✚</span> Compose
                </button>
                {/* Navigation */}
                <nav className="flex-1">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            className={`w-full flex items-center px-4 py-2 rounded-lg mb-1 text-left text-sm font-medium transition-colors ${item.active
                                ? "bg-blue-50 text-blue-700 font-bold"
                                : "text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            <span className="mr-3 text-lg">{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </nav>
                {/* Worklist */}
                <div className="mt-2">
                    <div className="text-xs text-gray-500 font-semibold mb-2 px-4">Worklist</div>
                    {worklistItems.map((item) => (
                        <button
                            key={item.label}
                            className={`w-full flex items-center px-4 py-2 rounded-lg mb-1 text-left text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100`}
                        >
                            <span className="mr-3 text-lg">{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </div>
                {/* Followup */}
                <div className="mt-2">
                    <div className="text-xs text-gray-500 font-semibold mb-2 px-4">Followup</div>
                    {followupItems.map((item) => (
                        <button
                            key={item.label}
                            className={`w-full flex items-center px-4 py-2 rounded-lg mb-1 text-left text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100`}
                        >
                            <span className="mr-3 text-lg">{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </div>
                {/* Upgrade/Storage/Other bottom section */}
                <div className="h-50 width-64 flex justify-start items-end gap-0">
                   <div className="flex justify-center items-center border-2 border-black rounded-3xl ">
                        <div className="px-4 py-3 flex items-center lg:mb-2">
                            <CircleUserRound size={40} strokeWidth={1.5} className=""/>
                        </div>
                        <div className=" px-4 py-3 text-xs text-gray-400 ml-[-20px]">
                            <div className="font-bold lg:text-xl md:text-lg text-sm">User_name </div>
                            <div className="lg:text-xl md:text-lg text-sm">User's Role </div>
                        </div>
                   </div>
                </div>
            </aside>
            {/* Main content area */}
            <main className="flex-1 h-screen overflow-y-auto bg-gray-50">
                {children}
            </main>
        </div>
    );
};

export default MainLayout2; 