import React from "react";

const emails = [
    {
        id: 1,
        sender: "LinkedIn News India",
        subject: "This country just paved the way for Indian students",
        snippet: "Indian students can now skip this red tape to reach New Zealand. Here's why it matters.",
        time: "5:59 PM",
        unread: true,
    },
    {
        id: 2,
        sender: "Google",
        subject: "Security alert",
        snippet: "You allowed AllEvents.in access to some of your Google Account data...",
        time: "1:06 PM",
        unread: false,
    },
    {
        id: 3,
        sender: "Scout Sync Consultants",
        subject: "[Next steps] Interview steps after updating the profile!",
        snippet: "Dear Vatsal, I am a Sr. Recruitment Consultant...",
        time: "11:19 AM",
        unread: true,
    },
    {
        id: 4,
        sender: "HRMOS",
        subject: "Thank you for applying to Sales Marker",
        snippet: "Hello, This is Talent Acquisition Team from Sales Marker...",
        time: "11:12 AM",
        unread: false,
    },
    {
        id: 5,
        sender: "Vaibhav Pansambal",
        subject: "Vaibhav just messaged you",
        snippet: "1 new message awaits your response",
        time: "Jun 22",
        unread: true,
    },
];

const EmailListPreview = () => {
    return (
        <div className="bg-white rounded-lg shadow border border-gray-200 h-full overflow-y-auto w-full max-w-[420px] md:max-w-[340px] sm:max-w-full min-w-0 flex flex-col mx-auto md:mx-0 p-0 sm:p-0">
            {/* Header */}
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between sm:px-2 sm:py-2">
                <span className="font-semibold text-gray-800 text-base sm:text-sm">Primary</span>
                <span className="text-xs text-gray-500">{emails.length} emails</span>
            </div>
            {/* Email List */}
            <ul className="flex-1 divide-y divide-gray-100">
                {emails.map((mail) => (
                    <li
                        key={mail.id}
                        className={`px-4 py-3 flex items-start space-x-3 cursor-pointer hover:bg-blue-50 transition-colors ${mail.unread ? "bg-blue-50/50" : ""} sm:px-2 sm:py-2`}
                    >
                        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg sm:w-7 sm:h-7 sm:text-base">
                            {mail.sender[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                                <span className={`font-medium text-sm truncate ${mail.unread ? "text-blue-800" : "text-gray-800"} sm:text-xs`}>{mail.sender}</span>
                                <span className="text-xs text-gray-400 ml-2 whitespace-nowrap">{mail.time}</span>
                            </div>
                            <div className={`truncate text-sm ${mail.unread ? "font-semibold" : "text-gray-600"} sm:text-xs`}>{mail.subject}</div>
                            <div className="truncate text-xs text-gray-500">{mail.snippet}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmailListPreview; 