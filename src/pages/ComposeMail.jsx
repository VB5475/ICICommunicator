import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

const ComposeMail = () => {
    const [from, setFrom] = useState("hardik.bhatt@icidyes.com");
    const [to, setTo] = useState("");
    const [cc, setCc] = useState("");
    const [bcc, setBcc] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [contactType, setContactType] = useState("USERS");
    const [showCC, setShowCC] = useState(false);
    const [showBCC, setShowBCC] = useState(false);
    const [showSignature, setShowSignature] = useState(true);
    const [saveClipboard, setSaveClipboard] = useState(false);
    const [selectTemplate, setSelectTemplate] = useState(false);
    const [tndDate, setTndDate] = useState("");

    const signature = (
        <div className="text-sm text-gray-600 border-t pt-4 mt-4">
            <div className="mb-1">Regards</div>
            <div className="font-semibold text-gray-800 mb-2">Hardik Bhatt</div>
            <div className="flex items-center space-x-2 mb-1">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">S</span>
                </div>
                <div>
                    <div className="font-semibold text-gray-800">INDIAN CHEMICAL INDUSTRIES</div>
                    <div className="text-xs text-gray-500 italic">Daring to be Different to Win</div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="p-4 bg-gray-50 min-h-screen">
            {/* Page Title */}
            <div className="mb-4">
                <div className="bg-blue-100 border border-blue-300 px-3 py-1 inline-block rounded text-sm">
                    [External Mail - Compose]
                </div>
            </div>

            {/* Main Compose Card */}
            <Card className="shadow-lg border border-gray-200 rounded bg-white">
                {/* Content Details Header */}
                <div className="bg-blue-50 border-b border-blue-200 px-4 py-2">
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm font-medium text-blue-800">Content Details</span>
                    </div>
                </div>

                <div className="p-4 space-y-4">
                    {/* From Field */}
                    <div className="flex items-center space-x-4">
                        <Label className="w-20 text-sm font-medium">From</Label>
                        <Input
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            className="flex-1 text-sm"
                        />
                    </div>

                    {/* Contact Type */}
                    <div className="flex items-center space-x-4">
                        <Label className="w-20 text-sm font-medium">Contact Type :</Label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center space-x-1">
                                <input
                                    type="radio"
                                    name="contactType"
                                    value="USERS"
                                    checked={contactType === "USERS"}
                                    onChange={(e) => setContactType(e.target.value)}
                                />
                                <span className="text-sm">USERS</span>
                            </label>
                            <label className="flex items-center space-x-1">
                                <input
                                    type="radio"
                                    name="contactType"
                                    value="OTHERS"
                                    checked={contactType === "OTHERS"}
                                    onChange={(e) => setContactType(e.target.value)}
                                />
                                <span className="text-sm">OTHERS</span>
                            </label>
                            <label className="flex items-center space-x-1">
                                <input
                                    type="radio"
                                    name="contactType"
                                    value="ALL"
                                    checked={contactType === "ALL"}
                                    onChange={(e) => setContactType(e.target.value)}
                                />
                                <span className="text-sm">ALL</span>
                            </label>
                        </div>
                    </div>

                    {/* To Field */}
                    <div className="flex items-center space-x-4">
                        <Label className="w-20 text-sm font-medium">To :</Label>
                        <div className="flex-1 relative">
                            <Input
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                                placeholder="add a tag"
                                className="text-sm pr-20"
                            />
                            <Button
                                variant="outline"
                                size="sm"
                                className="absolute right-1 top-1 h-7 px-2 text-xs"
                                onClick={() => setTo("")}
                            >
                                Clear
                            </Button>
                        </div>
                    </div>

                    {/* Type EmailID or UserName */}
                    <div className="flex items-center space-x-4">
                        <Label className="w-20 text-sm font-medium">Type EmailID or UserName:</Label>
                        <div className="flex-1 relative">
                            <Input
                                placeholder=""
                                className="text-sm pr-20"
                            />
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-6 px-2 text-xs bg-blue-500 text-white hover:bg-blue-600"
                                    onClick={() => setShowCC(!showCC)}
                                >
                                    + CC
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* CC Field */}
                    {showCC && (
                        <div className="flex items-center space-x-4">
                            <Label className="w-20 text-sm font-medium">CC :</Label>
                            <div className="flex-1 relative">
                                <Input
                                    value={cc}
                                    onChange={(e) => setCc(e.target.value)}
                                    className="text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowCC(false)}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none"
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Subject and TND */}
                    <div className="flex items-center space-x-4">
                        <Label className="w-20 text-sm font-medium">Subject :</Label>
                        <Input
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="flex-1 text-sm"
                        />
                        <Label className="text-sm font-medium">Tnd</Label>
                        <Input
                            type="date"
                            value={tndDate}
                            onChange={(e) => setTndDate(e.target.value)}
                            className="w-32 text-sm"
                            placeholder="DD/MM/YYYY"
                        />
                        <Button
                            variant="outline"
                            size="sm"
                            className="px-2 text-xs"
                            onClick={() => setTndDate("")}
                        >
                            Clear TND
                        </Button>
                    </div>
                </div>

                {/* List Screen Signature Section */}
                <div className="bg-blue-50 border-y border-blue-200 px-4 py-2">
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="rounded"
                            checked={showSignature}
                            onChange={(e) => setShowSignature(e.target.checked)}
                        />
                        <span className="text-sm font-medium text-blue-800">List Screen : Signature Section</span>
                    </div>
                </div>

                {/* Content Options */}
                <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm">Content :</span>
                            <label className="flex items-center space-x-1">
                                <input
                                    type="checkbox"
                                    checked={saveClipboard}
                                    onChange={(e) => setSaveClipboard(e.target.checked)}
                                />
                                <span className="text-sm">Save Content in Clipboard</span>
                            </label>
                            <label className="flex items-center space-x-1">
                                <input
                                    type="checkbox"
                                    checked={selectTemplate}
                                    onChange={(e) => setSelectTemplate(e.target.checked)}
                                />
                                <span className="text-sm">Select Template</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Rich Text Editor Toolbar */}
                <div className="border-b border-gray-200 p-2">
                    <div className="flex items-center space-x-1 text-sm">
                        <select className="border rounded px-2 py-1 text-xs">
                            <option>Normal</option>
                            <option>Heading 1</option>
                            <option>Heading 2</option>
                        </select>
                        <select className="border rounded px-2 py-1 text-xs">
                            <option>Font</option>
                            <option>Arial</option>
                            <option>Times</option>
                        </select>
                        <select className="border rounded px-2 py-1 text-xs">
                            <option>3</option>
                            <option>1</option>
                            <option>2</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <select className="border rounded px-2 py-1 text-xs">
                            <option>Color</option>
                        </select>

                        <div className="flex items-center space-x-1 ml-2">
                            <button className="p-1 hover:bg-gray-100 rounded text-xs font-bold">B</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs italic">I</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs underline">U</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">abc</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">🔗</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">📎</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">📷</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">≡</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">≡</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">≡</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">•</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">1.</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">⬅</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">➡</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">📊</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">🔍</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">📋</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">✂</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">📄</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">↶</button>
                            <button className="p-1 hover:bg-gray-100 rounded text-xs">↷</button>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-4">
                    <Textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder=""
                        className="min-h-[200px] border-0 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none text-sm leading-relaxed p-0"
                    />

                    {/* Signature */}
                    <Collapsible open={showSignature} onOpenChange={setShowSignature}>
                        <CollapsibleContent>
                            {signature}
                        </CollapsibleContent>
                    </Collapsible>
                </div>

                {/* Bottom Action Bar */}
                <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">Design</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">HTML</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 text-sm">
                            Send
                        </Button>
                        <Button variant="outline" className="px-4 py-1 text-sm">
                            Draft
                        </Button>
                        <Button variant="outline" className="px-4 py-1 text-sm">
                            Discard
                        </Button>
                        <Button variant="outline" className="px-4 py-1 text-sm">
                            Cancel
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ComposeMail;