import { TipTap } from "../tiptap/TipTap";
import { InputField, InputFieldProps } from "./input-field";

type Props<T extends string> = {
    value?: string;
    name: T;
    className?: string;
    onChange: <T>(key: T, value: string) => void;
} & Omit<InputFieldProps, "name" | "children">;

export const RichTextInput = <T extends string>({
    label,
    name,
    error,
    onChange,
    className,
    value,
}: Props<T>) => {
    return (
        <InputField
            className={className}
            name={name}
            label={label}
            error={error}
        >
            <TipTap
                name={name}
                content={value}
                onChange={(s: string) => onChange(name, s)}
            />
        </InputField>
    );
};
