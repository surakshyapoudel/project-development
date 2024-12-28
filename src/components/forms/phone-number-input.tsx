import { PhoneInput } from "../ui/phone-input";
import { InputField, InputFieldProps } from "./input-field";

type Props<T extends string> = {
    value?: string;
    name: T;
    className?: string;
    onChange: <T>(key: T, value: string) => void;
    placeholder?: string;
    type?: "email" | "text" | "password" | "number" | "tel" | "url";
    inputClassName?: string;
} & Omit<InputFieldProps, "name" | "children">;

export const PhoneNumberInput = <T extends string>({
    label,
    name,
    error,
    onChange,
    className,
    value,

    placeholder,
    inputClassName,
}: Props<T>) => {
    return (
        <InputField
            className={className}
            name={name}
            label={label}
            error={error}
        >
            <PhoneInput
                value={value}
                onChange={(value) => onChange(name, value)}
                className={inputClassName}
                id={name}
                name={name}
                international
                placeholder={placeholder}
            />
        </InputField>
    );
};
