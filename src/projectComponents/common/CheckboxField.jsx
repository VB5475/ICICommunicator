import React from "react";
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";

const CheckboxField = ({ label, checked, onChange, ...props }) => (
    <div className="flex items-center mb-4 space-x-2">
        <Checkbox checked={checked} onCheckedChange={onChange} {...props} />
        {label && <Label>{label}</Label>}
    </div>
);

export default CheckboxField; 