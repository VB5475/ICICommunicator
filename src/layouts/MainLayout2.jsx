import React, { useState } from "react";
import { CircleUserRound, ChevronUp, ChevronDown, Settings, Globe, HelpCircle, Crown, BookOpen, LogOut } from "lucide-react";

const navItems = [
    { label: "Home", icon: "🏠", key: "home" },
    { label: "Inbox", icon: "📥", key: "inbox" },
    { label: "Failed", icon: "❌", key: "failed" },
    { label: "Outbox", icon: "➡️", key: "outbox" },
    { label: "Junk", icon: "🗑️", key: "junk" },
    { label: "Sent", icon: "📤", key: "sent" },
    { label: "Drafts", icon: "📝", key: "drafts" },
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

const MainLayout2 = ({ onCompose, children, user = { name: "User_name", role: "User's Role", avatar: "", email: "user@example.com", plan: "Free plan" } }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedNav, setSelectedNav] = useState("home");

    const handleMenuItemClick = (action) => {
        console.log(`Clicked: ${action}`);
        // Handle different menu actions here
        switch (action) {
            case 'settings':
                // Open settings
                break;
            case 'language':
                // Open language settings
                break;
            case 'help':
                // Open help
                break;
            case 'upgrade':
                // Open upgrade page
                break;
            case 'learn':
                // Open learn more
                break;
            case 'logout':
                // Handle logout
                break;
            default:
                break;
        }
    };

    return (
        <div className="flex h-screen lg:h-[100vh] overflow-hidden">
            {/* Hamburger for mobile */}
            {!sidebarOpen && (
                <button
                    className="block lg:hidden fixed bottom-6 right-6 z-50 bg-blue-500 text-white rounded-full p-4 shadow-lg"
                    onClick={() => setSidebarOpen(true)}
                    aria-label="Open sidebar"
                >
                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                </button>
            )}

            {/* Sidebar overlay for mobile */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 bg-black/40 xl:block" onClick={() => setSidebarOpen(false)} />
            )}

            <aside
                className={`
                    bg-white border-r border-gray-200 flex flex-col
                    w-64 lg:relative lg:translate-x-0 lg:z-10
                    fixed top-0 left-0 z-50 h-screen transition-transform duration-300
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                    lg:translate-x-0 lg:hidden xl:block
                `}
                style={{ maxWidth: '100vw', height: '100vh' }}
            >
                {/* Close button for mobile */}
                <button
                    className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-red-500 text-4xl font-bold z-10"
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Close sidebar"
                >×</button>

                {/* Fixed Compose Button at Top */}
                <div className="flex-shrink-0 p-4 pt-16 lg:pt-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-6 py-2 shadow flex items-center justify-center w-full text-base transition-colors"
                        onClick={() => { setSidebarOpen(false); onCompose && onCompose(); }}
                    >
                        <span className="mr-2 text-lg">✚</span> Compose
                    </button>
                </div>

                {/* Scrollable Middle Section - This will take up all available space */}
                <div className="flex-1 overflow-y-auto px-4 pb-4 min-h-0">
                    {/* Navigation */}
                    <nav className="mb-6">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                className={`w-full flex items-center px-4 py-2 rounded-lg mb-1 text-left text-sm font-medium transition-colors ${selectedNav === item.key
                                    ? "bg-blue-50 text-blue-700 font-bold"
                                    : "text-gray-700 hover:bg-gray-100"
                                    }`}
                                onClick={() => setSelectedNav(item.key)}
                            >
                                <span className="mr-3 text-lg">{item.icon}</span>
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Worklist */}
                    <div className="mb-6">
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
                    <div className="mb-6">
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
                </div>

                {/* Fixed User Info Block at Bottom */}
                <div className="flex-shrink-0 border-t border-gray-200 p-4">
                    <div className="relative">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-600 transition-colors rounded-lg p-3 flex items-center space-x-3 text-white shadow-sm"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                {user.avatar ? (
                                    <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                                ) : (
                                    <CircleUserRound size={24} className="text-white" />
                                )}
                            </div>
                            <div className="flex-1 min-w-0 text-left">
                                <div className="font-semibold text-sm truncate">{user.name}</div>
                                <div className="text-xs opacity-90 truncate">{user.role}</div>
                            </div>
                            {dropdownOpen ? (
                                <ChevronUp size={16} className="text-white flex-shrink-0" />
                            ) : (
                                <ChevronDown size={16} className="text-white flex-shrink-0" />
                            )}
                        </button>

                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                <div className="p-4 border-b border-gray-100">
                                    <div className="text-sm text-gray-600 mb-2">{user.email || "user@example.com"}</div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-6 h-6 bg-gray-800 text-white rounded text-xs flex items-center justify-center font-semibold">
                                            {user.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm">Personal</div>
                                            <div className="text-xs text-gray-500">{user.plan || "Free plan"}</div>
                                        </div>
                                        <div className="ml-auto">
                                            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                                                    <path d="M7 1L3 5L1 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="py-1">
                                    <button
                                        onClick={() => handleMenuItemClick('settings')}
                                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center"
                                    >
                                        <Settings size={16} className="mr-3" />
                                        Settings
                                    </button>
                                    <button
                                        onClick={() => handleMenuItemClick('help')}
                                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center"
                                    >
                                        <HelpCircle size={16} className="mr-3" />
                                        Get help
                                    </button>
                                    <div className="border-t border-gray-100 my-1"></div>
                                    <button
                                        onClick={() => handleMenuItemClick('learn')}
                                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center"
                                    >
                                        <BookOpen size={16} className="mr-3" />
                                        Learn more
                                        <ChevronUp size={16} className="ml-auto rotate-90" />
                                    </button>
                                    <div className="border-t border-gray-100 my-1"></div>
                                    <button
                                        onClick={() => handleMenuItemClick('logout')}
                                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-red-600 hover:text-red-700 flex items-center"
                                    >
                                        <LogOut size={16} className="mr-3" />
                                        Log out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* Main content area */}
            <main className="flex-1 h-screen overflow-y-auto p-0 md:p-6">
                {typeof children === 'function' ? children(selectedNav) : children}
            </main>
        </div>
    );
};

export default MainLayout2;