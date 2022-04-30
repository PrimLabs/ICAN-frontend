import React from "react";
interface Props {
    id: string;
    placeholder: string;
    onChange: Function;
    required?: boolean;
    value: any;
    type?: string;
}
export const Input = ({
    id,
    placeholder,
    required,
    onChange,
    value,
    type,
}: Props) => {
    return (
        <input
            id={id}
            className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-3xl rounded-lg focus-visible: outline-none focus:ring-blue-100 focus:border-blue-100 block w-full p-2.5"
            placeholder={placeholder}
            onChange={(e) => onChange(e)}
            required={required}
            type={type}
            // value={value}
        />
    );
};
