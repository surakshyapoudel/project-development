import { Input } from "../ui/input";
import { InputField, InputFieldProps } from "./input-field";

type Props<T extends string> = {
    name: T;
    accept?: string;
    className?: string;
    onChange: <T>(key: T, value: File | null) => void;
} & Omit<InputFieldProps, "name" | "children">;

export const FileInput = <T extends string>({
    label,
    name,
    error,
    onChange,
    className,
    accept,
}: Props<T>) => {
    return (
        <InputField
            className={className}
            name={name}
            label={label}
            error={error}
        >
            <Input
                id={name}
                type="file"
                name={name}
                accept={accept}
                className="mt-1 block w-full"
                onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        onChange(name, e.target.files![0]!);
                    }
                }}
            />
        </InputField>
    );
};
