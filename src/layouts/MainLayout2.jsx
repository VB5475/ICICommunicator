import React, { useState } from "react";

const navItems = [
    { label: "Inbox", icon: "📥", active: true },
    { label: "Starred", icon: "⭐" },
    { label: "Snoozed", icon: "⏰" },
    { label: "Sent", icon: "📤" },
    { label: "Drafts", icon: "📝" },
    { label: "More", icon: "⋯" },
];

const labels = [
    { label: "Personal", color: "bg-blue-500" },
    { label: "Work", color: "bg-green-500" },
    { label: "Travel", color: "bg-yellow-500" },
];

const MainLayout2 = ({ onCompose }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* Hamburger for mobile */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white rounded-full p-2 shadow-lg"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
            >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            </button>
            {/* Sidebar overlay for mobile */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setSidebarOpen(false)} />
            )}
            <aside
                className={`
                    bg-white border-r border-gray-200 flex flex-col py-4 px-2 min-h-screen
                    w-64 md:relative md:translate-x-0 md:z-10
                    fixed top-0 left-0 z-50 h-full transition-transform duration-300
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                    md:translate-x-0 md:block
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
                    className="bg-blue-600 md:w-full w-50 hover:bg-blue-700 text-white font-semibold rounded-full px-6 py-3 mb-4 shadow flex items-center justify-center text-base"
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
                {/* Labels */}
                <div className="mt-6">
                    <div className="text-xs text-gray-500 font-semibold mb-2 px-4">Labels</div>
                    {labels.map((label) => (
                        <div key={label.label} className="flex items-center px-4 py-1 text-sm">
                            <span className={`w-2 h-2 rounded-full mr-2 ${label.color}`}></span>
                            {label.label}
                        </div>
                    ))}
                </div>
                {/* Upgrade/Storage/Other bottom section */}
                <div className="h-95 width-64  flex justify-start items-end">
                    <div className=" mt-auto px-4 py-3  text-xs text-gray-400">
                        <div className="mb-1">Upgrade</div>
                        <div>Storage: 2.1 GB of 15 GB used</div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default MainLayout2; 