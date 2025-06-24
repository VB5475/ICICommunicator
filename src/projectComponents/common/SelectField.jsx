import React from "react";
import { Select } from "../../components/ui/select";
import { Label } from "../../components/ui/label";

const SelectField = ({ label, value, onChange, options = [], placeholder, ...props }) => (
    <div className="mb-4">
        {label && <Label className="mb-1 block">{label}</Label>}
        <Select value={value} onValueChange={onChange} {...props}>
            <Select.Trigger>{placeholder || "Select..."}</Select.Trigger>
            <Select.Content>
                {options.map((opt) => (
                    <Select.Item key={opt.value} value={opt.value}>
                        {opt.label}
                    </Select.Item>
                ))}
            </Select.Content>
        </Select>
    </div>
);

export default SelectField; 