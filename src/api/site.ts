import { req } from "@/api/axios";
import { Event } from "@/types/event";

export const getEvent = async (id: number): Promise<Event | false> => {
    try {
        if (!id || id <= 0) {
            throw new Error('ID do evento inválido');
        }

        const response = await req.get(`/events/${id}`);

        console.log("Respota total", response);
        console.log("Respota data", response.data);
        console.log("Respota event", response.data.events);
        
        if (!response.data?.events) {
            return false;
        }

        return response.data.event as Event;
    } catch (error) {
        console.error('Erro ao buscar evento:', error);
        return false;
    }
}
