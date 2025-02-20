import { ChangeEvent } from "react";

type Props = {
    type?: "text" | "password";
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string;
    disabled?: boolean;
    errorMessage?: string;
}

export const InputField = ({ type, value, onChange, placeholder, disabled, errorMessage }: Props) => {
    return (
        <div className="h-full my-3">
            <input type={type || 'text'}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={`w-full p-2 text-lg block rounded-md border
                outline-none bg-gray-900 text-white
                border-b-2 ${errorMessage ? 'border-red-700' : 'border-blue-800'}
                focus:border-green-500`}
            />
            {errorMessage && <div className="text-red-700 text-right text-3xl">{errorMessage}</div>}
        </div>
    )
}
