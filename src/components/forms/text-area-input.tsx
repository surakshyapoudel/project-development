import { Textarea } from "../ui/textarea";
import { InputField, InputFieldProps } from "./input-field";

type Props<T extends string> = {
    value?: string;
    name: T;
    onChange: <T>(key: T, value: string) => void;
    className?: string;
} & Omit<InputFieldProps, "name" | "children">;

export const TextAreaInput = <T extends string>({
    label,
    name,
    error,
    onChange,
    value,
    className,
}: Props<T>) => {
    return (
        <InputField
            className={className}
            name={name}
            label={label}
            error={error}
        >
            <Textarea
                id={name}
                name={name}
                value={value}
                className="mt-1 block w-full"
                autoComplete={name}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    onChange(name, e.target.value)
                }
            />
        </InputField>
    );
};
