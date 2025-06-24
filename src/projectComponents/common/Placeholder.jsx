import React from "react";

const Placeholder = ({ label }) => (
    <div className="p-4 bg-gray-100 border rounded text-gray-500 text-center">
        {label || "Placeholder Component"}
    </div>
);

export default Placeholder; 