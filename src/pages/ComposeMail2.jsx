import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const ComposeMail2 = ({ open, onClose }) => {
    const [to, setTo] = useState("");
    const [cc, setCc] = useState("");
    const [bcc, setBcc] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [showCc, setShowCc] = useState(false);
    const [showBcc, setShowBcc] = useState(false);

    useEffect(() => {
        if (!open) {
            setTo("");
            setCc("");
            setBcc("");
            setSubject("");
            setContent("");
            setShowCc(false);
            setShowBcc(false);
        }
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed top-0 right-0 h-full w-[420px] bg-white shadow-2xl border-l border-gray-200 z-50 flex flex-col pl-5 lg:pl-4 lg:pr-4">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
                <span className="font-medium text-gray-800 text-base">New Message</span>
                <button className="text-gray-400 hover:text-red-500 text-2xl font-bold" onClick={onClose}>×</button>
            </div>
            {/* Fields */}
            <div className="px-5 pt-4 pb-2 space-y-2">
                {/* To */}
                <div className="flex items-center">
                    <span className="w-14 text-xs text-gray-500">To</span>
                    <Input
                        value={to}
                        onChange={e => setTo(e.target.value)}
                        className="flex-1 text-xs border-0 focus:ring-0 px-1 py-1 bg-transparent"
                        placeholder="Recipients"
                    />
                    <button className="text-xs text-blue-600 ml-2" onClick={() => setShowCc(!showCc)}>Cc</button>
                    <button className="text-xs text-blue-600 ml-1" onClick={() => setShowBcc(!showBcc)}>Bcc</button>
                </div>
                {/* Cc */}
                {showCc && (
                    <div className="flex items-center">
                        <span className="w-14 text-xs text-gray-500">Cc</span>
                        <Input
                            value={cc}
                            onChange={e => setCc(e.target.value)}
                            className="flex-1 text-xs border-0 focus:ring-0 px-1 py-1 bg-transparent"
                            placeholder="Cc"
                        />
                    </div>
                )}
                {/* Bcc */}
                {showBcc && (
                    <div className="flex items-center">
                        <span className="w-14 text-xs text-gray-500">Bcc</span>
                        <Input
                            value={bcc}
                            onChange={e => setBcc(e.target.value)}
                            className="flex-1 text-xs border-0 focus:ring-0 px-1 py-1 bg-transparent"
                            placeholder="Bcc"
                        />
                    </div>
                )}
                {/* Subject */}
                <div className="flex items-center">
                    <span className="w-14 text-xs text-gray-500">Subject</span>
                    <Input
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        className="flex-1 text-xs border-0 focus:ring-0 px-1 py-1 bg-transparent"
                        placeholder="Subject"
                    />
                </div>
            </div>
            {/* Toolbar */}
            <div className="px-5 py-2 border-t border-b border-gray-100 bg-gray-50 flex items-center space-x-2 text-gray-600 text-sm">
                <button className="hover:bg-gray-200 p-1 rounded" title="Formatting"><b>B</b></button>
                <button className="hover:bg-gray-200 p-1 rounded" title="Italic"><i>I</i></button>
                <button className="hover:bg-gray-200 p-1 rounded" title="Underline"><u>U</u></button>
                <button className="hover:bg-gray-200 p-1 rounded" title="Attach">📎</button>
                <button className="hover:bg-gray-200 p-1 rounded" title="Insert link">🔗</button>
                <button className="hover:bg-gray-200 p-1 rounded" title="Insert emoji">😊</button>
                <button className="hover:bg-gray-200 p-1 rounded" title="Insert image">🖼️</button>
                <button className="hover:bg-gray-200 p-1 rounded" title="More">⋯</button>
            </div>
            {/* Content */}
            <div className="px-5 py-3 flex-1 overflow-y-auto">
                <Textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    className="w-full min-h-[200px] border-0 focus:ring-0 text-sm resize-none bg-transparent"
                    placeholder="Write your message..."
                />
            </div>
            {/* Actions */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50">
                <div className="flex items-center space-x-2">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-1 text-sm rounded-full">Send</Button>
                    <button className="text-xs text-gray-600 hover:underline">Discard</button>
                </div>

                <div className="flex items-center space-x-2">
                    <button className="text-xs text-gray-600 hover:underline">Confidential mode</button>
                    <button className="text-xs text-gray-600 hover:underline">More options</button>
                </div>
            </div>
        </div>
    );
};

export default ComposeMail2; 