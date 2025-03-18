import { FaLink, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Event } from "../../../types/Event";
import { ItemButton } from "../itemButton";
import * as api from '../../../fetch/admin';

type Props = {
    item: Event;
    refreshAction: () => void;
    openModal: (item: Event) => void
}


export const EventItem = ({item, refreshAction, openModal}: Props) => {

    const handleDeleteButton = async () => {
        if(confirm("Tem certeza que deseja excluir este evento?")){
            await api.deleteEvent(item.id);
            refreshAction();
        }
    }

    const handleEditButton = () => openModal(item);



    return (
        <div className="border bg-gray-800 rounded p-3 mb-3 flex flex-col md:flex-row items-center">
            <div className="flex-1 text-xl md:text-base">{item.title}</div>
            <div className="flex items-center gap-1 mt-2 md:mt-0">
                {item.status &&
                    <div className="border border-dashed border-gray-500 rounded">
                        <ItemButton
                            IconElement={FaLink}
                            label="Link do evento"
                            href={`/event/${item.id}`}
                            target="_blank"/>    
                    </div>}

                <ItemButton
                    IconElement={FaRegEdit}
                    label="Editar"
                    onClick={handleEditButton}
                />
                <ItemButton
                    IconElement={FaRegTrashAlt}
                    label="Excluir"
                    onClick={handleDeleteButton}
                />
            </div>
        </div>
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

