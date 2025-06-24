import React from "react";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";

const TextAreaField = ({ label, value, onChange, placeholder, ...props }) => (
    <div className="mb-4">
        {label && <Label className="mb-1 block">{label}</Label>}
        <Textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
        />
    </div>
);

export default TextAreaField; 