import InputError from "../InputError";
import { Label } from "../ui/label";

export type InputFieldProps = {
    name: string;
    label?: string;
    children: React.ReactNode;
    error?: string;
    className?: string;
};

export const InputField = ({
    name,
    label,
    children,
    error,
    className,
}: InputFieldProps) => {
    return (
        <div className={className}>
            {label && <Label htmlFor={name} value={label} />}
            {children}
            {error && <InputError message={error} className="mt-1" />}
        </div>
    );
};
