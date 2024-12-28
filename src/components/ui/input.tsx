import * as React from "react";

import { cn } from "@/lib/utils";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        const [password, togglePassword] = React.useState(false);
        return (
            <div className="w-full relative">
                <input
                    type={type == "password" && password ? "text" : type}
                    className={cn(
                        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                        type === "password" && "pr-8",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {type === "password" &&
                    (!password ? (
                        <EyeOpenIcon
                            className="text-gray-500 cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-10"
                            onClick={() => togglePassword(true)}
                        />
                    ) : (
                        <EyeClosedIcon
                            className="text-gray-500 cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-10"
                            onClick={() => togglePassword(false)}
                        />
                    ))}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
