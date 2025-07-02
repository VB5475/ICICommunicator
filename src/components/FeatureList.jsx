import React from "react";
import {
    CalendarCheck,
    Bell,
    Settings,
    KeyRound,
    MessageCircle,
    ListChecks,
    CheckCircle2,
    Signature,
    Reply,
    Archive,
    Flag,
    FileText,
    Users,
    Mail,
    Link,
    ShieldAlert,
    ClipboardList,
    X,
} from "lucide-react";
{/* <Signature /> */ }

const allSections = [
    {
        title: "UpComing Event",
        items: [
            { label: "Followup", icon: <CheckCircle2 className="mr-2 h-5 w-5 text-blue-500" /> },
            { label: "Reminder", icon: <Bell className="mr-2 h-5 w-5 text-yellow-500" /> },
        ],
    },
    {
        title: "Setting",
        items: [
            { label: "Change Password", icon: <KeyRound className="mr-2 h-5 w-5 text-gray-500" /> },
            { label: "Suggestion", icon: <MessageCircle className="mr-2 h-5 w-5 text-green-500" /> },
        ],
    },
    {
        title: "Completed List",
        items: [
            { label: "Work List", icon: <ListChecks className="mr-2 h-5 w-5 text-indigo-500" /> },
            { label: "Followup", icon: <CheckCircle2 className="mr-2 h-5 w-5 text-blue-500" /> },
        ],
    },
    {
        title: "External Messages",
        items: [
            { label: "Add Signature", icon: <Signature className="mr-2 h-5 w-5 text-purple-500" /> },
            { label: "Auto Mail Response", icon: <Reply className="mr-2 h-5 w-5 text-orange-500" /> },
            { label: "Archive Flag Mails", icon: <Archive className="mr-2 h-5 w-5 text-gray-400" /> },
        ],
    },
    {
        title: "Quick Navigation",
        items: [
            { label: "Email Template Master", icon: <FileText className="mr-2 h-5 w-5 text-blue-400" />, hasX: true },
            { label: "Manage Userwise Mail Account", icon: <Users className="mr-2 h-5 w-5 text-pink-400" />, hasX: true },
            { label: "Userwise Mail List", icon: <Mail className="mr-2 h-5 w-5 text-green-400" />, hasX: true },
            { label: "Manage User Link List", icon: <Link className="mr-2 h-5 w-5 text-yellow-400" />, hasX: true },
            { label: "Userwise Junk Mail List", icon: <ShieldAlert className="mr-2 h-5 w-5 text-red-400" />, hasX: true },
            { label: "Userwise Task", icon: <ClipboardList className="mr-2 h-5 w-5 text-indigo-400" />, hasX: true },
        ],
        twoColumn: true,
    },
];

const gridSections = allSections.filter(s => s.title !== "Quick Navigation");
const quickNavSection = allSections.find(s => s.title === "Quick Navigation");
// const externalMessagesSection = allSections.find(s => s.title === "External Messages");

const FeatureList = () => (
    <div className="w-full max-w-5xl mx-auto px-2 lg:px-0 flex flex-col min-h-screen md:min-h-0 md:h-full">
        <div className="grid md:grid-cols-2 gap-6 ">
            {gridSections.map((section) => (
                <div key={section.title} className="bg-white rounded-2xl shadow p-6 border border-gray-100 flex flex-col">
                    <div className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wide">
                        {section.title}
                    </div>
                    <div className="space-y-2">
                        {section.items.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center justify-between bg-gray-50 hover:bg-blue-50 transition rounded-lg px-4 py-2 cursor-pointer shadow-sm border border-gray-100"
                            >
                                <div className="flex items-center">
                                    {item.icon}
                                    <span className="font-medium text-gray-700">{item.label}</span>
                                </div>
                                {item.hasX && <X className="h-5 w-5 text-gray-400 hover:text-red-400 transition" />}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        {/* {externalMessagesSection && (
            <div className="mt-4 md:mt-6 lg:mt-8">
                <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
                    <div className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wide">
                        {externalMessagesSection.title}
                    </div>
                    <div className="space-y-2">
                        {externalMessagesSection.items.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center justify-between bg-gray-50 hover:bg-blue-50 transition rounded-lg px-4 py-2 cursor-pointer shadow-sm border border-gray-100"
                            >
                                <div className="flex items-center">
                                    {item.icon}
                                    <span className="font-medium text-gray-700">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )} */}
        {quickNavSection && (
            <div className="mt-4 md:mt-6 lg:mt-8 mb-0 flex-shrink-0">
                <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
                    <div className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wide">
                        {quickNavSection.title}
                    </div>
                    <div className="grid md:grid-cols-2 gap-2">
                        {quickNavSection.items.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center justify-between  bg-gray-50 hover:bg-blue-50 transition rounded-lg px-4 py-2 cursor-pointer shadow-sm border border-gray-100"
                            >
                                <div className="flex items-center">
                                    {item.icon}
                                    <span className="font-medium text-gray-700">{item.label}</span>
                                </div>
                                {item.hasX && <X className="h-5 w-5 text-gray-400 hover:text-red-400 transition" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
        <div className="mt-4 md:mt-6 lg:mt-8">
            <div className="bg-white rounded-2xl shadow p-4 md:p-5 lg:p-6 border border-gray-100">
                <div className="text-xs font-bold text-gray-500 mb-2 md:mb-3 uppercase tracking-wide">
                    Today's Events
                </div>
                <div className="bg-gray-50 rounded-lg px-3 md:px-4 py-2 md:py-3 text-gray-400 italic shadow-sm border border-gray-100 text-sm md:text-base">
                    Currently No Events Exist
                </div>
            </div>
        </div>
    </div>
);

export default FeatureList; 