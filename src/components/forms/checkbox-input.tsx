import { Switch } from "../ui/switch";
import { InputField, InputFieldProps } from "./input-field";

type Props<T extends string> = {
    checked: boolean;
    name: T;
    className?: string;
    onChange: <T>(key: T, value: boolean) => void;
} & Omit<InputFieldProps, "name" | "children">;

export const CheckBoxInput = <T extends string>({
    label,
    name,
    error,
    onChange,
    className,
    checked,
}: Props<T>) => {
    return (
        <InputField
            className={className}
            name={name}
            label={label}
            error={error}
        >
            <Switch
                name={name}
                checked={checked}
                id={name}
                className="mt-1 block "
                onCheckedChange={(e) => onChange(name, e)}
            />
        </InputField>
    );
};
