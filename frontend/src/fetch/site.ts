import { req } from "./axios";
import { Event } from "../types/Event";
import { SearchResult } from "../types/SearchResult";

export const getEvent = async (id: number): Promise<Event | false> => {
    const json = await req.get(`/rafael/`);
    return json.data.event[id] as Event ?? false;

}
export const searchCPF = async (eventId: number, cpf: string): Promise<SearchResult | false> => {
    return false;
}