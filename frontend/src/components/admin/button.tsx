
type Props = {
    value: string;
    onClick: () => void;
    disabled?: boolean;
}


export const Button = ({ value, onClick, disabled }: Props) => {
    return (
            <button 
            onClick={onClick}
            className="w-full p-2 text-lg block rounded-md border
                outline-none bg-blue-700 text-white text-center
                border-b-4  border-blue-900 mb-2
                hover:bg-blue-900
                disabled:opacity-50 disabled:cursor-not-allowed
                active:border-0 disabled:opacity-50"
            disabled={disabled}
            >{value}</button>
    )
}
