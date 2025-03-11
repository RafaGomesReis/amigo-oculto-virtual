export const EventItem = () => {
    return (
        <div >Carregando</div>
    )
}

export const EventItemPlaceholder = () => {
    return (
        <div className="w-full h-16 border bg-gray-700 rounded mb-3
        bg-gradient-to-r from-gray-900 to-gray-950 animate-pulse"
        >Carregando</div>
    )
}
export const EventItemNotFound = () => {
    return (
        <div className="text-center text-red-700 text-sm font-bold"
        >Nenhum evento cadastrado</div>
    )
}

