type Props = {
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = ({onClose, children}: Props) => {
    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 w-full h-full bg-black 
                        bg-opacity-50 flex flex-col justify-center items-center">
                <div className="w-full max-w-xl my-3"> 
                    <div onClick={onClose} className="w-8 h-8 rounded-full bg-gray-900 text-white text-lg 
                    flex items-center justify-center cursor-pointer hover:bg-gray-800 ">X</div>
                </div>
                <div className="bg-gray-800 w-full max-w-xl mb-5 rounded-md p-4">{children}</div>
        </div>
    )
}
